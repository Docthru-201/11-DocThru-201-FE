import { create } from 'zustand';

export const DEFAULT_FORMAT = {
  bold: false,
  italic: false,
  underline: false,
  strikethrough: false,
  textAlign: null,
  bulletList: false,
  orderedList: false,
  color: '#000000',
  highlight: '#ffffff',
};

export const useFormatStore = create((set) => ({
  ...DEFAULT_FORMAT,
  setFormat: (updates) => set((state) => ({ ...state, ...updates })),
  resetFormat: () => set(DEFAULT_FORMAT),
}));
