import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDarkModeStore } from '../../store';

const MyPage = () => {
    const { darkMode } = useDarkModeStore();
    return (
        <>
            <MyPageLayout>
                <MyPageBox>
                    <UserBox darkMode={darkMode}>
                        <img src="/img/default-profile.png" />
                        <UserInfo darkMode={darkMode}>
                            <div>hae_oo</div>
                            <div>한줄 소개 입니다</div>
                        </UserInfo>
                    </UserBox>
                    <EmptyBox darkMode={darkMode} />
                    <UserContentsNav darkMode={darkMode}>
                        <div>
                            <Link to="/my/post">
                                <a>글</a>
                            </Link>
                            <Link to="/my/list">
                                <a>시리즈</a>
                            </Link>
                            <Link to="/my/intro">
                                <a>소개</a>
                            </Link>
                        </div>
                    </UserContentsNav>
                    <Outlet />
                </MyPageBox>
            </MyPageLayout>
        </>
    );
};

export default MyPage;

const MyPageLayout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;
const UserBox = styled.div`
    display: flex;
    margin: 6.25rem 0rem;
    border-bottom: 1px solid ${(props) => (props.darkMode ? '#252525' : '#e9ecef')};
    padding-bottom: 1.25rem;
    flex-direction: row;
    & > img {
        width: 128px;
        height: 128px;
        border-radius: 100px;
        @media (max-width: 770px) {
            width: 80px;
            height: 80px;
            margin-left: 1rem;
        }
    }
    @media (max-width: 770px) {
        justify-content: center;
        gap: 1rem;
        margin: 2.5rem 0rem;
        flex-direction: column;
    }
`;

const MyPageBox = styled.div`
    width: 770px;
    height: auto;
    @media (max-width: 770px) {
        width: 100%;
    }
`;

const EmptyBox = styled.div`
    @media (max-width: 770px) {
        height: 1rem;
        width: 100%;
        background: ${(props) => (props.darkMode ? '#1E1E1E' : '#f8f9fa')};
    }
`;

const UserInfo = styled.div`
    margin: 0rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    justify-content: center;
    :first-child {
        font-size: 1.5rem;
        font-weight: 500;
        @media (max-width: 770px) {
            font-size: 1.125rem;
        }
    }
    :last-child {
        font-size: 1.125rem;
        font-weight: 300;
        @media (max-width: 770px) {
            font-size: 0.875rem;
        }
    }
`;
const UserContentsNav = styled.div`
    margin: 3rem 0rem;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 770px) {
        margin: 0rem;
    }
    & > div {
        & :focus {
            margin-bottom: -2px;
            border-bottom: 2px solid ${(props) => (props.darkMode ? '#96f3d7' : '#12B886')};
            color: ${(props) => (props.darkMode ? '#96f3d7' : '#12B886')};
        }
        display: flex;
        flex-direction: row;
        justify-content: center;
        text-align: center;
        font-size: 1.25rem;
        @media (max-width: 770px) {
            font-size: 1rem;
            width: 100%;
            display: flex;
            position: relative;
        }
        & > a {
            @media (max-width: 770px) {
                width: 100%;
            }
            width: 120px;
            height: auto;
            padding-bottom: 0.625rem;
            cursor: pointer;
        }
    }
    @media (max-width: 770px) {
        margin: 1rem 0rem;
    }
`;
