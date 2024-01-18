import {signOut} from "firebase/auth"

export const useLogout = () => {
    signOut(auth).then(()=>{
        console.log("로그아웃 되었습니다")
    }).catch((error)=> {
        console.log(error);
    });
}