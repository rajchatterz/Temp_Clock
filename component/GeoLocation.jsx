import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

const Geolocation1 = () => {
  const [position, setPosition] = useState(null);
  useEffect(() => {
    getLocation();
  }, []);
  const getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync({});
      if (status !== "granted") {
        console.log("Permission denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setPosition(location);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      {position ? (
        <View>
          <Text>Latitude: {position.coords.latitude}</Text>
          <Text>Longitude: {position.coords.longitude}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default Geolocation1;
