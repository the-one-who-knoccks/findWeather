import React from 'react';

import styled from "./styles";

export interface DividerProps {
  top?: number;
  bottom?: number;
}

const Divider = ({ top, bottom} : DividerProps): JSX.Element => {
  return <styled.Container top={top} bottom={bottom} />
}


export default Divider