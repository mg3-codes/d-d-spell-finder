/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { createContext, useContext, useState } from "react";

import { Theme } from "../../enums/theme";
import { AppSettingsContext } from "../app-settings-provider";
import { getCookie, setCookie } from "../../utility/cookies";

export type ThemeContext = {
	currentTheme: Theme;
	toggleCurrentTheme: () => void;
	updateTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContext>({
	currentTheme: Theme.Light,
	/* eslint-disable @typescript-eslint/no-empty-function */
	toggleCurrentTheme: () => {},
	updateTheme: () => {},
	/* eslint-enable @typescript-eslint/no-empty-function */
});

export interface IThemeContextProviderProps {
	children: React.ReactNode;
}

const cookieName = "userSelectedTheme";

export const ThemeContextProvider = ({
	children,
}: IThemeContextProviderProps) => {
	const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
		const cookie = getCookie(cookieName);

		if (cookie) return parseInt(cookie);

		return window?.matchMedia("(prefers-color-scheme: dark)")?.matches
			? Theme.Dark
			: Theme.Light;
	});
	const { useCookies } = useContext(AppSettingsContext);

	const updateTheme = (theme: Theme): void => {
		setCurrentTheme(theme);
		if (useCookies) setCookie(cookieName, theme.toString(), false);
	};

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
				updateTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};
