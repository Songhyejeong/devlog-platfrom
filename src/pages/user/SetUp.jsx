import React, { useState } from "react";
import styled from "styled-components";
import TwitterIcon from "@mui/icons-material/Twitter";
import MailIcon from "@mui/icons-material/Mail";
import HouseIcon from "@mui/icons-material/House";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useDarkModeStore } from "../../store";
import { useUserInfoStore } from "../../store";
import { appAuth } from "../../firebase/config";
import { updateProfile } from "firebase/auth";

const SetUp = () => {
  const { darkMode } = useDarkModeStore();
  const [isProfileInput, setIsProfileInput] = useState(false);
  const [isTitleInput, setIsTitleInput] = useState(false);
  const [isEmailInput, setIsEmailInput] = useState(false);
  const [isSocialInput, setIsSocialInput] = useState(false);

  const [ImageUrl, setImageUrl] = useState(null);
  const { userInfo, setUserInfo } = useUserInfoStore();

  //profile update
  const handleDescription = (e) => {
    userInfo.description = e.target.value;
    setUserInfo(userInfo);
  };
  const handleThem = (e) => {
    userInfo.them = e.target.value;
    setUserInfo(userInfo);
  };
  const handleDisplayname = (e) => {
    userInfo.displayName = e.target.value;
    updateProfile(auth.currentUser, {
      displayName: userInfo.displayName,
    })
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleProfile = (e) => {
    const url = e.target.value;
    setImageUrl(url);
  };
  const submitProfile = () => {
    userInfo.profileUrl = ImageUrl;
    setUserInfo(userInfo);
    console.log(ImageUrl);
    updateProfile(appAuth.currentUser, {
      photoURL: ImageUrl,
    })
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <SetUpLayout>
      <SetUpBox>
        <SetUpUserBox>
          <ImageSetBox darkMode={darkMode}>
            <img src={userInfo.profileUrl} img="img" />
            <button onClick={submitProfile}>이미지 업로드(사진 url)</button>
            <input
              type="text"
              value={ImageUrl}
              onChange={(e) => {
                handleProfile(e);
              }}
            />
            <button>이미지 제거</button>
          </ImageSetBox>
          <UserInfo darkMode={darkMode}>
            <NomalProfileBox darkMode={darkMode} visible={isProfileInput}>
              <div>{userInfo.displayName}</div>
              <div>{userInfo.description}</div>
              <button
                onClick={() => {
                  setIsProfileInput(!isProfileInput);
                }}
              >
                수정
              </button>
            </NomalProfileBox>
            <InputProfileBox darkMode={darkMode} visible={isProfileInput}>
              <input
                type="text"
                placeholder="hae_oo"
                onChange={(e) => {
                  handleDisplayname(e);
                }}
              />
              <input
                type="text"
                placeholder="한줄 소개 입니다."
                onChange={(e) => {
                  handleDescription(e);
                }}
              />
              <div>
                <button
                  onClick={() => {
                    setIsProfileInput(!isProfileInput);
                  }}
                >
                  저장
                </button>
              </div>
            </InputProfileBox>
          </UserInfo>
        </SetUpUserBox>
        <SetUpContentBox>
          <SetupCardBox darkMode={darkMode}>
            <div>
              <h3>벨로그 제목</h3>
              <NomalBox darkMode={darkMode} visible={isTitleInput}>
                <p>{userInfo.them}</p>
                <button
                  onClick={() => {
                    setIsTitleInput(!isTitleInput);
                  }}
                >
                  수정
                </button>
              </NomalBox>
              <InputBox darkMode={darkMode} visible={isTitleInput}>
                <input
                  type="text"
                  placeholder="_hyejeong.log"
                  onChange={(e) => {
                    handleThem(e);
                  }}
                ></input>
                <button
                  onClick={() => {
                    setIsTitleInput(!isTitleInput);
                  }}
                >
                  수정
                </button>
              </InputBox>
            </div>
            <SetUpDescription>
              <p>개인 페이지의 좌측 상단에 나타나는 페이지 제목입니다.</p>
            </SetUpDescription>
          </SetupCardBox>
          <SetupCardBox darkMode={darkMode}>
            <div>
              <h3>소셜 정보</h3>
              <NomalBox darkMode={darkMode} visible={isSocialInput}>
                <button
                  onClick={() => {
                    setIsSocialInput(!isSocialInput);
                  }}
                >
                  정보 추가
                </button>
              </NomalBox>
              <SoCialInputBox darkMode={darkMode} visible={isSocialInput}>
                <div>
                  <MailIcon />
                  <input type="text" placeholder="_hyejeong.log" />
                </div>
                <div>
                  <GitHubIcon />
                  <input type="text" placeholder="Github 계정을 입력하세요." />
                </div>
                <div>
                  <TwitterIcon />
                  <input type="text" placeholder="Twitter 계정을 입력하세요." />
                </div>
                <div>
                  <FacebookIcon />
                  <input type="text" placeholder="https://www.facebook.com/" />
                </div>
                <div>
                  <HouseIcon />
                  <input
                    type="text"
                    placeholder=" 홈페이지 주소를 입력하세요."
                  />
                </div>
                <div>
                  <button
                    onClick={() => {
                      setIsSocialInput(!isSocialInput);
                    }}
                  >
                    저장
                  </button>
                </div>
              </SoCialInputBox>
            </div>
            <SetUpDescription>
              <p>
                포스트 및 블로그에서 보여지는 프로필에 공개되는 소셜 정보입니다.
              </p>
            </SetUpDescription>
          </SetupCardBox>
          <SetupCardBox darkMode={darkMode}>
            <div>
              <h3>이메일 주소</h3>
              <NomalBox darkMode={darkMode} visible={isEmailInput}>
                <p>{userInfo.email}</p>
                <button
                  onClick={() => {
                    setIsEmailInput(!isEmailInput);
                  }}
                >
                  변경
                </button>
              </NomalBox>
              <InputBox darkMode={darkMode} visible={isEmailInput}>
                <input type="text" placeholder="_hyejeong.log"></input>
                <button
                  onClick={() => {
                    setIsEmailInput(!isEmailInput);
                  }}
                >
                  변경
                </button>
              </InputBox>
            </div>
            <SetUpDescription>
              <p>
                회원 인증 또는 시스템에서 발송하는 이메일을 수신하는 주소입니다.
              </p>
            </SetUpDescription>
          </SetupCardBox>
          <SetupCardBox darkMode={darkMode}>
            <div>
              <h3>회원 탈퇴</h3>
              <button>회원 탈퇴</button>
            </div>
            <SetUpDescription>
              <p>
                탈퇴시 작성하신 포스트 및 댓글이 삭제되며 복구되지 않습니다.
              </p>
            </SetUpDescription>
          </SetupCardBox>
        </SetUpContentBox>
      </SetUpBox>
    </SetUpLayout>
  );
};

export default SetUp;

const SetUpLayout = styled.div`
  display: flex;
  justify-content: center;
`;

const SetUpBox = styled.div`
  width: 770px;
  gap: 0.625rem;
  margin: 1rem 1.5rem;
  @media (max-width: 770px) {
    width: 100%;
    margin: 1rem 0rem;
  }
`;
const SetUpUserBox = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: row;
  @media (max-width: 770px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0rem 1.5rem;
  }
`;
const ImageSetBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
  & > img {
    width: 128px;
    height: 128px;
    border-radius: 100px;
    margin-bottom: 0.625rem;
    @media (max-width: 770px) {
      width: 100px;
      height: 100px;
    }
  }

  & > input {
    height: 2rem;
    padding: 0rem 1rem;
    border-radius: 5px;
    outline: none;
    border: 1px solid ${(props) => (props.darkMode ? "#4D4D4D" : "#e9ecef")};
  }
  & > button {
    height: 2rem;
    padding: 0rem 1rem;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    @media (max-width: 770px) {
      padding: 0rem 2rem;
    }
  }

  :nth-child(-n + 2) {
    background: ${(props) => (props.darkMode ? "#96f3d7" : "#12B886")};
    color: ${(props) => (props.darkMode ? "#1E1E1E" : "#fff")};
  }
  :first-child {
    background: #fff;
  }
  :nth-child(4) {
    color: ${(props) => (props.darkMode ? "#96f3d7" : "#12B886")};
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
`;
const UserInfo = styled.div`
  margin: 0rem 1.25rem;
  width: 100%;
  display: flex;
  padding: 0.5rem 1.5rem;
  border-left: solid 1px ${(props) => (props.darkMode ? "#252525" : "#e9ecef")};
  justify-content: flex-start;
  @media (max-width: 770px) {
    border-left: none;
    padding: 0.5rem 0rem;
    border-top: solid 1px ${(props) => (props.darkMode ? "#252525" : "#e9ecef")};
    border-bottom: solid 1px
      ${(props) => (props.darkMode ? "#252525" : "#e9ecef")};
  }
`;

const NomalProfileBox = styled.div`
  display: ${(props) => (props.visible ? "none" : "flex")};
  flex-direction: column;
  gap: 1rem;
  :first-child {
    font-size: 2.2rem;
    font-weight: 520;
    @media (max-width: 770px) {
      font-size: 1.125rem;
    }
  }
  :nth-child(2) {
    color: #868e96;
    font-size: 1rem;
    font-weight: 300;
  }
  & > button {
    border: none;
    display: inline;
    width: auto;
    font-size: 1rem;
    text-decoration: underline;
    color: ${(props) => (props.darkMode ? "#96f3d7" : "#12B886")};
    cursor: pointer;
    width: fit-content;
  }
  @media (max-width: 770px) {
    padding: 1rem 0rem;
  }
`;

const InputProfileBox = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 770px) {
    width: 100%;
  }
  & > input {
    display: block;
    border: 1px solid ${(props) => (props.darkMode ? "#4D4D4D" : "#e9ecef")};
    border-radius: 4px;
    background: ${(props) => (props.darkMode ? "#1e1e1e" : "#FFFFFF")};
    height: auto;
    outline: none;
    padding: 0.5rem;
    width: 31rem;
    font-size: 1rem;
    margin-right: 1rem;
    font-weight: 300;
    @media (max-width: 770px) {
      width: 100%;
    }
  }
  & > div {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 1rem;
    & > button {
      background-color: ${(props) => (props.darkMode ? "#96f3d7" : "#12B886")};
      color: ${(props) => (props.darkMode ? "#1E1E1E" : "#fff")};
      border: none;
      font-weight: 600;
      align-items: center;
      cursor: pointer;
      outline: none;
      border-radius: 4px;
      padding: 0.4rem 1rem;
      font-size: 1rem;
    }
  }
`;
const SetUpContentBox = styled.div`
  padding: 1.5rem;
  margin: 2rem 0rem;
  height: auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 770px) {
    margin: 0rem;
  }
`;
const SetupCardBox = styled.div`
  display: flex;
  margin: 0.625rem 0rem;
  border-bottom: solid 1px
    ${(props) => (props.darkMode ? "#252525" : "#e9ecef")};
  padding: 1rem 0rem;
  flex-direction: column;
  gap: 10px;
  :first-child {
    display: flex;
    flex-direction: row;
    & > h3 {
      font-size: 1.125rem;
      font-weight: 700;
      width: 9.5rem;
      align-items: center;
      @media (max-width: 770px) {
        align-items: flex-start;
        margin-bottom: 1rem;
      }
    }
    @media (max-width: 770px) {
      flex-direction: column;
    }
    & > button {
      background-color: ${(props) => (props.darkMode ? "#FFC9C9" : "#ff6b6b")};
      color: ${(props) => (props.darkMode ? "#1E1E1E" : "#fff")};
      border: none;
      align-items: center;
      cursor: pointer;
      outline: none;
      border-radius: 4px;
      font-weight: 600;
      padding: 0.3rem 1.25rem;
      font-size: 1rem;
      @media (max-width: 770px) {
        width: 7.5rem;
      }
    }
  }
  @media (max-width: 770px) {
    padding: 0rem;
  }
`;

const SetUpDescription = styled.div`
  & > p {
    font-size: 0.875rem;
    color: #868e96;
    font-weight: 300;
  }
  margin-top: 0.875rem;
  @media (max-width: 770px) {
    margin-bottom: 1rem;
  }
`;
const NomalBox = styled.div`
  display: ${(props) => (props.visible ? "none" : "-webkit-box")};
  flex: 1 1 0%;
  -webkit-box-pack: justify;
  flex-direction: row;
  & > p {
    color: ${(props) => (props.darkMode ? "#fff" : "#495057")};
    font-size: 1rem;
    font-weight: 300;
  }
  & > button {
    border: none;
    font-size: 1rem;
    text-decoration: underline;
    color: ${(props) => (props.darkMode ? "#96f3d7" : "#12B886")};
    cursor: pointer;
    width: fit-content;
  }
`;

const InputBox = styled.form`
  display: ${(props) => (props.visible ? "-webkit-box" : "none")};
  -webkit-box-align: center;
  @media (max-width: 770px) {
    width: 100%;
  }
  & > input {
    display: block;
    border: 1px solid ${(props) => (props.darkMode ? "#4D4D4D" : "#e9ecef")};
    border-radius: 4px;
    background: ${(props) => (props.darkMode ? "#1e1e1e" : "#FFFFFF")};
    height: auto;
    outline: none;
    padding: 0.5rem;
    width: 31rem;
    font-size: 1rem;
    margin-right: 1rem;
    font-weight: 300;
    @media (max-width: 770px) {
      width: 80%;
    }
  }
  & > button {
    background-color: ${(props) => (props.darkMode ? "#96f3d7" : "#12B886")};
    color: ${(props) => (props.darkMode ? "#1E1E1E" : "#fff")};
    border: none;
    align-items: center;
    cursor: pointer;
    outline: none;
    font-weight: 600;
    border-radius: 4px;
    padding: 0.4rem 1rem;
    font-size: 1rem;
  }
`;

const SoCialInputBox = styled.div`
  display: ${(props) => (props.visible ? "flex" : "none")};
  flex-direction: column;
  gap: 0.625rem;
  :first-child {
    @media (max-width: 770px) {
      flex-direction: row;
    }
  }
  & > div {
    align-items: center;
    gap: 0.625rem;
    display: flex;
    flex-direction: row;
    & > svg {
      width: 18px;
      height: 18px;
    }
    & > input {
      display: block;
      border: 1px solid ${(props) => (props.darkMode ? "#4D4D4D" : "#e9ecef")};
      border-radius: 4px;
      background: ${(props) => (props.darkMode ? "#1e1e1e" : "#FFFFFF")};
      height: auto;
      outline: none;
      padding: 0.5rem;
      width: 25rem;
      font-size: 1rem;
      margin-right: 1rem;
      font-weight: 300;
      @media (max-width: 770px) {
        width: 100%;
      }
    }
    & > button {
      margin-right: 1rem;
      width: 3.75rem;
      background-color: ${(props) => (props.darkMode ? "#96f3d7" : "#12B886")};
      color: ${(props) => (props.darkMode ? "#1E1E1E" : "#fff")};
      border: none;
      align-items: center;
      cursor: pointer;
      outline: none;
      border-radius: 4px;
      padding: 0.4rem 1rem;
      font-size: 1rem;
      font-weight: 600;
    }
  }
  & > div:nth-child(n + 2):nth-child(-n + 3) {
    width: 12.5rem;
    @media (max-width: 770px) {
      width: 18.75rem;
    }
  }
  ::placeholder {
    font-weight: 300;
  }
  :last-child {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;
