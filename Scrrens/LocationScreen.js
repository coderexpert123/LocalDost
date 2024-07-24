import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
  import Geolocation from '@react-native-community/geolocation';
  import {useNavigation} from '@react-navigation/native';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
  import {
    getRegistrationProgress,
    saveRegistrationProgress,
  } from '../registrationUtils';
 

  const LocationScreen = () => {
    const [location, setLocation] = useState('');

    const navigation = useNavigation();
 
   
 
   const handleNext = () => {
    
    
    if (location.trim() !== '') {
      // Save the current progress data including the name
      saveRegistrationProgress('Location', { location });
   
    }
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
              color:'red',
              fontFamily: 'GeezaPro-Bold',
              marginTop: 15,
            }}>
            Where do you live?
          </Text>

          <TextInput
            autoFocus={true}
            value={location}
            onChangeText={(text) => setLocation(text)}
            style={{
              width: 340,
              marginVertical: 10,
              fontSize: location ? 22 : 22,
              marginTop: 25,
              color:'blue',
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              paddingBottom: 10,
              fontFamily: 'GeezaPro-Bold',
            }}
            placeholder="Enter your Location"
            placeholderTextColor={'#BEBEBE'}
          />

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
  