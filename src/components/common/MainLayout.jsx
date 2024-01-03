import {useState} from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';
import LoginModal from './LoginModal';

const MainLayout = () => {
    const [isJoin, setIsJoin] = useState(false);
    const [isClosed, setClosed] = useState(true);

    const isJoinHandler = () =>{
        setIsJoin(!isJoin);
    }

    const CloseModalHandler = ( )=> {
        setClosed(!isClosed);
    }
    return (
    <>
        <Header CloseModalHandler =  {CloseModalHandler} isClosed = {isClosed} />
        <Outlet />
        <LoginModal isJoin = {isJoin}  isClosed = {isClosed} isJoinHandler = {isJoinHandler}  CloseLoginModal =  {CloseModalHandler}/>
    </>
    );
};

export default MainLayout;