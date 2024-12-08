/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import type React from "react";
import { useContext, useLayoutEffect } from "react";

import { ThemeContext } from "../theme-context-provider";

import { Theme } from "../../enums/theme";

import "./page-wrapper.css";

export interface IPageWrapperProps {
	children: React.ReactNode;
}

const PageWrapper = ({ children }: IPageWrapperProps): JSX.Element => {
	const { currentTheme } = useContext(ThemeContext);

	useLayoutEffect(() => {
		const elements: HTMLCollectionOf<HTMLElement> =
			document.getElementsByTagName("html");

		if (elements.length === 0) return;

		if (currentTheme === Theme.Light)
			elements[0]?.setAttribute("data-bs-theme", "");
		else if (currentTheme === Theme.Dark)
			elements[0]?.setAttribute("data-bs-theme", "dark");
	}, [currentTheme]);

	return <div className="app">{children}</div>;
};

export default PageWrapper;
