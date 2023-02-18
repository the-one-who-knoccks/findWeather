import React from "react";
import { Image, ImageSourcePropType } from "react-native";
import theme from "../../theme";
import Divider from "../Divider";
import Text from "../Text";

import styled from "./styles";

interface CardTimeTemperatureProps {
  id: number;
  temperatureValue: number;
  icon: ImageSourcePropType;
  hour: string;
}

interface CardTimeTemperatureData {
  data: CardTimeTemperatureProps[];
}

const CardHourTemperature = ({
  data,
}: CardTimeTemperatureData): JSX.Element => {
  return (
    <styled.Container>
      {data.map((item) => (
        <styled.ContainerCard key={item.id}>
          <styled.ContainerTemperature>
            <Text
              fontFamily={theme.fontFamily.OverpassBold}
              fontSize={theme.fontSize.md22}
              color={theme.colors.white}
            >
              {item.temperatureValue}
            </Text>
            <Text
              fontFamily={theme.fontFamily.OverpassRegular}
              fontSize={theme.fontSize.xxxs12}
              color={theme.colors.gray100}
              style={{ paddingBottom: 9 }}
            >
              º
            </Text>
          </styled.ContainerTemperature>

          <Divider top={8} />

          <Image source={item.icon} />

          <Divider top={8} />

          <Text
            fontFamily={theme.fontFamily.OverpassBold}
            fontSize={theme.fontSize.xxs14}
            color={theme.colors.gray100}
          >
            {item.hour}
          </Text>
        </styled.ContainerCard>
      ))}
    </styled.Container>
  );
};

export default CardHourTemperature;