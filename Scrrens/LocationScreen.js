import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
  import Geolocation from '@react-native-community/geolocation';
  import {useNavigation} from '@react-navigation/native';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
 
  const LocationScreen = () => {
    const navigation = useNavigation();
 
   
 
   const handleNext = () => {
 
      navigation.navigate('Gender');
    };
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{marginTop: 90, marginHorizontal: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                width: 44,
                height: 44,
                borderRadius: 22,
                borderColor: 'black',
                borderWidth: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MaterialCommunityIcons
                name="cake-variant-outline"
                size={26}
                color="black"
              />
            </View>
            <Image
              style={{width: 100, height: 40}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              fontFamily: 'GeezaPro-Bold',
              marginTop: 15,
            }}>
            Where do you live?
          </Text>
          <TouchableOpacity
            onPress={handleNext}
            activeOpacity={0.8}
            style={{marginTop: 20, marginLeft: 'auto'}}>
            <MaterialCommunityIcons
              name="arrow-right-circle"
              size={45}
              color="#581845"
              style={{alignSelf: 'center', marginTop: 20}}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  
  export default LocationScreen;
  
  const styles = StyleSheet.create({});
  