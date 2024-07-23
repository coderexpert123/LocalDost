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
    const [region, setRegion] = useState({
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    const [location, setLocation] = useState('');
    console.log('location', location);
    const [coordinates] = useState([
      {
        latitude: 12.9716,
        longitude: 77.5946,
      },
      {
        latitude: 13.0451,
        longitude: 77.6269,
      },
    ]);
 
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
          <MapView
            initialRegion={{
              latitude: 13.0451,
              longitude: 77.6269,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            style={{width: '100%', height: 500, marginTop: 20, borderRadius: 5}}>
        
            <Marker
      
              draggable
              coordinate={coordinates[1]}>
              <View
                style={{backgroundColor: 'black', padding: 12, borderRadius: 20}}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 14,
                    fontWeight: '500',
                  }}>
                  {location}
                </Text>
              </View>
            </Marker>
          </MapView>
         
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
  