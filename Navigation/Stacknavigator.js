import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text } from 'react-native';
import HomeScreen from '../Scrrens/HomeScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChatScreen from '../Scrrens/ChatScreen'
import LikeScreen from '../Scrrens/LikeScreen'
import { NavigationContainer } from '@react-navigation/native';

import ProfileScreen from '../Scrrens/ProfileScreen';
import BasicInfo from '../Scrrens/BasicInfo';
import NameScreen from '../Scrrens/NameScreen';
import EmailScreen from '../Scrrens/EmailScreen';
import BirthScreen from '../Scrrens/BirthScreen';
import LocationScreen from '../Scrrens/LocationScreen';
import LookingFor from '../Scrrens/LookingFor';
import HomeTownScreen from '../Scrrens/HomeTownScreen';
import PhotoScreen from '../Scrrens/PhotoScreen';
import GenderScreen from '../Scrrens/GenderScreen';
import TypeScreen from '../Scrrens/TypeScreen';
import DatingType from '../Scrrens/DatingType';
import Password from '../Scrrens/Password';


import AnimationScreen from '../Scrrens/AnimationScreen';
import PromptsScreen from '../Scrrens/PromptsScreen';
import ShowPromptsScreen from '../Scrrens/ShowPromptsScreen';
import LoginScreen from '../Scrrens/LoginScreen';
import ChatRoom from '../Scrrens/ChatRoom';
import SignupScreen from '../Scrrens/SignupScreen';
import PreFinalScreen from '../Scrrens/PreFinalScreen';
import TestScreen from '../Scrrens/TestScreen';
import ProfileDetailsScreen from '../Scrrens/ProfileDetailsScreen';
import SendLikeScreen from '../Scrrens/SendLikeScreen';
import HandleLikeScreen from '../Scrrens/HandleLikeScreen';

import { useContext } from 'react';
import { AuthContext } from '../AuthContext';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function BottomTab() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarStyle: { backgroundColor: '#101010' },
            tabBarLabelStyle: { color: '#008E97' },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons name="alpha" size={35} color="white" />
              ) : (
                <MaterialCommunityIcons
                  name="alpha"
                  size={35}
                  color="#989898"
                />
              ),
          }}
        />

        <Tab.Screen
          name="Likes"
          component={LikeScreen}
          options={{
            tabBarStyle: { backgroundColor: '#101010' },
            tabBarLabelStyle: { color: '#008E97' },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="heart" size={30} color="white" />
              ) : (
                <Entypo name="heart" size={30} color="#989898" />
              ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarStyle: { backgroundColor: '#101010' },
            tabBarLabelStyle: { color: '#008E97' },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialIcons
                  name="chat-bubble-outline"
                  size={30}
                  color="white"
                />
              ) : (
                <MaterialIcons
                  name="chat-bubble-outline"
                  size={30}
                  color="#989898"
                />
              ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarStyle: { backgroundColor: '#101010' },
            tabBarLabelStyle: { color: '#008E97' },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons
                  name="person-circle-outline"
                  size={30}
                  color="white"
                />
              ) : (
                <Ionicons
                  name="person-circle-outline"
                  size={30}
                  color="#989898"
                />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }
  //All scrren 
  const AuthStack = () => (
    <Stack.Navigator>

      <Stack.Screen
        name="Basic"
        component={BasicInfo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Name"
        component={NameScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Email"
        component={EmailScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Password"
        component={Password}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Birth"
        component={BirthScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Location"
        component={LocationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Gender"
        component={GenderScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Type"
        component={TypeScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Dating"
        component={DatingType}
        options={{ headerShown: false }}

      />
      <Stack.Screen
        name="LookingFor"
        component={LookingFor}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Hometown"
        component={HomeTownScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Photos"
        component={PhotoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Prompts"
        component={PromptsScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ShowPrompts"
        component={ShowPromptsScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="PreFinal"
        component={PreFinalScreen}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>

  );

  function MainStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTab}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>

      <AuthStack />

    </NavigationContainer>

  );

};

export default StackNavigator;
const styles = StyleSheet.create({});
