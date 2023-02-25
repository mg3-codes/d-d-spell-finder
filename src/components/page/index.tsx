/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useContext, useEffect } from "react";
import { Table } from "../../components/table";
import { SettingsOffcanvas } from "../../components/settings-offcanvas";
import { ThemeContext } from "../theme-context-provider";

import { Theme } from "../../enums/theme";

import "./page.css";

export const Page = () => {
	const { currentTheme } = useContext(ThemeContext);

	useEffect(() => {
		const elements: HTMLCollectionOf<HTMLElement> =
			document.getElementsByTagName("html");

		if (elements.length === 0) return;

		if (currentTheme === Theme.Light)
			elements[0]?.setAttribute("data-bs-theme", "");
		else if (currentTheme === Theme.Dark)
			elements[0]?.setAttribute("data-bs-theme", "dark");
	}, [currentTheme]);

	return (
		<div
			className={`${
				currentTheme === Theme.Light ? "light" : "dark"
			}-theme`}
		>
			<div className="heading">
				<h1>D&D Spell Details</h1>
				<SettingsOffcanvas />
			</div>
			<Table />
		</div>
	);
};
