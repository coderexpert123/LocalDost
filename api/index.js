const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');
 

const app = express();
const port = 3000;
const cors = require('cors');

const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.json());

const jwt = require('jsonwebtoken');

mongoose
  .connect('mongodb+srv://admin:admin@cluster0.bz6zgds.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.log('Error connecting to MongoDB', error);
  });

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${port}`);
  });

const User = require('./models/user');
 

const generateToken = user => {
  // Define your secret key used to sign the token
  const secretKey = crypto.randomBytes(32).toString('hex');


  // Generate the token with the payload and secret key
  const token = jwt.sign(payload, secretKey, {expiresIn: '1d'}); // Token expires in 1 hour

  return token;
};

// Backend Route to Create User and Generate Token
app.post('/register', async (req, res) => {
  try {
    // Extract user data from the request body
    const userData = req.body;

    // Create a new user using the User model
    const newUser = new User(userData);

    await newUser.save();

    const secretKey = crypto.randomBytes(32).toString('hex');

    // Generate a token for the new user (you may use JWT or any other token generation mechanism)
    const token = jwt.sign({userId: newUser._id}, secretKey);
    // Return the new user data along with the token
    res.status(201).json({token});
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({error: 'Internal Server Error'});
  }
});



//fetch users data
app.get('/users/:userId', async (req, res) => {
  try {
    const {userId} = req.params;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(500).json({message: 'User not found'});
    }

    return res.status(200).json({user});
  } catch (error) {
    res.status(500).json({message: 'Error fetching the user details'});
  }
});

 
 //endpoint to login
app.post('/login', async (req, res) => {
  try {
    const {email, password} = req.body;

    //check if the user exists already
    const user = await User.findOne({email});
    if (!user) {
      return res.status(401).json({message: 'Invalid email or password'});
    }

    //check in password is correct
    if (user.password !== password) {
      return res.status(401).json({message: 'Invalide password'});
    }

    const secretKey = crypto.randomBytes(32).toString('hex');

    const token = jwt.sign({userId: user._id}, secretKey);

    return res.status(200).json({token});
  } catch (error) {
    res.status(500).json({message: 'login failed'});
  }
});





//match user
app.get('/matches', async (req, res) => {
  try {
    const {userId} = req.query;

    // Fetch user's dating preferences and type
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({message: 'User not found'});
    }

    let filter = {}; // Initialize filter as an empty object

    if (user.gender === 'Men') {
      filter.gender = 'Women';
    } else if (user.gender === 'Women') {
      filter.gender = 'Men';
    }

    // Construct query based on dating preferences and type
    let query = {
      _id: {$ne: userId},
    };

    // if (user.datingPreferences && user.datingPreferences.length > 0) {
    //   filter.datingPreferences = user.datingPreferences;
    // }
    if (user.type) {
      filter.type = user.type; // Assuming user.type is a single value
    }

    const currentUser = await User.findById(userId)
      .populate('matches', '_id')
      .populate('likedProfiles', '_id');

    // Extract IDs of friends
    const friendIds = currentUser.matches.map(friend => friend._id);

    // Extract IDs of crushes
    const crushIds = currentUser.likedProfiles.map(crush => crush._id);

    console.log('filter', filter);

    // Fetch matches based on query
    const matches = await User.find(filter)
      .where('_id')
      .nin([userId, ...friendIds, ...crushIds]);

    return res.status(200).json({matches});

  } catch (error) {
    console.error('Error fetching matches:', error);
    res.status(500).json({message: 'Internal server error'});
  }
});