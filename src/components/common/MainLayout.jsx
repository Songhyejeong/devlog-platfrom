import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import LoginModal from "./LoginModal";
import { useNavigate } from "react-router-dom";
const MainLayout = () => {
  const [isJoin, setIsJoin] = useState(false);
  const [isClosed, setClosed] = useState(true);

  const navigate = useNavigate();
  const isJoinHandler = () => {
    setIsJoin(!isJoin);
  };

  const CloseModalHandler = () => {
    setClosed(!isClosed);
  };
  const OpenModalHandler = () => {
    setClosed(!isClosed);
  };
  return (
    <>
      <Header
        OpenModalHandler={OpenModalHandler}
        CloseModalHandler={CloseModalHandler}
        isClosed={isClosed}
      />
      <Outlet />
      <LoginModal
        isJoin={isJoin}
        isClosed={isClosed}
        isJoinHandler={isJoinHandler}
        CloseLoginModal={CloseModalHandler}
      />
    </>
  );
};

export default MainLayout;
