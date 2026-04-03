import { create } from 'zustand';

export const useEditorStore = create((set) => ({
  content: null,
  setContent: (content) => set({ content }),
  resetContent: () => set({ content: null }),
}));
