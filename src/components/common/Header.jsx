import styled from "styled-components";
import { useState } from "react";
// import SearchIcon from './search.svg?react';
/* eslint-disable react/prop-types */
import SearchIcon from "@mui/icons-material/Search";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useDarkModeStore } from "../../store";
import { useNavigate } from "react-router-dom";
import { useLoginStore } from "../../store";
import { Link } from "react-router-dom";
import { useUserInfoStore } from "../../store";

const Header = ({ OpenModalHandler, CloseModalHandler }) => {
  const { darkMode, toggleDarkMode } = useDarkModeStore();
  const { isLogIn, toLogout } = useLoginStore();
  const { userInfo } = useUserInfoStore();
  const [visible, setVisible] = useState();
  const navigate = useNavigate(false);
  const logoutHandler = () => {
    toLogout();
    navigate("/");
    setVisible(false);
  };
  return (
    <>
      <HeaderContainer>
        <HeaderLogo
          onClick={() => {
            navigate("/");
          }}
        >
          {userInfo.them}
        </HeaderLogo>
        <HeaderRight>
          <HeaderRightModeIcon
            onClick={toggleDarkMode}
            isDarkMode={darkMode}
            fontSize="large"
          />
          <HeaderRightSearch fontSize="large" darkMode={darkMode} />
          <HeaderRightButton onClick={OpenModalHandler} isLogIn={isLogIn}>
            login
          </HeaderRightButton>
          <UserInfoBox isLogIn={isLogIn}>
            <Profile>
              <img src={userInfo.profileUrl} />
              <ArrowDropDownIcon
                onClick={() => {
                  setVisible(!visible);
                }}
              />
            </Profile>
          </UserInfoBox>
        </HeaderRight>
        <ListBox visible={visible}>
          <Link
            to="/my"
            onClick={() => {
              setVisible(!visible);
            }}
          >
            내 벨로그
          </Link>
          <Link
            to="/write"
            onClick={() => {
              setVisible(!visible);
            }}
          >
            새 글 작성
          </Link>
          <Link
            to="/set"
            onClick={() => {
              setVisible(!visible);
            }}
          >
            설정
          </Link>
          <button onClick={logoutHandler}>로그아웃</button>
        </ListBox>
      </HeaderContainer>
    </>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 10vw;
  margin-top: 10px;
`;

const HeaderLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderRight = styled.div`
  display: flex;
`;

const HeaderRightSearch = styled(SearchIcon)`
  margin: 0rem 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%; /* 원형 테두리를 위해 */
  padding: 5px; /* SVG 주변의 여백 */

  align-items: center;
  justify-content: center;
  text-align: center;
  &:hover {
    background: #339af0;
    border-radius: 25px;
    background-color: ${(props) =>
      props.darkMode
        ? "#363537"
        : "#f0f0f0"}; /* 호버 시 배경색 변경, 필요에 따라 조정 */
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2); /* 호버 시 테두리 효과 */
  }
  cursor: pointer;
`;

const HeaderRightModeIcon = styled(({ isDarkMode, ...props }) =>
  isDarkMode ? <DarkModeIcon {...props} /> : <WbSunnyIcon {...props} />
)`
  margin: 0rem 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 5px;

  align-items: center;
  justify-content: center;
  text-align: center;
  &:hover {
    background: #339af0;
    border-radius: 25px;
    background-color: ${(props) => (props.isDarkMode ? "#363537" : "#f0f0f0")};
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }
  cursor: pointer;
`;

const HeaderRightButton = styled.button`
  /*공통 스타일*/
  display: ${(props) => (props.isLogIn ? "none" : "inline-flex")};
  align-items: center;
  outline: none;
  border: none;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding-left: 1rem;
  padding-right: 1rem;

  /*크기*/
  height: 2.25rem;
  font-size: 1rem;

  /*색상 */
  background: #0b0b0b;
  &:hover {
    background: #0b0b0b;
  }
  &:active {
    background: #0b0b0b;
  }

  /*기타 */
  & + & {
    margin-left: 1rem;
  }
`;

const UserInfoBox = styled.div`
  display: ${(props) => (props.isLogIn ? "flex" : "none")};
  flex-direction: column;
  gap: 10px;
`;
const Profile = styled.div`
  & > img {
    width: 40px;
    height: 40px;
    border-radius: 100px;
  }
`;

const ListBox = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 60px;
  margin-top: 1rem;
  right: 10%;
  z-index: 2;
  width: 12rem;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  justify-content: center;
  & > a {
    display: flex;
    align-items: center;
    height: 50px;
    padding-left: 10px;
  }
  & :hover {
    background-color: #f8f9fa;
    color: #12b886;
  }
  & > button {
    height: 50px;
    display: flex;
    align-items: center;
    border: none;
    font-size: inherit;
    text-align: justify;
    padding-left: 10px;
  }
`;
