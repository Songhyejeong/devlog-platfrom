import React from "react";
import styled from "styled-components";
import PostCard from "./PostCard";
import { useCollection } from "../../hooks/useCollection";
import { Link } from "react-router-dom";
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
  const { documents, error } = useCollection("post");
  console.log(documents);
  //console.log(documents);
  /*{documents && documents.map((item) => {
        console.log(item.id)
  })}*///firebase에서는 20글자의 난수로 고유 id 설정한다. 
  return (
      <GridContainer>
          {documents &&documents.map((item) => (
                  <Link to={`/post/${item.uid}`}>
                      <PostCard
                          key={item.id}
                          title={item?.title}
                          content={item.postContent}
                          tagValue={item.tagValue}
                          user = {item.user}
                      />
                  </Link>
              ))}
      </GridContainer>
  );
}
