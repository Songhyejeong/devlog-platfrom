import {useState} from 'react'
import {appAuth} from '../firebase/config'
import {  createUserWithEmailAndPassword , updateProfile} from "firebase/auth";
import { useNavigate } from 'react-router';
import { useUserInfoStore }from "../store"
export const useSignup = () => {
    const {userInfo, setUserInfo} =useUserInfoStore();
    const navigate = useNavigate();
   const signup = (email, password, displayName) => {
    createUserWithEmailAndPassword(appAuth, email, password)
        .then((userCredential) => {
        navigate('/');
        const user = userCredential.user;
        console.log(user);
        if(!user){
            throw new Error("fail");
        }
        updateProfile(appAuth.currentUser,{displayName})
            .then(()=> {
                console.log('success')
                userInfo.email= user.email;
                userInfo.displayName = user.displayName;
                setUserInfo(userInfo)
            }).catch((error)=> {
                    alert(error.message);
            })
        })
        .catch((error) => {
            console.log(error.message);
        });
   } 
   return {signup}
}