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
    let api = "Enter Your Api Key";
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
        <ActivityIndicator size="large" color="#000000" />
      ) : position ? (
        <View>
          {temp ? (
            <View style={{ position: "absolute" }}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "900",
                  color: "white",
                  top: -100,
                  left: 80,
                }}
              >
                {Number(temp.main.temp - 273).toFixed(0)}°C
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "900",
                  color: "white",
                  top: -100,
                  left: 80,
                }}
              >
                {Number(temp.main.pressure).toFixed(0)}Pa
              </Text>

              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "900",
                  color: "white",
                  top: -100,
                  left: 80,
                }}
              >
                {temp.weather[0].main}
              </Text>
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
