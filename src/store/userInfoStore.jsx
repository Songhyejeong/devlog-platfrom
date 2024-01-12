import create from "zustand";
import { persist } from "zustand/middleware";

const defaultState = { email: " ", nickname: "", description: "" };

const useUserInfoStore = create(
  persist(
    (set) => ({
      userInfo: defaultState,
      setUserInfo: (userInfo) => {
        set({ userInfo });
      },
      deleteUserInfo: () => {
        set({ userInfo: defaultState });
      },
    }),
    { name: "user-Info" }
  )
);

export default useUserInfoStore;
