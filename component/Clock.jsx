import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Svg, Line, Circle, Text } from "react-native-svg";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timeId);
  }, []);

  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  return (
    <View style={{ borderWidth: 1, borderColor: "black" }}>
      <Svg height={360} width={360}>
        <Circle
          cx={180}
          cy={180}
          r={170}
          stroke="black"
          strokeWidth={10}
          fill={"white"}
        />
        {/* Hour hand */}
        <Line
          x1={180}
          y1={180}
          x2={180}
          y2={90}
          strokeWidth={8}
          strokeLinecap="round"
          stroke={"black"}
          rotation={hour * 30 + minute * 0.5}
          origin={"180, 180"}
        />
        {/* Minute hand */}
        <Line
          x1={180}
          y1={180}
          x2={180}
          y2={60}
          strokeWidth={6}
          strokeLinecap="round"
          stroke={"black"}
          rotation={(minute + second / 60) * 6}
          origin={"180, 180"}
        />
        {/* Second hand */}
        <Line
          x1={180}
          y1={180}
          x2={180}
          y2={50}
          strokeWidth={4}
          stroke={"red"}
          strokeLinecap="round"
          rotation={second * 6}
          origin={"180, 180"}
        />

        <Circle cx={180} cy={180} r={7} fill={"black"} />

        <Text
          x={190}
          y={25}
          fontSize={20}
          fill={"black"}
          fontWeight={"bold"}
          textAnchor="middle"
        >
          12
        </Text>
      </Svg>
    </View>
  );
};

export default Clock;
