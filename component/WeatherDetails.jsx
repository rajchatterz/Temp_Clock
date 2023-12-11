import { View, Text, ActivityIndicator } from "react-native";
import * as Location from "expo-location";
import { useEffect, useState } from "react";

function WeatherPosition() {
  const [position, setPosition] = useState(null);
  const [temp, setTemp] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setLoading(false);
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setPosition(location);
      fetchWeatherData(location.coords.latitude, location.coords.longitude);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const fetchWeatherData = (lat, lon) => {
    let api = "eb6fb7297946ecb24e97488b5b844405";
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTemp(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Weather API Error: ", error);
        setLoading(false);
      });
  };

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : position ? (
        <View>
          {temp ? (
            <View style={{ left: -100 }}>
              <Text style={{ fontSize: 40, fontWeight: "900" }}>jj</Text>
            </View>
          ) : (
            <Text>Weather data not available</Text>
          )}
        </View>
      ) : (
        <Text>Loading Location...</Text>
      )}
    </View>
  );
}

export default WeatherPosition;
