import { create } from "zustand";

export const useSchoolStore = create((set) => ({
  index: 0, 
  setIndex: (newIndex) => set({ index: newIndex }), 
}));
