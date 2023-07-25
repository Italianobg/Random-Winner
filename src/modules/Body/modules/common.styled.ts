import styled from "styled-components";

export const Header = styled.div`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const Minus = styled.div`
  &.show {
    display: flex;
  }
  &.hide {
    display: none;
  }
`;

export const Plus = styled.div`
  &.show {
    display: none;
  }
  &.hide {
    display: flex;
  }
`;

export const Instruction = styled.div`
  font-size: 18px;
  padding: 1%;

  &.show {
    display: block;
  }
  &.hide {
    display: none;
  }
`;
