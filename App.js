import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Clock from './component/Clock';
import WeatherDetails from './component/WeatherDetails';

export default function App() {
  return (
    <View style={styles.container}>
      <Clock />
      <WeatherDetails/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
