import styled from "styled-components";
import React from "react";
const Footer = () => {
  return (
    <MainFooter>
      <p>Develog</p>
      <p>
        <span>Contact</span> e-mail@gmail.com
      </p>
    </MainFooter>
  );
};
export default Footer;

const MainFooter = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  bottom: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 175px;
  background: rgba(249, 249, 249, 1);
  & > p {
    background-color: transparent;
    font-family: Noto Sans KR;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    color: rgba(119, 119, 119, 1);
    & > span {
      background-color: transparent;
    }
  }
  &:first-child {
    font-weight: 700;
    padding-bottom: 20px;
  }
  &:nth-child(n + 2):ntn-child(-n + 3) {
    & > span {
      font-weight: 700;
    }
  }
`;
