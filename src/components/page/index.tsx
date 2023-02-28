/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { Suspense, useState, useContext, useLayoutEffect } from "react";
import Button from "react-bootstrap/Button";

const LoadingSpinner = React.lazy(() => import("../loading-spinner"));
const PrintModal = React.lazy(() => import("../print-modal"));
const Table = React.lazy(() => import("../../components/table"));
const SettingsOffcanvas = React.lazy(
	() => import("../../components/settings-offcanvas"),
);
import { ThemeContext } from "../theme-context-provider";

import { Theme } from "../../enums/theme";

import "./page.scss";

const row = {
	name: "Acid Splash",
	level: 0,
	school: 1,
	castingTime: 0,
	duration: 0,
	range: 11,
	area: {
		distance: 5,
		shape: 2,
	},
	attack: 0,
	save: 3,
	damage: 0,
	effect: 0,
	ritual: false,
	concentration: false,
	verbal: true,
	somatic: true,
	material: "",
	source: 6,
	details:
		"You hurl a bubble of acid. Choose one or two creatures you can see within range. If you choose two, they must be within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.\n \n This spell's damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6).",
};

export const Page = () => {
	const { currentTheme } = useContext(ThemeContext);
	const [printModalIsOpen, setPrintModalIsOpen] = useState<boolean>(false);

	useLayoutEffect(() => {
		const elements: HTMLCollectionOf<HTMLElement> =
			document.getElementsByTagName("html");

		if (elements.length === 0) return;

		if (currentTheme === Theme.Light)
			elements[0]?.setAttribute("data-bs-theme", "");
		else if (currentTheme === Theme.Dark)
			elements[0]?.setAttribute("data-bs-theme", "dark");
	}, [currentTheme]);

	const togglePrintModalIsOpen = (): void =>
		setPrintModalIsOpen(!printModalIsOpen);

	return (
		<div className="page">
			<Suspense fallback={<LoadingSpinner />}>
				<div className="heading">
					<h1>D&D Spell Details</h1>
					<div>
						<Button
							variant="outline-primary"
							className="printer-button"
							onClick={togglePrintModalIsOpen}
						>
							<i className="bi bi-printer" />
							&nbsp; Print
						</Button>
						<PrintModal
							isOpen={printModalIsOpen}
							toggleIsOpen={togglePrintModalIsOpen}
							rows={[row]}
						/>
						<SettingsOffcanvas />
					</div>
				</div>
				<Table />
			</Suspense>
		</div>
	);
};
