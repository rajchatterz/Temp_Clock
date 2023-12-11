import { View, Text } from "react-native";
import * as Location from "expo-location";
import { useEffect, useState } from "react";

function WeatherPosition() {
  // Use to fetch the user Current position
  const [position, setPosition] = useState();
  useEffect(() => {
    getLocation();
  }, []);
  const getLocation = async () => {
    let { status } = await Location.getForegroundPermissionsAsync({});
    if (status !== "granted") {
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setPosition(location);
  };
  return (
    <View>
      {position ? (
        <View>
          <Text>Latitude: {position.coords.latitude}</Text>
        </View>
      ) : (
        <Text>Loading</Text>
      )}
    </View>
  );
}

export default WeatherPosition;
