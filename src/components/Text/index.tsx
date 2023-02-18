import React from 'react';
import { TextProps } from 'react-native';
import styled from './styles';

export interface ITextProps extends TextProps {
  children: React.ReactNode;
  fontSize: number;
  fontFamily: string;
  color: string;
  textAlign?: "center" | "right" | "left";
}

const Text = ({
  children,
  fontSize,
  fontFamily,
  color,
  textAlign = "center",
  ...rest
}: ITextProps): JSX.Element => {
  return (
    <styled.Text
    fontFamily={fontFamily}
    fontSize={fontSize}
    color={color}
    textAlign={textAlign}
    {...rest}
    >
      {children}
    </styled.Text>
  )
}

export default Text;