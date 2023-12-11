/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import EdgeOfTheEmpireDiceCollection from "../../types/edge-of-the-empire-dice-collection";

import {
	EdgeOfTheEmpireDiceSymbol,
	mapSymbolToCharacter,
} from "../../enums/edge-of-the-empire-dice-symbol";
import EdgeOfTheEmpireDiceResult from "../../types/edge-of-the-empire-dice-result";
import { getOutcomeFromSymbols } from "../../utility/edge-of-the-empire-dice";
import { EdgeDiceSymbol } from "../edge-dice-symbol";

import "./edge-of-the-empire-dice-results.scss";

export interface IEdgeOfTheEmpireDiceResults {
	results: EdgeOfTheEmpireDiceCollection | null;
	onClearClicked?: () => void;
	hideClear?: boolean;
}

export const EdgeOfTheEmpireDiceResults = ({
	results,
	onClearClicked,
	hideClear,
}: IEdgeOfTheEmpireDiceResults) => {
	const [hasBoostResults, setHasBoostResults] = useState<boolean>(false);
	const [hasSetbackResults, setHasSetbackResults] = useState<boolean>(false);
	const [hasAbilityResults, setHasAbilityResults] = useState<boolean>(false);
	const [hasDifficultyResults, setHasDifficultyResults] =
		useState<boolean>(false);
	const [hasProficiencyResults, setHasProficiencyResults] =
		useState<boolean>(false);
	const [hasChallengeResults, setHasChallengeResults] =
		useState<boolean>(false);
	const [hasForceResults, setHasForceResults] = useState<boolean>(false);
	const [calculatedResults, setCalculatedResults] =
		useState<EdgeOfTheEmpireDiceResult | null>(null);
	const [resultsHaveDice, setResultsHaveDice] = useState<boolean>(false);

	useEffect(() => {
		if (!results) {
			setHasBoostResults(false);
			setHasSetbackResults(false);
			setHasAbilityResults(false);
			setHasDifficultyResults(false);
			setHasProficiencyResults(false);
			setHasChallengeResults(false);
			setHasForceResults(false);
		} else {
			setHasBoostResults(results?.boost?.length > 0 ?? false);
			setHasSetbackResults(results?.setback?.length > 0 ?? false);
			setHasAbilityResults(results?.ability?.length > 0 ?? false);
			setHasDifficultyResults(results?.difficulty?.length > 0 ?? false);
			setHasProficiencyResults(results?.proficiency?.length > 0 ?? false);
			setHasChallengeResults(results?.challenge?.length > 0 ?? false);
			setHasForceResults(results?.force?.length > 0 ?? false);
		}
	}, [results]);

	useEffect(() => {
		setResultsHaveDice(
			(results &&
				(results?.boost?.length > 0 ||
					results?.setback.length > 0 ||
					results?.ability.length > 0 ||
					results?.difficulty.length > 0 ||
					results?.proficiency.length > 0 ||
					results?.challenge.length > 0 ||
					results?.force.length > 0)) ??
				false,
		);
	}, [results]);

	useEffect(() => {
		if (!results || !resultsHaveDice) setCalculatedResults(null);
		else {
			setCalculatedResults(
				getOutcomeFromSymbols([
					...results.boost.flatMap((x) => x.mapValueToResults()),
					...results.setback.flatMap((x) => x.mapValueToResults()),
					...results.ability.flatMap((x) => x.mapValueToResults()),
					...results.difficulty.flatMap((x) => x.mapValueToResults()),
					...results.proficiency.flatMap((x) =>
						x.mapValueToResults(),
					),
					...results.challenge.flatMap((x) => x.mapValueToResults()),
					...results.force.flatMap((x) => x.mapValueToResults()),
				]),
			);
		}
	}, [results, resultsHaveDice]);

	return (
		<div className="edge-dice-results">
			<Table className="results-table" striped bordered hover>
				<thead>
					<tr className="header">
						<td className="type">Type</td>
						<td className="results">Results</td>
					</tr>
				</thead>
				<tbody>
					{hasBoostResults && (
						<tr className="results-section">
							<td className="type">🟦 Boost</td>
							<td className="short-type">🟦</td>
							<td className="eote-results">
								{results?.boost.map((x, index) => (
									<div
										className="dice-result"
										key={`boost-${index}`}
									>
										{x
											.mapValueToResults()
											?.filter((x) => x !== null)
											.map((x, symbolIndex) => (
												<EdgeDiceSymbol
													key={`boost-${index}-symbol-${symbolIndex}`}
													symbol={x}
												/>
											))}
									</div>
								))}
							</td>
						</tr>
					)}
					{hasSetbackResults && (
						<tr className="results-section">
							<td className="type">⬛️ Setback</td>
							<td className="short-type">⬛️</td>
							<td className="eote-results">
								{results?.setback.map((x, index) => (
									<div
										className="dice-result"
										key={`setback-${index}`}
									>
										{x
											.mapValueToResults()
											?.filter((x) => x !== null)
											.map((x, symbolIndex) => (
												<EdgeDiceSymbol
													key={`setback-${index}-symbol-${symbolIndex}`}
													symbol={x}
												/>
											))}
									</div>
								))}
							</td>
						</tr>
					)}
					{hasAbilityResults && (
						<tr className="results-section">
							<td className="type">🟩 Ability</td>
							<td className="short-type">🟩</td>
							<td className="eote-results">
								{results?.ability.map((x, index) => (
									<div
										className="dice-result"
										key={`ability-${index}`}
									>
										{x
											.mapValueToResults()
											?.filter((x) => x !== null)
											.map((x, symbolIndex) => (
												<EdgeDiceSymbol
													key={`ability-${index}-symbol-${symbolIndex}`}
													symbol={x}
												/>
											))}
									</div>
								))}
							</td>
						</tr>
					)}
					{hasDifficultyResults && (
						<tr className="results-section">
							<td className="type">🟪 Difficulty</td>
							<td className="short-type">🟪</td>
							<td className="eote-results">
								{results?.difficulty.map((x, index) => (
									<div
										className="dice-result"
										key={`difficulty-${index}`}
									>
										{x
											.mapValueToResults()
											?.filter((x) => x !== null)
											.map((x, symbolIndex) => (
												<EdgeDiceSymbol
													key={`difficulty-${index}-symbol-${symbolIndex}`}
													symbol={x}
												/>
											))}
									</div>
								))}
							</td>
						</tr>
					)}
					{hasProficiencyResults && (
						<tr className="results-section">
							<td className="type">🟨 Proficiency</td>
							<td className="short-type">🟨</td>
							<td className="eote-results">
								{results?.proficiency.map((x, index) => (
									<div
										className="dice-result"
										key={`proficiency-${index}`}
									>
										{x
											.mapValueToResults()
											?.filter((x) => x !== null)
											.map((x, symbolIndex) => (
												<EdgeDiceSymbol
													key={`proficiency-${index}-symbol-${symbolIndex}`}
													symbol={x}
												/>
											))}
									</div>
								))}
							</td>
						</tr>
					)}
					{hasChallengeResults && (
						<tr className="results-section">
							<td className="type">🟥 Challenge</td>
							<td className="short-type">🟥</td>
							<td className="eote-results">
								{results?.challenge.map((x, index) => (
									<div
										className="dice-result"
										key={`challenge-${index}`}
									>
										{x
											.mapValueToResults()
											?.filter((x) => x !== null)
											.map((x, symbolIndex) => (
												<EdgeDiceSymbol
													key={`challenge-${index}-symbol-${symbolIndex}`}
													symbol={x}
												/>
											))}
									</div>
								))}
							</td>
						</tr>
					)}
					{hasForceResults && (
						<tr className="results-section">
							<td className="type">⬜️ Force</td>
							<td className="short-type">⬜️</td>
							<td className="eote-results force-results">
								{results?.force.map((x, index) => (
									<div
										className="dice-result"
										key={`force-${index}`}
									>
										{x
											.mapValueToResults()
											?.filter((x) => x !== null)
											.map((x, symbolIndex) => (
												<EdgeDiceSymbol
													key={`force-${index}-symbol-${symbolIndex}`}
													symbol={x}
												/>
											))}
									</div>
								))}
							</td>
						</tr>
					)}
				</tbody>
				{calculatedResults && (
					<tfoot>
						<tr>
							<td className="totals-header">Totals</td>
						</tr>
						{(hasBoostResults ||
							hasSetbackResults ||
							hasAbilityResults ||
							hasDifficultyResults ||
							hasProficiencyResults ||
							hasChallengeResults) && (
							<>
								<tr>
									<td className="results-success-and-failure">
										{calculatedResults?.successAndFailure >
										-1
											? "Success"
											: "Failure"}
									</td>
									<td className="results-advantage-and-threat">
										{calculatedResults?.advantageAndThreat >
										-1
											? "Advantage"
											: "Threat"}
									</td>
								</tr>
								<tr>
									<td className="results-success-and-failure">
										{Math.abs(
											calculatedResults.successAndFailure,
										)}
									</td>
									<td className="results-advantage-and-threat">
										{Math.abs(
											calculatedResults.advantageAndThreat,
										)}
									</td>
								</tr>
								<tr className="roll-success">
									<td className="label">Success:</td>
									<td className="result">
										{calculatedResults.rollSuccess
											? "✅"
											: "❌"}
									</td>
									{calculatedResults.triumphs > 0 && (
										<td className="triumph-indicator">
											{mapSymbolToCharacter(
												EdgeOfTheEmpireDiceSymbol.Triumph,
											)}
										</td>
									)}
									{calculatedResults.despairs > 0 && (
										<td className="despair-indicator">
											{mapSymbolToCharacter(
												EdgeOfTheEmpireDiceSymbol.Despair,
											)}
										</td>
									)}
									<td className="filler" />
								</tr>
							</>
						)}
						{hasForceResults && (
							<>
								<tr>
									<td className="results-light-side">
										Light Side
									</td>
									<td className="results-dark-side">
										Dark Side
									</td>
								</tr>
								<tr>
									<td className="results-light-side">
										{calculatedResults.lightSide}
									</td>
									<td className="results-dark-side">
										{calculatedResults.darkSide}
									</td>
								</tr>
							</>
						)}
					</tfoot>
				)}
			</Table>
			{!hideClear && (
				<div>
					<Button
						variant="outline-danger"
						disabled={!resultsHaveDice}
						onClick={onClearClicked}
					>
						Clear
					</Button>
				</div>
			)}
		</div>
	);
};
