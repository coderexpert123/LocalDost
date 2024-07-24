import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
 
import {useRoute} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
 

const PreFinalScreen = () => {
 
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginTop: 80}}>
        <Text
          style={{
            fontSize: 35,
            fontWeight: 'bold',
            color:'brown',
            fontFamily: 'GeezaPro-Bold',
            marginLeft: 20,
          }}>
          All set to register
        </Text>
        <Text
          style={{
            fontSize: 33,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginLeft: 20,
            marginRight: 10,
            color:'blue',
            marginTop: 10,
          }}>
          Setting up your profile for you
        </Text>
      </View>

      <View>
        <LottieView
          source={require('../assets/love.json')}
          style={{
            height: 260,
            width: 300,
            alignSelf: 'center',
            marginTop: 40,
            justifyContent: 'center',
          }}
          autoPlay
          loop={true}
          speed={0.7}
        />
      </View>

      <Pressable
         
        style={{backgroundColor: '#900C3F', padding: 15, marginTop: 'auto'}}>
        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontWeight: '600',
            fontSize: 15,
          }}>
          Finish registering
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default PreFinalScreen;

const styles = StyleSheet.create({});
