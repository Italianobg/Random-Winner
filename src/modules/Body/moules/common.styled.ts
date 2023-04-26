import styled from "styled-components";

export const Header = styled.div`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
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
