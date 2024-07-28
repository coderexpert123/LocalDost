import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'core-js/stable/atob';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {jwtDecode} from 'jwt-decode';
import axios from 'axios';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [option, setOption] = useState('Compatible');
  const [profilesData, setProfilesData] = useState([]);

  const [userId, setUserId] = useState('');
  useEffect(() => {

    const fetchUser = async () => {
      const token = await AsyncStorage.getItem('token');
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.userId;
      setUserId(userId);
    };

    fetchUser();
  }, []);

  console.log('userId', userId);

  const showToken = async () => {
    const token = await AsyncStorage.getItem('token');
    console.log('token', token);
  };
  
  useEffect(() => {
    showToken();
  }, []);

  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  // const [currentProfile, setCurrentProfile] = useState(profiles[0]);
  const [currentProfile, setCurrentProfile] = useState(profilesData[0]);
  
  
  console.log("hiii",currentProfile);


  const fetchMatches = async () => {

    console.log("hii2")
    try {
      const response = await axios.get(
        `http://192.168.1.83:3000/matches?userId=${userId}`,
      );


      console.log("res",response);

      const matches = response.data.matches;
      setProfilesData(matches);
      // Handle matches in the frontend (display, store in state, etc.)
    } catch (error) {
      console.error('Error fetching matches:', error);
      // Handle error in the frontend
    }
  };

  useEffect(() => {
    if (userId) {
      fetchMatches();
    }
  }, [userId]);

  useEffect(() => {
    // Update currentProfile when profilesData changes
    if (profilesData.length > 0) {
      setCurrentProfile(profilesData[0]);
    }
  }, [profilesData]);

  console.log("profiles",profilesData);

  return (

    <ScrollView style={{marginTop: 55}}>
    <View
      style={{
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      }}>
      <View
        style={{
          width: 38,
          height: 38,
          borderRadius: 19,
          backgroundColor: '#D0D0D0',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Ionicons name="sparkles-sharp" size={22} color="black" />
      </View>

      <Pressable
            onPress={() => setOption('Compatible')}
            style={{
              borderColor: option == 'Compatible' ? 'transparent' : '#808080',
              borderWidth: 0.7,
              padding: 10,
              borderRadius: 20,
              backgroundColor: option == 'Compatible' ? 'black' : 'transparent',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 14,
                fontWeight: '400',
                color: option == 'Compatible' ? 'white' : '#808080',
              }}>
              Compatible
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setOption('Active Today')}
            style={{
              borderColor: option == 'Active Today' ? 'transparent' : '#808080',
              borderWidth: 0.7,
              padding: 10,
              borderRadius: 20,
              backgroundColor:
                option == 'Active Today' ? 'black' : 'transparent',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 14,
                fontWeight: '400',
                color: option == 'Active Today' ? 'white' : '#808080',
              }}>
              Active Today
            </Text>
          </Pressable>
          <Pressable
            onPress={() => setOption('New here')}
            style={{
              borderColor: option == 'New here' ? 'transparent' : '#808080',
              borderWidth: 0.7,
              padding: 10,
              borderRadius: 20,
              backgroundColor: option == 'New here' ? 'black' : 'transparent',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 14,
                fontWeight: '400',
                color: option == 'New here' ? 'white' : '#808080',
              }}>
              New here
            </Text>
          </Pressable>
        
      </View>

      <View style={{marginHorizontal: 12, marginVertical: 12}}>
          <>
          <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                  }}>
                  <Text style={{fontSize: 22, fontWeight: 'bold' ,color:'black'}}>
                    {currentProfile?.firstName}
                  </Text>
                    <View
                    style={{
                      backgroundColor: '#452c63',
                      paddingHorizontal: 12,
                      paddingVertical: 4,
                      borderRadius: 20,
                    }}>
                    <Text style={{textAlign: 'center', color: 'white'}}>
                      new here
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 15,
                  }}>
                  <Entypo
                    name="dots-three-horizontal"
                    size={22}
                    color="black"
                  />
                </View>
                </View>


         

</View>
</>
</View>
     </ScrollView>

  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
