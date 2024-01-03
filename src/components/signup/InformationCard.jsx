import React, { useState } from 'react';
import styled from 'styled-components';
import { useDarkModeStore } from '../../store';
import LockIcon from '@mui/icons-material/LockOutlined';

const InformationCard = ({ value, label, type, placeholder, setInputs }) => {
    const { darkMode } = useDarkModeStore();
    const [isVisible, setIsVisible] = useState(false);

    const onChangeHandler = (e) => {
        setInputs((prevState) => {
            return { ...prevState, [e.target.name]: e.target.value };
        });
        if (e.target.value.length > 255) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    return (
        <InformationCardLayout darkMode={darkMode} visible={isVisible}>
            <div>{label}</div>
            <input
                type="text"
                name={type}
                value={value}
                placeholder={placeholder}
                readOnly={type === 'email' ? true : false}
                onChange={onChangeHandler}
            />
            {type === 'email' && <LockIcon />}
            <p>글자 수를 초과 하였습니다. </p>
        </InformationCardLayout>
    );
};

export default InformationCard;

const InformationCardLayout = styled.div`
    max-width: 100%;
    white-space: nowrap;
    display: block;
    & > div {
        margin: 1rem 0rem;
        font-weight: 600;
    }
    & > input {
        border-width: 0 0 1px;
        height: 50px;
        padding: 0.3rem;
        font-size: 1.5rem;
        font-weight: 300;
        outline: none;
        @media (max-width: 770px) {
            width: 100%;
        }
        :focus {
            border-color: ${(props) => (props.darkMode ? '#96f3d7' : '#12B886')};
        }
    }
    ::placeholder {
        color: #868e96;
    }
    & > p {
        visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
        margin: 1rem 0.5rem;
        color: ${(props) => (props.darkMode ? '#96f3d7' : '#12B886')};
    }
`;
