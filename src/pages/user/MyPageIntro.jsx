import React from 'react';
import styled from 'styled-components';
import { useDarkModeStore } from '../../store';
const MyPageIntro = () => {
    const { darkMode } = useDarkModeStore();
    return (
        <UserContentList darkMode={darkMode}>
            <InfoBox darkMode={darkMode}>소개가 작성되지 않았습니다.</InfoBox>
            <button>소개글 작성하기</button>
        </UserContentList>
    );
};
export default MyPageIntro;

const UserContentList = styled.div`
    margin: 0px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > button {
        background-color: ${(props) => (props.darkMode ? '#96f3d7' : '#12B886')};
        color: ${(props) => (props.darkMode ? '#1E1E1E' : '#fff')};
        border: none;
        align-items: center;
        font-weight: 600;
        cursor: pointer;
        outline: none;
        border-radius: 4px;
        padding: 0.4rem 1rem;
        font-size: 1rem;
    }
`;

const InfoBox = styled.div`
    flex-direction: row;
    margin: 6rem 0rem;
    width: 770px;
    font-size: 1.5rem;
    color: ${(props) => (props.darkMode ? '#acacac' : '#868e96')};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 770px) {
        width: 100%;
    }
`;
