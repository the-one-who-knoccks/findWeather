import React from "react";
import { Image, SafeAreaView } from "react-native";
import Button from "../../components/Button"
import Divider from "../../components/Divider";
import Text from "../../components/Text";
import theme from "../../theme";

import CloudAndThunderPNG from "../../assets/cloud-and-thunder.png";

import styled from "./styles";

const LetterBold = () => (
  <Text
    fontFamily={theme.fontFamily.OverpassBold}
    fontSize={theme.fontSize.md22}
    color={theme.colors.gray100}
  >
    Weather
  </Text>
);

const Welcome = (): JSX.Element => {
  return (
    <styled.Container>
      <SafeAreaView>
        <Divider top={60} />

        <styled.ContainerImage>
          <Image source={CloudAndThunderPNG} />
        </styled.ContainerImage>

        <Divider top={34} />

        <Text
          fontFamily={theme.fontFamily.OverpassSemiBold}
          fontSize={theme.fontSize.xxl33}
          color={theme.colors.white}
          textAlign="center"
          style={{ width: 300, alignSelf: "center" }}
        >
          Descubra o Clima na sua Cidade
        </Text>

        <Divider top={24} />

        <Text
          fontFamily={theme.fontFamily.OverpassRegular}
          fontSize={theme.fontSize.md22}
          color={theme.colors.gray100}
        >
          Com o Find
          <LetterBold /> nunca ficou tão fácil ter a previsão do tempo na palma
          da sua mão
        </Text>

        <Divider top={30} />

        <Button
          backgroundColor={theme.colors.dark300}
          borderColor={theme.colors.gray300}
          borderRadius={18}
          height={54}
          onPress={() => {}}
        >
          <Text
            fontFamily={theme.fontFamily.OverpassRegular}
            fontSize={theme.fontSize.md22}
            color={theme.colors.white}
            textAlign="center"
          >
            Iniciar
          </Text>
        </Button>

        <Divider bottom={10} />
      </SafeAreaView>
    </styled.Container>
  );
};

export default Welcome;