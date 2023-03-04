/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { createContext, useState } from "react";

import { Theme } from "../../enums/theme";

export type ThemeContext = {
	currentTheme: Theme;
	toggleCurrentTheme: () => void;
	setCurrentTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export const ThemeContext = createContext<ThemeContext>({
	currentTheme: Theme.Light,
	/* eslint-disable @typescript-eslint/no-empty-function */
	toggleCurrentTheme: () => {},
	setCurrentTheme: () => {},
	/* eslint-enable @typescript-eslint/no-empty-function */
});

export interface IThemeContextProviderProps {
	children: React.ReactNode;
}

export const ThemeContextProvider = ({
	children,
}: IThemeContextProviderProps) => {
	const [currentTheme, setCurrentTheme] = useState<Theme>(
		window?.matchMedia("(prefers-color-scheme: dark)")?.matches
			? Theme.Dark
			: Theme.Light,
	);

	const toggleCurrentTheme = (): void => {
		switch (currentTheme) {
			case Theme.Light:
				setCurrentTheme(Theme.Dark);
				break;
			case Theme.Dark:
				setCurrentTheme(Theme.Light);
				break;
			default:
				setCurrentTheme(Theme.Light);
				break;
		}
	};

	return (
		<ThemeContext.Provider
			value={{
				currentTheme,
				toggleCurrentTheme,
				setCurrentTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};
