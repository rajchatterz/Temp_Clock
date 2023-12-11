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
    <View>
      <Svg height={360} width={360}>
        <Circle
          cx={180}
          cy={180}
          r={170}
          stroke="white"
          strokeWidth={0}
          fill={"black"}
        />
        {/* Hour hand */}
        <Line
          x1={180}
          y1={180}
          x2={180}
          y2={90}
          strokeWidth={8}
          strokeLinecap="round"
          stroke={"white"}
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
          stroke={"red"}
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
          x={179}
          y={75}
          fontSize={80}
          fill={"white"}
          fontWeight={"bold"}
          textAnchor="middle"
        >
          12
        </Text>
        <Text
          x={177}
          y={339}
          fontSize={90}
          fill={"white"}
          fontWeight={"bold"}
          textAnchor="middle"
        >
          6
        </Text>
        <Text
          x={40}
          y={206}
          fontSize={90}
          fill={"white"}
          fontWeight={"bold"}
          textAnchor="middle"
        >
          9
        </Text>
        <Text
          x={318}
          y={206}
          fontSize={90}
          fill={"white"}
          fontWeight={"bold"}
          textAnchor="middle"
        >
          3
        </Text>
      </Svg>
    </View>
  );
};

export default Clock;
