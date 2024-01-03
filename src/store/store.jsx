import create from 'zustand'
import { persist } from "zustand/middleware";

const useDarkModeStore = create (
    persist(
        (set) => ( {
            darkMode: false,
            toggleDarkMode: () => 
            set(state => ({darkMode : !state.darkMode}))
        }),
        { name: "globe-background-style" }
    )
);

export default useDarkModeStore;