import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Clock from './component/Clock';
import WeatherDetails from './component/WeatherDetails';

export default function App() {
  return (
    <View style={styles.container}>
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
    justifyContent: 'space-evenly',
  },
});
