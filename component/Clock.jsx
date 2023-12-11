import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Svg, Line, Circle, Rect, Text } from "react-native-svg";

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
          style={{ elevation: 100 }}
        />
        <Line
          x1={100}
          y1={100}
          x2={100}
          y2={35}
          strokeWidth={6}
          stroke={"black"}
          rotation={hour * 30 + minute * 0.5}
          origin={(100, 100)}
        />
        <Line
          x1={100}
          y1={100}
          x2={100}
          y2={70}
          strokeWidth={6}
          stroke={"black"}
          rotation={hour * 30 + minute * 0.5}
          origin={(100, 100)}
        />
        <Line
          x1={100}
          y1={100}
          x2={100}
          y2={50}
          strokeWidth={4}
          stroke={"black"}
          rotation={(minute + second / 60) * 6}
          origin={(100, 100)}
        />
        <Line
          x1={100}
          y1={100}
          x2={100}
          y2={20}
          strokeWidth={3}
          stroke={"black"}
          rotation={second * 6}
          origin={(100, 100)}
        />
      </Svg>
    </View>
  );
};

export default Clock;
