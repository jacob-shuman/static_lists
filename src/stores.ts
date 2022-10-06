import create from "zustand";

export type Style = "upper" | "lower" | "title";

interface StyleStoreProps {
  style: Style;
  update: (style: Style) => void;
}

export const useStyle = create<StyleStoreProps>((set) => ({
  style: "lower",
  update: (style) => set({ style }),
}));
