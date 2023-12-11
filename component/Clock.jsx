import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Svg, Line, Circle, Rect } from "react-native-svg";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timeId = setInterval(() => {
      setTime(new Date());
    }, 100);
    return () => clearInterval(timeId);
  });
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  return (
    <View>
      <Text>{time.toLocaleDateString()}</Text>
      <Svg height={200} width={200}>
        <Circle
          cx={100}
          cy={100}
          r={90}
          stroke="black"
          strokeWidth={2}
          fill={"white"}
        />
      </Svg>
    </View>
  );
};

export default Clock;
