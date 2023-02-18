import styled from "styled-components/native";
import { DividerProps } from ".";

 const Container = styled.View<DividerProps>`
  margin-top: ${({ top }) => (top ? top : 0)}px;
  margin-bottom: ${({ bottom }) => (bottom ? bottom : 0)}px;
`;


export default {
  Container
}