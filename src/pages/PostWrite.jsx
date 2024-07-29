import React, { useState } from "react";
import styled from "styled-components";
import { useDarkModeStore } from "../store";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useUserInfoStore } from "../store";
import { useFirestore } from "../hooks/useFirestore";
import { useNavigate } from "react-router";
const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, false] }],
      ["bold", "italic", "underline", "strike"],
      ["link", "image"],
    ],
  },
};

const PostWrite = () => {
  const { userInfo } = useUserInfoStore();
  const { darkMode } = useDarkModeStore();
  const [title, setTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [tagValue, setTagValue] = useState([]);
  const [text, setText] = useState("");
  const [form, setForm] = useState({
    uid: userInfo.uid,
    title: "",
    tagValue: [],
    postContent: "",
    user: {},
  });

  const { addDocument } = useFirestore("post");
  const navigate = useNavigate();
const submitHandler = () => {
    const updatedForm = {
        uid: userInfo.uid,
        title: title,
        tagValue: tagValue,
        postContent: postContent,
        user: userInfo,
    };
    setForm(updatedForm);
    addDocument(updatedForm);
    if(form){
      navigate('/post');
    }
    console.log(form);
};
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  let count = 0;
  const handleKeyPress = (e) => {
    if (e.nativeEvent.isComposing) {
      return;
    }
    if (e.key === "Enter" && text.trim() !== " ") {
      tagValue.map((item) => {
        if (item === text) {
          count++;
          return;
        }
      });
      if (count === 0) {
        setText("");
        setTagValue((tagValue) => [...tagValue, text]);
      } else {
        count = 0;
        setText("");
      }
    } else if (
      e.key === "Backspace" &&
      text.length === 0 &&
      tagValue.length > 0
    ) {
      tagValue.pop();
      setTagValue(tagValue.filter((tag) => tag));
    }
  };
  return (
      <PostWriteLayout>
          <InputBox>
              <TitleBox>
                  <input
                      type="text"
                      placeholder="제목을 입력하세요"
                      onChange={(e) => {
                          titleHandler(e);
                      }}
                  />
                  <Line />
                  <TagBox darkMode={darkMode}>
                      {tagValue.map((item) => (
                          <div>{item}</div>
                      ))}
                      <input
                          type="text"
                          placeholder="태그를 입력하세요"
                          onChange={(e) => setText(e.target.value)}
                          value={text}
                          onKeyDown={(e) => handleKeyPress(e)}
                      />
                  </TagBox>
              </TitleBox>
              <ContentBox>
                  <ReactQuill
                      style={{ width: "100%", height: "644px" }}
                      modules={modules}
                      onChange={setPostContent}
                  />
              </ContentBox>
          </InputBox>
          <ContentViewBox darkMode={darkMode}>
              <div dangerouslySetInnerHTML={{ __html: postContent }}></div>
          </ContentViewBox>
          <SaveContentBox darkMode={darkMode}>
              <div>
                  <ArrowBackIcon />
                  <p>나가기</p>
              </div>
              <ButtonBox darkMode={darkMode}>
                  <button>임시저장</button>
                  <button onClick={submitHandler}>출간하기</button>
              </ButtonBox>
          </SaveContentBox>
      </PostWriteLayout>
  );
};

const PostWriteLayout = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
`;
const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 2rem;
    padding-right: 2rem;
    width: 100%;
    height: 100%;
`;
const TitleBox = styled.div`
    width: 100%;
    margin-top: 30px;
    & > input {
        outline: none;
        border: none;
        width: 100%;
        font-weight: bold;
        font-size: 2.75rem;
        ::placeholder {
            color: #212529;
        }
    }
    @media (max-width: 767px) {
        font-size: 1.8rem;
    }
`;
const Line = styled.div`
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    width: 4rem;
    background: rgb(73, 80, 87);
    height: 6px;
    border-radius: 1px;
`;
const TagBox = styled.div`
    height: 43px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    & > div {
        width: fit-content;
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
    & > input {
        outline: none;
        border: none;
        font-size: 1rem;
        ::placeholder {
            color: #212529;
        }
    }
    @media (max-width: 767px) {
        font-size: 1.8rem;
    }
`;
const ContentBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    & > div:nth-child(1) {
        & > div:nth-child(1) {
            border: none;
            display: flex;
        }
        & > div:nth-child(2) {
            border: none;
        }
    }
`;
const ContentViewBox = styled.div`
    background-color: ${(props) => (props.darkMode ? "#0c0c0c" : "#fbfdfc")};
    width: 100%;
    height: auto;
    padding: 70px;
    & > div {
        display: flex;
        flex-direction: column;
        :nth-child(n + 1) {
            background-color: ${(props) =>
                props.darkMode ? "#0c0c0c" : "#fbfdfc"};
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
    @media (max-width: 1000px) {
        display: none;
    }
`;
const SaveContentBox = styled.div`
    display: flex;
    position: fixed;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    bottom: 0px;
    height: 64px;
    width: 48.5%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 8px;
    padding-left: 10px;
    background-color: ${(props) => (props.darkMode ? "#2E2E2E" : "#ffffff")};
    & > div {
        background-color: ${(props) =>
            props.darkMode ? "#2E2E2E" : "#ffffff"};
        padding-right: 10px;
        display: flex;
        flex-direction: row;
        gap: 10px;
        text-align: center;
        align-items: center;
        & > svg {
            cursor: pointer;
            background-color: ${(props) =>
                props.darkMode ? "#2E2E2E" : "#ffffff"};
        }
        & > p {
            background-color: ${(props) =>
                props.darkMode ? "#2E2E2E" : "#ffffff"};
            font-size: 1.125rem;
        }
        & > button {
            background-color: ${(props) =>
                props.darkMode ? "#2E2E2E" : "#ffffff"};
            height: 2.5rem;
            padding-left: 1.25rem;
            padding-right: 1.25rem;
            font-size: 1.125rem;
            font-weight: 600;
            border-radius: 4px;
            border: none;
            outline: none;
            cursor: pointer;
        }
    }
    @media (max-width: 1000px) {
        width: 100%;
    }
`;
const ButtonBox = styled.div`
    :first-child {
        cursor: pointer;
        background-color: ${(props) =>
            props.darkMode ? "#2E2E2E" : "#ffffff"};
        color: ${(props) => (props.darkMode ? "#96f3d7" : "#12B886")};
    }
    :last-child {
        cursor: pointer;
        color: ${(props) => (props.darkMode ? "#0c0c0c" : "#ffffff")};
        background: ${(props) => (props.darkMode ? "#96f3d7" : "#12B886")};
    }
`;

export default PostWrite;
