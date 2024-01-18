import { create } from "zustand";
import { persist } from "zustand/middleware";

const useLoginStore = create(
  persist(
    (set) => ({
      isLogIn: false,
      toLogin: () => {
        const accesstoken = localStorage.getItem("accessToken");
        if (accesstoken) {
          set({ isLogIn: true });
        } else if (!accesstoken) {
          set({ isLogIn: false });
        }
      },
      toLogout: () => {
        set({ isLogIn: false });
        localStorage.clear();
      },
    }),
    { name: "user-Login" }
  )
);

export default useLoginStore;
