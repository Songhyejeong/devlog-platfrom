import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
const NotFoundContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
    width: 100%;
`;

const NotFoundImage = styled.img`
    width: 20rem;
    height: auto;
`;

const NotFoundMessageWrapper = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
    white-space: pre;
    text-align: center;
    line-height: 1.5;
    font-size: 2.5rem;
    color: #ececec;
    margin-top: 2rem;
`;

const HomeWrapper = styled.div`
    margin-top: 2rem;
    display: inline-flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    border: none;
    background: #96f2d7;
    color: #121212;
    border-radius: 4px;
    padding: 0px 1.125rem;
    height: 2.5rem;
    font-size: 1.125rem;
`;

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <NotFoundContainer>
            <NotFoundImage
                src="https://static.velog.io/static/media/undraw_page_not_found_su7k.7e3de5e9.svg"
                alt="error"
            />
            <NotFoundMessageWrapper>아무것도 없네요!</NotFoundMessageWrapper>
            <HomeWrapper
                onClick={() => {
                    navigate('/');
                }}
            >
                홈으로
            </HomeWrapper>
        </NotFoundContainer>
    );
}
