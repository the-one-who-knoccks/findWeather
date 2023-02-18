import React from "react";
import { Image, ImageSourcePropType } from "react-native";
import theme from "../../theme";

import styled from "./styles";

interface IWeatherDescriptionData {
  id: number;
  icon: ImageSourcePropType;
  value: string;
  text: string;
}

interface WeatherDataProps {
  data: IWeatherDescriptionData[];
}

import Divider from "../Divider";
import Text from "../Text";

const WeatherDescription = ({ data }: WeatherDataProps) => {
  return (
    <styled.Container>
      {data.map((item, index) => {
        return (
          <React.Fragment key={item.id}>
            <styled.ContainerItem>
              <Image source={item.icon} />
              <Divider top={6} />
              <Text
                fontFamily={theme.fontFamily.OverpassBold}
                fontSize={theme.fontSize.xs16}
                color={theme.colors.white}
              >
                {item.value}
              </Text>
              <Text
                fontFamily={theme.fontFamily.OverpassLight}
                fontSize={theme.fontSize.xxs14}
                color={theme.colors.gray400}
              >
                {item.text}
              </Text>
            </styled.ContainerItem>

            {index !== data.length - 1 && <styled.Divider />}
          </React.Fragment>
        );
      })}
    </styled.Container>
  );
};

export default WeatherDescription;