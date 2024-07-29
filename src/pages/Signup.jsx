import React, { useState } from "react";
import styled from "styled-components";
import { useDarkModeStore } from "../store";
import InformationCard from "../components/signup/InformationCard";
import { useSignup } from "../hooks/useSignup";
import { useNavigate } from "react-router";
import { useUserInfoStore } from "../store";
const items = [
  {
    label: "이름입니다",
    type: "text",
    placeholder: "이름을 입력하세요.",
    value: null,
  },
  {
    label: "이메일",
    type: "email",
    placeholder: "이메일을 입력하세요.",
    value: null,
  },
  {
    label: "한 줄 소개",
    type: "description",
    placeholder: "당신을 한 줄로 소개해보세요.",
    value: null,
  },
  {
    label: "비밀번호",
    type: "password",
    placeholder: "비밀번호를 입력하세요",
    value: null,
  },

];

const Signup = () => {
    const navigate = useNavigate();
    const { userInfo, setUserInfo } = useUserInfoStore();
    const { darkMode } = useDarkModeStore();
    const [inputs, setInputs] = useState({
        text: "",
        email: "",
        password: "",
        description: "",
    });
    const { signup } = useSignup();
    const handleSubmit = (e) => {
        e.preventDefault();
        signup(inputs.email, inputs.password, inputs.text);
        userInfo.description = inputs.description;
        setUserInfo(userInfo);
        console.log(inputs.text);
        //navigate("/");
    };
    return (
        <SignupLayout>
            <SignupBox>
                <h1>환영합니다 !</h1>
                <div>기본 회원 정보를 등록해주세요.</div>
                <InitalinformationBox>
                    {items.map((item) => (
                        <InformationCard
                            value={inputs[item.type]}
                            key={item.label}
                            label={item.label}
                            type={item.type}
                            placeholder={item.placeholder}
                            setInputs={setInputs}
                        />
                    ))}
                </InitalinformationBox>
                <ButtonBox darkMode={darkMode}>
                    <button>취소</button>
                    <button onClick={handleSubmit}> 다음</button>
                </ButtonBox>
            </SignupBox>
        </SignupLayout>
    );
};
export default Signup;

const SignupLayout = styled.div`
    display: flex;
    margin: 0rem;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const SignupBox = styled.div`
    width: 768px;
    height: auto;
    margin: 100px auto 0px;
    & > h1 {
        font-size: 4rem;
        font-weight: 700;
    }
    & > div {
        margin: 1rem 0rem;
    }
    @media (max-width: 770px) {
        width: auto;
    }
`;
const InitalinformationBox = styled.form`
    margin: 3rem 0rem;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    gap: 1.25rem;
    :nth-child(2n + 1) {
        & > input {
            width: 30rem;
        }
    }
    :nth-child(2n) {
        & > input {
            width: 20rem;
        }
    }
    @media (max-width: 770px) {
        :nth-child(2n + 1) {
            & > input {
                width: 100%;
            }
        }
    }
`;
const ButtonBox = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    & > button {
        border: none;
        border-radius: 1.5rem;
        width: 6rem;
        height: 48px;
        font-size: 1.25rem;
        font-weight: 600;
        cursor: pointer;
    }
    :first-child {
        background-color: ${(props) =>
            props.darkMode ? "#868E96" : "#DEE2E6"};
        color: ${(props) => (props.darkMode ? "#fff" : "black")};
    }
    :last-child {
        background-color: ${(props) =>
            props.darkMode ? "#96f3d7" : "#12B886"};
        color: ${(props) => (props.darkMode ? "black" : "#fff")};
    }
`;
