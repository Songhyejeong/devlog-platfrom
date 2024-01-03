import React from 'react';
import styled from 'styled-components';
import { useDarkModeStore } from '../../store';
const MyPagePost = () => {
    const { darkMode } = useDarkModeStore();
    const listItems = [
        {
            title: '전체보기',
            count: 1,
        },
        {
            title: '프론트엔드',
            count: 3,
        },
    ];
    return (
        <UserContentList darkMode={darkMode}>
            <ul>
                <div>태그 목록</div>
                {listItems.map((item) => {
                    return (
                        <li>
                            <div>
                                <p>{item.title}</p>
                            </div>
                            <p>({item.count})</p>
                        </li>
                    );
                })}
            </ul>
            <PostBox darkMode={darkMode}>내용이 없습니다.</PostBox>
        </UserContentList>
    );
};
export default MyPagePost;

const UserContentList = styled.div`
    margin: 0px 10px;
    display: flex;
    flex-direction: row;
    & > ul {
        width: 140px;
        height: auto;
        display: flex;
        flex-direction: column;
        gap: 20px;
        & > div {
            font-weight: 600;
            border-bottom: 0.5px solid #e9ecef;
            padding-bottom: 10px;
        }
        & > li {
            & > div {
                color: #adb5bd;
                :hover {
                    color: ${(props) => (props.darkMode ? '#96f3d7' : '#12B886')};
                    text-decoration: underline;
                    cursor: pointer;
                }
            }
            padding-left: 5px;
            font-size: 13px;
            display: flex;
            flex-direction: row;
            & > p {
                padding-left: 10px;
                color: #adb5bd;
            }
        }
    }
`;
const PostBox = styled.div`
    flex-direction: row;
    width: 770px;
    font-size: 1.5rem;
    margin: 6rem 0rem;
    color: ${(props) => (props.darkMode ? '#acacac' : '#868e96')};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 770px) {
        width: 100%;
    }
`;
