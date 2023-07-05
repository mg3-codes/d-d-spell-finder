/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { createContext, useCallback, useContext, useState } from "react";

import { Theme } from "../../enums/theme";
import { AppSettingsContext } from "../app-settings-provider";
import { getCookie, setCookie } from "../../utility/cookies";

export type ThemeContext = {
	currentTheme: Theme;
	selectedThemeOption: Theme;
	toggleCurrentTheme: () => void;
	updateTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContext>({
	currentTheme: Theme.Light,
	selectedThemeOption: Theme.Auto,
	/* eslint-disable @typescript-eslint/no-empty-function */
	// skipqc: JS-0321
	toggleCurrentTheme: () => {},
	// skipqc: JS-0321
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
	const detectColorScheme = useCallback(
		() =>
			window?.matchMedia("(prefers-color-scheme: dark)")?.matches
				? Theme.Dark
				: Theme.Light,
		[],
	);
	const [currentTheme, setCurrentTheme] = useState<Theme>(() => {
		const cookie = getCookie(cookieName);

		if (cookie) return parseInt(cookie);

		return detectColorScheme();
	});
	const [selectedThemeOption, setSelectedThemeOption] = useState<Theme>(
		() => {
			const cookie = getCookie(cookieName);

			if (cookie) return parseInt(cookie);

			return Theme.Auto;
		},
	);
	const { useCookies } = useContext(AppSettingsContext);

	const updateTheme = (theme: Theme): void => {
		setCurrentTheme(theme);
		if (useCookies) setCookie(cookieName, theme.toString(), false);
	};

	const toggleCurrentTheme = (): void => {
		switch (currentTheme) {
			case Theme.Light:
				setCurrentTheme(Theme.Dark);
				setSelectedThemeOption(Theme.Dark);
				break;
			case Theme.Dark:
				setCurrentTheme(Theme.Light);
				setSelectedThemeOption(Theme.Light);
				break;
			case Theme.Auto:
			default:
				setCurrentTheme(detectColorScheme());
				setSelectedThemeOption(Theme.Auto);
				break;
		}
	};

	return (
		<ThemeContext.Provider
			value={{
				currentTheme,
				selectedThemeOption,
				toggleCurrentTheme,
				updateTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};
