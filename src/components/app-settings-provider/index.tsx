/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { createContext, useState } from "react";

export type AppSettingsContext = {
	useCookies: boolean;
	setUseCookies: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppSettingsContext = createContext<AppSettingsContext>({
	useCookies: false,
	/* eslint-disable @typescript-eslint/no-empty-function */
	setUseCookies: () => {},
	/* eslint-enable @typescript-eslint/no-empty-function */
});

export interface IAppSettingsContextProviderProps {
	children: React.ReactNode;
}

export const AppSettingsContextProvider = ({
	children,
}: IAppSettingsContextProviderProps) => {
	const [useCookies, setUseCookies] = useState<boolean>(
		document.cookie !== "" && document.cookie !== null,
	);

	return (
		<AppSettingsContext.Provider value={{ useCookies, setUseCookies }}>
			{children}
		</AppSettingsContext.Provider>
	);
};
