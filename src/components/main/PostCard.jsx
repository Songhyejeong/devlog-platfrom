import React from 'react';
import styled from 'styled-components';

const GridItem = styled.div`
    background-color: #ddd;
    padding: 20px;
    text-align: center;
    width: 20rem;
    background: var(--bg-element1);
    border-radius: 4px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.04);
    transition: box-shadow 0.25s ease-in, transform 0.25s ease-in;
    margin: 1rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    @media (max-width: 1060px) {
        width: calc(50vw - 2rem);
        height: calc(30vh - 2rem);
    }

    @media (max-width: 770px) {
        width: 100%;
    }
`;

const PostCardSeparator = styled.span`
    margin-left: 0.25rem;
    margin-right: 0.25rem;
`;

export default function PostCard() {
    return (
        <GridItem>
            <a src="https://picsum.photos/200/300" alt="" />
            <a>
                <h4>Title</h4>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </a>
            <div>
                <span>2023년 10월 30일</span>
                <PostCardSeparator>·</PostCardSeparator>
                <span>0 개의 댓글</span>
            </div>
        </GridItem>
    );
}
