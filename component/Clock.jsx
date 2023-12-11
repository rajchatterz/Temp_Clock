import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import Svg, { Circle, Line } from "react-native-svg";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourAngle = ((hours % 12) + minutes / 60) * 30;
  const minuteAngle = (minutes + seconds / 60) * 6;
  const secondAngle = seconds * 6;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Svg height="200" width="200">
        {/* Clock face */}
        <Circle
          cx="100"
          cy="100"
          r="90"
          stroke="black"
          strokeWidth="4"
          fill="white"
        />
        {/* Hour hand */}
        <Line
          x1="100"
          y1="100"
          x2="100"
          y2="55"
          strokeWidth="6"
          strokeLinecap="round"
          stroke="black"
          rotation={hourAngle}
          origin="100, 100"
        />
        {/* Minute hand */}
        <Line
          x1="100"
          y1="100"
          x2="100"
          y2="35"
          strokeWidth="4"
          strokeLinecap="round"
          stroke="black"
          rotation={minuteAngle}
          origin="100, 100"
        />
        {/* Second hand */}
        <Line
          x1="100"
          y1="100"
          x2="100"
          y2="25"
          strokeWidth="2"
          strokeLinecap="round"
          stroke="red"
          rotation={secondAngle}
          origin="100, 100"
        />
        {/* Center point */}
        <Circle cx="100" cy="100" r="4" fill="black" />
      </Svg>
      <Text style={{ fontSize: 24, marginTop: 20 }}>
        {time.toLocaleTimeString()}
      </Text>
    </View>
  );
}

export default Clock;
