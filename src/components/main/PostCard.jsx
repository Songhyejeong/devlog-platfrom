import React from "react";
import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
const GridItem = styled.div`
  background-color: #ddd;
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
    height: calc(40vh - 1rem);
  }

  @media (max-width: 770px) {
    width: 93%;
    height: calc(45vh - 1rem);
  }

`;

const PostCardSeparator = styled.span`
    margin-left: 0.25rem;
    margin-right: 0.25rem;
`;

export default function PostCard(document) {
    const { userInfo } = useUserInfoStore();
    let option = {
        root: null, //타겟 요소가 어디에 들어왔을 때 콜백함수를 실행할 것인지 결정한다. null이면 viewport 가 root로 지정된다.
        rootMargin: "0px",
        threshold: 1.0,
    };
    return (
        <GridItem>
            <ImageBox>
                <img
                    src="https://cdn.eyesmag.com/content/uploads/posts/2023/07/06/everland-panda-birthday-party-6128130b-e93a-44b2-8625-459271c39056.jpg"
                    alt=""
                />
            </ImageBox>
            <Title>푸바오의 일상</Title>
            <ContentBox>
                <p>{document.content}</p>
            </ContentBox>
            <DateAndComment>
                <span>2023년 10월 30일</span>
                <PostCardSeparator>·</PostCardSeparator>
                <span>0 개의 댓글</span>
            </DateAndComment>
            <DetailBox>
                <Profile>
                    <img src={user.profileUrl} />
                    <p>by</p>
                    <p>{user.displayName}</p>
                </Profile>
                <Liked>
                    <FavoriteIcon />
                    <p>150</p>
                </Liked>
            </DetailBox>
        </GridItem>
    );
}

const ImageBox = styled.div`
    position: relative;
    width: 100%;
    height: 150px;
    & > img {
        width: 100%;
        height: 100%;
        position: absolute;
        object-fit: cover;
    }
`;
const Title = styled.h4`
    margin-top: 10px;
    height: 15px;
    padding: 10px;
    font-weight: 600;
    font-size: 1rem;
`;

const ContentBox = styled.div`
    padding: 10px;
    display: -webkit-box;
    height: 4rem;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 10px 0px;
    & > p {
        line-height: 1.3;
        font-size: 0.875rem;
        color: #495057;
    }
`;

const DateAndComment = styled.div`
    padding: 10px;
    display: flex;
    font-size: 0.75rem;
    & > span {
        color: #868e96;
        font-weight: 300;
    }
    justify-content: flex-start;
    border-bottom: 1px solid #f1f3f5;
`;
const DetailBox = styled.div`
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Liked = styled.div`
    width: 50px;
    display: flex;
    flex-direction: row;
    gap: 5px;
    justify-content: center;
    align-items: center;
    & > p {
        font-size: 10px;
    }
    & > svg {
        width: 15px;
        height: 15px;
    }
`;
const Profile = styled.div`
  width: 100px;
  height: 15px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-left: 10px;
  font-size: 12px;
  align-items: center;
  border-radius: 100px;
  & > img {
    width: 15px;
    height: 100%;
    border-radius: 100px;
  }
  :nth-child(2) {
    color: #ced4da;
    font-size: 10px;
  }
  :nth-child(3) {
    color: #212529;
    font-weight: 600;
  }

`;
