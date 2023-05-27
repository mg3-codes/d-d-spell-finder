/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { Suspense, useState } from "react";

const Heading = React.lazy(() => import("../heading"));
const LoadingSpinner = React.lazy(() => import("../loading-spinner"));
const Footer = React.lazy(() => import("../footer"));

import { DndDiceSelector } from "../dnd-dice-selector";
import { NumberDiceResults } from "../number-dice-results";

import NumberDie from "../../classes/number-die";

import "./page.scss";

export const DiceRollerPage = () => {
	const [rollResults, setRollResults] = useState<NumberDie[] | null>(null);

	const handleResultsClear = () => setRollResults(null);

	return (
		<div className="gutter-container">
			<div className="page">
				<Suspense fallback={<LoadingSpinner />}>
					<Heading />
					<h2>Dice Roller</h2>
					<div className="dice-container">
						<DndDiceSelector
							onRollClicked={(results: NumberDie[]) =>
								setRollResults(results)
							}
						/>
						<NumberDiceResults
							results={rollResults}
							onClearClicked={handleResultsClear}
						/>
					</div>
					<Footer />
				</Suspense>
			</div>
		</div>
	);
};
