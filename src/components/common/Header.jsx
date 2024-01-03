import styled from 'styled-components';
// import SearchIcon from './search.svg?react';
/* eslint-disable react/prop-types */
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useDarkModeStore }from '../../store'
import {useNavigate} from 'react-router-dom';

const Header = ({CloseModalHandler}) => {
    const {darkMode, toggleDarkMode } = useDarkModeStore();
    const navigate = useNavigate();
    return (
        <>
            <HeaderContainer>
                <HeaderLogo onClick = {() => {navigate('/');}}>LOGO</HeaderLogo>
                <HeaderRight>
                    <HeaderRightModeIcon onClick={toggleDarkMode} isDarkMode={darkMode} fontSize="large" />
                    <HeaderRightSearch fontSize="large" darkMode={darkMode} />
                    <HeaderRightButton onClick={ CloseModalHandler }>login</HeaderRightButton>
                </HeaderRight>
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
            props.darkMode ? '#363537' : '#f0f0f0'}; /* 호버 시 배경색 변경, 필요에 따라 조정 */
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
        background-color: ${(props) => (props.isDarkMode ? '#363537' : '#f0f0f0')};
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    }
    cursor: pointer;
`;

const HeaderRightButton = styled.button`
    /*공통 스타일*/
    display: inline-flex;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;

    /*크기*/
    height: 2.25rem;
    font-size: 1rem;

    /*색상 */
    background: #228be6;
    &:hover {
        background: #339af0;
    }
    &:active {
        background: #1c7ed6;
    }

    /*기타 */
    & + & {
        margin-left: 1rem;
    }
`;