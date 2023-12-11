import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Clock from './component/Clock';
import Geolocation1 from './component/GeoLocation';
import WeatherDetails from './component/WeatherDetails';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* <Geolocation1/> */}
      <WeatherDetails/>
      <Clock />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff6f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
