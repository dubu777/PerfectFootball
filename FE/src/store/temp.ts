import { create } from "zustand";

interface LogInState {
  isLogIn: boolean;
  handleLogIn: () => void;
}

export const useLogInStore = create<LogInState>((set) => ({
  isLogIn: false,
  handleLogIn: () => set((state) => ({ isLogIn: !state.isLogIn }))
}))