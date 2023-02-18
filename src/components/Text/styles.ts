import styled from 'styled-components/native';
import { ITextProps } from '.';

const Text = styled.Text<ITextProps>`
  font-family: ${({fontFamily}) => fontFamily};
  font-size: ${({fontSize}) => fontSize}px;
  color: ${({color}) => color};
  text-align: ${({textAlign}) => textAlign && textAlign};

`;

export default {
  Text
};