import { create } from "zustand";

export const TABS = ["Rent", "Buy", "Sell"] as const;
export type Tab = (typeof TABS)[number];

interface SearchState {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  activeTab: "Rent",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
