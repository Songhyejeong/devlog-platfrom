import {appAuth} from '../firebase/config'
import {  signInWithEmailAndPassword} from "firebase/auth";
import {useUserInfoStore} from "../store"
import {useLoginStore} from "../store"

export const useLogin = () => {
    const {userInfo, setUserInfo} = useUserInfoStore();
    const {toLogin} = useLoginStore();
   const login = (email, password) => {
    signInWithEmailAndPassword(appAuth, email, password)
        .then((userCredential) => {
        const user = userCredential.user;
        if(user !== null) {
            console.log(user);
            userInfo.email= user.email;
            userInfo.displayName = user.displayName;
           //userInfo.profileUrl = user.photoURL;
            setUserInfo(userInfo)
            const accesstoken = user.accessToken;
            localStorage.setItem("accessToken", accesstoken);
            toLogin();
        }
        if(!user){
            throw new Error("fail!");
        }
    })
    .catch((error) => {
        const err = error;
        console.log(err);
    });
   } 
   return {login}
}