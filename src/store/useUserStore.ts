import apiClient from "@/lib/apiClient";
import { error } from "console";
import { create } from "zustand";

type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
};

type UserStore = {
  user: User | null;
  loading: boolean;
  error: string | null;
  fetchUser: () => Promise<void>;
  setUser: (user: User) => void;
  logout: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  loading: false,
  error: null,

  fetchUser: async () => {
    try {
      set({ loading: true, error: null });
      const res = await apiClient.get("/user/me");
      set({ user: res.data.user, loading: false });
    } catch (err: any) {
      console.error(error);
      set({
        user: null,
        loading: false,
        error: err?.response?.data?.message || "Failed to fetch user",
      });
    }
  },

  setUser: (user) => set({ user }),

  logout: () => {
    localStorage.removeItem("token");
    set({ user: null });
  },
}));
