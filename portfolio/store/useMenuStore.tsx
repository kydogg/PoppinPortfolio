import { create } from "zustand";
import { persist } from "zustand/middleware";

interface MenuState {
	isOpen: boolean;
	toggleMenu: () => void;
	closeMobileMenu: () => void;
}

export const useMenuStore = create(
	persist<MenuState>(
		(set) => ({
			isOpen: false,
			toggleMenu: () =>
				set((state) => ({
					isOpen: !state.isOpen,
				})),
			closeMobileMenu: () => set({ isOpen: false }),
		}),
		{ name: "menu-store" }
	)
);
