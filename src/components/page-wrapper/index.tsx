/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import type React from "react";
import { useContext, useEffect, useLayoutEffect } from "react";

import { ThemeContext } from "../theme-context-provider";

import { Theme } from "../../enums/theme";

import "./styles.css";

export interface IPageWrapperProps {
	title: string;
	children: React.ReactNode;
}

const PageWrapper = ({
	title,
	children,
}: IPageWrapperProps): React.ReactElement => {
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

	useEffect(() => {
		if (document) document.title = title;
	}, [title]);

	return <div className="app">{children}</div>;
};

export default PageWrapper;
