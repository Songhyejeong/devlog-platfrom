import React from 'react';
import styled from 'styled-components';
import PostCard from './PostCard';

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr); /* 기본: 3열 그리드 */
    width: 100%;
    gap: 0px;
    @media (max-width: 1920px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 1440px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1060px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 770px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export default function PostCardCrid() {
    const items = [1, 2, 3, 4, 5, 6]; // 예시 데이터
    return (
        <GridContainer>
            {items.map((item) => (
                <PostCard key={item} />
            ))}
        </GridContainer>
    );
}
