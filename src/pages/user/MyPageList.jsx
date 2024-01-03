import React from 'react';
import styled from 'styled-components';
import { useDarkModeStore } from '../../store';
const MyPageList = () => {
    const { darkMode } = useDarkModeStore();
    return (
        <UserContentList>
            <SeriesBox darkMode={darkMode}>시리즈가 없습니다.</SeriesBox>
        </UserContentList>
    );
};
export default MyPageList;

const UserContentList = styled.div`
    margin: 0rem 0.625rem;
    display: flex;
    flex-direction: row;
    @media (max-width: 770px) {
        margin: 0rem;
    }
`;
const SeriesBox = styled.div`
    flex-direction: row;
    width: 770px;
    margin: 6rem 0rem;
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
