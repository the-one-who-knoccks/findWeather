import React from "react";
import theme from "../../theme";
import Text from "../Text";

import styled from "./styles";

interface TemperatureProps {
  minTemp: number;
  maxTemp: number;
  minTempFontSize: number;
  maxTempFontSize: number;
}

const Temperature = ({
  minTemp,
  maxTemp,
  minTempFontSize,
  maxTempFontSize,
}: TemperatureProps): JSX.Element => {
  return (
    <styled.TemperatureContainer>
      <styled.MaxTemperatureContainer>
        <Text
          fontFamily={theme.fontFamily.OverpassBold}
          fontSize={maxTempFontSize}
          color={theme.colors.white}
        >
          {maxTemp}
        </Text>
        <Text
          fontFamily={theme.fontFamily.OverpassBold}
          fontSize={theme.fontSize.lg30}
          color={theme.colors.white}
          style={{ paddingBottom: 35 }}
        >
          º
        </Text>
      </styled.MaxTemperatureContainer>

      <styled.MinTemperatureContainer>
        <Text
          fontFamily={theme.fontFamily.OverpassSemiBold}
          fontSize={minTempFontSize}
          color={theme.colors.gray100}
        >
          {""} / {""} {minTemp}
        </Text>
        <Text
          fontFamily={theme.fontFamily.OverpassSemiBold}
          fontSize={theme.fontSize.md22}
          color={theme.colors.gray100}
          style={{ paddingBottom: 24 }}
        >
          º
        </Text>
      </styled.MinTemperatureContainer>
    </styled.TemperatureContainer>
  );
};

export default Temperature;
