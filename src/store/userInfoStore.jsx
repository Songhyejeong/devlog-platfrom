import create from "zustand";
import { persist } from "zustand/middleware";

const defaultState = {
  uid: "",
  email: "",
  displayName: "",
  description: "",
  them: "DEVLOG",
  profileUrl:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png",
};

const useUserInfoStore = create(
  persist(
    (set) => ({
      userInfo: defaultState,
      setUserInfo: (userInfo) => {
        set(userInfo);
      },
      deleteUserInfo: () => {
        set({ userInfo: defaultState });
      },
    }),
    { name: "user-Info" }
  )
);

export default useUserInfoStore;
