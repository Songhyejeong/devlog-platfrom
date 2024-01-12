/* eslint-disable react/prop-types */
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import { useDarkModeStore } from "../../store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ isJoin, isClosed, CloseLoginModal, isJoinHandler }) => {
  const { darkMode } = useDarkModeStore();
  const navigate = useNavigate();
  /*이메일 유효성 검사*/
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleData = (e) => {
    if (e.target.type === "email") {
      setEmail(e.target.value);
    } else if (e.target.type === "password") {
      setPassword(e.target.value);
    }
  };
  let Mode = "로그인";
  if (isJoin === true) {
    Mode = "로그인";
  } else {
    Mode = "회원가입";
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (Mode === "회원가입") {
      navigate("/signup", { replace: false });
      console.log(email, password);
    }
  };
  const loginUri = `https://github.com/login/oauth/authorize?client_id=${
    import.meta.env.VITE_GITHUB_CLIENT_ID
  }&scope=repo:status read:repo_hook user:email&redirect_uri=http://localhost:3000/oauth/callback/github`;

  return (
    <LoginModalLayout isClosed={isClosed}>
      <LoginBox>
        <WelcomBox darkMode={darkMode}>환영합니다!</WelcomBox>
        <InitialBox darkMode={darkMode}>
          <Close>
            <CloseIcon
              onClick={() => {
                CloseLoginModal(isClosed);
              }}
            />
          </Close>
          <Contents>
            <Title darkMode={darkMode}>{Mode}</Title>
            <Input darkMode={darkMode}>
              <div>이메일로 {Mode}</div>
              {Mode === "로그인" && (
                <input
                  type="email"
                  placeholder="이메일을 입력하시오."
                  value={email}
                  onChange={handleData}
                />
              )}
              {Mode === "로그인" && (
                <input
                  type="password"
                  placeholder="비밀번호를 입력하시오."
                  value={password}
                  onChange={handleData}
                />
              )}
              <button onClick={handleSubmit}>{Mode}</button>
              {!validateEmail(email) && email.length > 1 && (
                <div>이메일을 올바르게 입력해주세요.</div>
              )}
            </Input>
            <Social darkMode={darkMode}>소셜 계정으로 {Mode}</Social>
            <ButtonBox>
              <a href={loginUri}>
                <GitHubIcon src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh4BoE0qpxWdx6TWAu8BgtWfSQKGn6hqPTOw&usqp=CAU" />
              </a>
              <button>
                <GoogleIcon src="https://cdn.icon-icons.com/icons2/836/PNG/512/Google_icon-icons.com_66793.png" />
              </button>
              <button>
                <FaceBookIcon src="https://www.chsica.org/wp-content/uploads/2020/10/Facebook-Logo-PNG-Transparent-Like-17-300x300.png" />
              </button>
            </ButtonBox>
            <ChangeMode darkMode={darkMode}>
              {!isJoin && <p>아직회원이 아니신가요?</p>}
              {isJoin && <p>이미 계정이 있으신가요?</p>}
              <button onClick={() => isJoinHandler(isJoin)}>{Mode}</button>
            </ChangeMode>
          </Contents>
        </InitialBox>
      </LoginBox>
    </LoginModalLayout>
  );
};
export default LoginModal;

const LoginModalLayout = styled.div`
  height: 100%;
  width: 100%;
  margin: 0rem;
  position: fixed;
  z-index: 10;
  display: ${(props) => (props.isClosed ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.5);
  @media (max-width: 770px) {
    top: 0px;
    left: 0px;
  }
`;
const LoginBox = styled.div`
  display: flex;
  position: fixed;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 20;
  height: 530px;
  width: 606px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.09);
  @media (max-width: 770px) {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }
`;
const WelcomBox = styled.div`
  width: 216px;
  font-family: "Rubik", "sans-serif";
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  font-weight: 600;
  text-align: center;
  font-family: "Rubik", sans-serif;
  color: ${(props) => (props.darkMode ? "#d9d9d9" : "#495057")};

  background-color: ${(props) => (props.darkMode ? "#1e1e1e" : "#f8f9fa")};
  @media (max-width: 770px) {
    display: none;
  }
`;
const InitialBox = styled.div`
  min-width: 390px;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  @media (max-width: 770px) {
    width: 100%;
    min-width: 0px;
  }
`;
const Contents = styled.div`
  margin: 1.5rem;
  :nth-child(n + 4):nth-child(-n + 3) {
    color: #828282;
  }
  @media (max-width: 770px) {
    margin: 0rem 1.5rem;
  }
`;
const Title = styled.div`
  font-size: 1.3125rem;
  font-weight: 550;
  margin: 1.25rem 0rem;
  color: ${(props) => (props.darkMode ? "#d9d9d9" : "#212529")};
`;
const Close = styled.div`
  margin: 1.875rem;
  display: flex;
  justify-content: flex-end;
`;
const Input = styled.form`
  margin: 1.25rem 0rem;
  & > div {
    color: ${(props) => (props.darkMode ? "#828282" : "#868e96")};
    margin: 1.25rem 0rem;
    font-weight: 550;
  }
  & > input {
    height: 48px;
    min-width: 240px;
    width: auto;
    border: 0.5px solid #e1e1e1;
    background-color: ${(props) => (props.darkMode ? "#2e2e2e" : "#fff")};
    padding: 0.625rem;
    ::placeholder {
      font-size: 0.625rem;
    }
    &:focus {
      outline: none;
      border: 0.8px solid ${(props) => (props.darkMode ? "#20c997" : "#20c997")};
    }
    @media (max-width: 770px) {
      width: 70%;
      min-width: 0px;
    }
  }
  & > button {
    background-color: ${(props) => (props.darkMode ? "#96f2d7" : "#12b886")};
    border: 0.5px solid #20c997;
    border-radius: 0.5px;
    text-align: center;
    width: 90px;
    height: 48px;
    color: ${(props) => (props.darkMode ? "#121212" : "#fff")};
    font-weight: 550;
    font-size: 0.938rem;
    &:hover {
      cursor: pointer;
      background-color: #63e6be;
    }
  }
`;
const Social = styled.div`
  font-weight: 550;
  color: ${(props) => (props.darkMode ? "#828282" : "#868e96")};
  margin-top: 2.5rem;
`;
const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1.25rem 0rem;
  justify-content: center;
  gap: 4.375rem;
  & > button {
    width: 3rem;
    height: 3rem;
    border-radius: 100px;
    display: flex;
    background: white;
    justify-content: center;
    align-items: center;
    & :hover {
      cursor: pointer;
    }
  }
  :nth-child(2n) {
    border: 0.5px solid #e1e1e1;
  }
  @media (max-width: 770px) {
    gap: 25%;
  }
`;
const GitHubIcon = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 100px;
`;

const GoogleIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  background: white;
`;
const FaceBookIcon = styled.img`
  width: 3.1rem;
  height: 3.1rem;
  border-radius: 100px;
`;
const ChangeMode = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
  & > p {
    color: ${(props) => (props.darkMode ? "#96f3d7" : "#12b886")};
  }
  & > button {
    margin-top: -2.5px;
    color: ${(props) => (props.darkMode ? "#96f3d7" : "#12b886")};
    background: transparent;
    margin-left: 0.3rem;
    font-weight: 550;
    border: none;
    &:hover {
      text-decoration: underline;
      text-decoration-color: #20c997;
      cursor: pointer;
    }
  }
  @media (max-width: 770px) {
    margin-top: 20rem;
    margin-right: 20px;
  }
`;
