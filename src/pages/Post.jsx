import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useCollection } from "../hooks/useCollection";

import { useParams } from "react-router";

const POSTITEM = {
    title: "글 제목입니다.",
    tagValue: ["react", "js"],
    postContent: "<h1>리액트에 관하여</h1><p><br></p><p>내용</p>",
    user: "hyejeong",
    date: "2024. 01. 19",
};


const like = 100;
const Post = () => {
const { documents, error } = useCollection("post");
const { id } = useParams();
const [post, setPost] = useState(null);
const [loading, setLoading] = useState(true);

  /*for(let doc of documents){
    if(doc.uid === id){
      setPost(doc);
      break;
    }
  }*/
  useEffect(() => {
      if (documents) {
          const foundPost = documents.find((doc) => doc.id === id);
          setPost(foundPost);
          setLoading(false);
      }
  }, [documents, id]);
  if (loading) {
      return <div>Loading...</div>;
  }
  if (error) {
      return <div>Error: {error}</div>;
  }
  if (!post) {
      return <div>No post found</div>;
  }



  console.log(post);
  console.log(documents);
 // console.log(documents.tagValue);
  return (
      <PostLayout>
          <PostBox>
              <HeaderBox>
                  <h1>{post.title}</h1>
                  <UserBox>
                      <div>
                          <p>{post.user}</p>
                          <p>{post.date}</p>
                      </div>
                      <button>
                          <FavoriteIcon />
                          {like}
                      </button>
                  </UserBox>
                  <TagBox>
                      {post.tagValue.map((item) => {
                          return <button>{item}</button>;
                      })}
                  </TagBox>
              </HeaderBox>
              <BodyBox>
                  <ContentViewBox>
                      <div
                          dangerouslySetInnerHTML={{
                              __html: post.postContent,
                          }}
                      ></div>
                  </ContentViewBox>
              </BodyBox>
          </PostBox>
      </PostLayout>
  );
};

export default Post;

const PostLayout = styled.div`
    display: flex;
    width: 768px;
    height: auto;
    min-height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        width: 100%;
    }
`;
const PostBox = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    width: 100%;
`;

const HeaderBox = styled.div`
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 4rem;
    & > h1 {
        font-weight: 800;
        font-size: 2.5rem;
    }
`;
const UserBox = styled.div`
    display: -webkit-box;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: flex-start;
    margin-top: 1rem;
    align-items: center;
    text-align: center;
    gap: 10px;
    :nth-child(2) {
        font-size: 0.875rem;
        color: #495057;
        font-weight: 300;
    }
    & > div {
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
    }
    & > button {
        width: 50px;
        height: 18px;
        border: 1px solid #adb5bd;
        border-radius: 20px;
        display: flex;
        gap: 2px;
        align-items: center;
        justify-content: flex-start;
        padding-left: 5px;
        & > svg {
            width: 12px;
            height: 12px;
        }
    }
`;
const TagBox = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    gap: 20px;
    & > button {
        border: none;
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        height: 1.5rem;
        font-size: 0.75rem;
        border-radius: 0.75rem;
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        display: flex;
        gap: 10px;
        background: ${(props) => (props.darkMode ? "#2E2E2E" : "#f8f9fa;")};
        color: ${(props) => (props.darkMode ? "#96f3d7" : "#12B886")};
    }
`;

const BodyBox = styled.div``;

const ContentViewBox = styled.div`
    margin-top: 3rem;
    & > div {
        display: flex;
        flex-direction: column;
        padding-left: 20px;
        :nth-child(n + 1) {
            color: ${(props) => (props.darkMode ? "#fbfdfc" : "#0c0c0c")};
        }
        & > h1 {
            font-size: 2.5rem;
            font-weight: bold;
            & > em {
                font-style: italic;
            }
            & > strong {
                & > em {
                    font-style: italic;
                }
            }
        }
        & > h2 {
            font-size: 2rem;
            font-weight: bold;
            & > em {
                font-style: italic;
            }
            & > strong {
                & > em {
                    font-style: italic;
                }
            }
        }
        & > h3 {
            font-size: 1.5rem;
            font-weight: bold;
            & > em {
                font-style: italic;
            }
            & > strong {
                & > em {
                    font-style: italic;
                }
            }
        }
        & > h4 {
            font-size: 1.125rem;
            font-weight: bold;
            & > em {
                font-style: italic;
            }
            & > strong {
                & > em {
                    font-style: italic;
                }
            }
        }
        & > p {
            & > strong {
                font-weight: bold;
                & > em {
                    font-style: italic;
                }
            }
            & > em {
                font-style: italic;
            }
        }
    }
`;
