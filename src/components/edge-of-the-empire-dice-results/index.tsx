/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import EdgeOfTheEmpireDiceCollection from "../../types/edge-of-the-empire-dice-collection";

import "./edge-of-the-empire-dice-results.scss";
import { mapSymbolToCharacter } from "../../enums/edge-of-the-empire-dice-symbol";
import EdgeOfTheEmpireDiceResult from "../../types/edge-of-the-empire-dice-result";
import { getOutcomeFromSymbols } from "../../utility/edge-of-the-empire-dice";

export interface IEdgeOfTheEmpireDiceResults {
	results: EdgeOfTheEmpireDiceCollection | null;
	onClearClicked: () => void;
}

export const EdgeOfTheEmpireDiceResults = ({
	results,
	onClearClicked,
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
		<div className="number-dice-results">
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
							<td className="eote-results">
								{results?.boost.map((x, index) => (
									<span key={`boost-${index}`}>
										{x
											.mapValueToResults()
											?.filter((x) => x !== null)
											.map(mapSymbolToCharacter)}
									</span>
								))}
							</td>
						</tr>
					)}
					{hasSetbackResults && (
						<tr className="results-section">
							<td className="type">⬛️ Setback</td>
							<td className="eote-results">
								{results?.setback.map((x, index) => (
									<span key={`setback-${index}`}>
										{x
											.mapValueToResults()
											?.filter((x) => x !== null)
											.map(mapSymbolToCharacter)}
									</span>
								))}
							</td>
						</tr>
					)}
					{hasAbilityResults && (
						<tr className="results-section">
							<td className="type">🟩 Ability</td>
							<td className="eote-results">
								{results?.ability.map((x, index) => (
									<span key={`ability-${index}`}>
										{x
											.mapValueToResults()
											?.filter((x) => x !== null)
											.map(mapSymbolToCharacter)}
									</span>
								))}
							</td>
						</tr>
					)}
					{hasDifficultyResults && (
						<tr className="results-section">
							<td className="type">🟪 Difficulty</td>
							<td className="eote-results">
								{results?.difficulty.map((x, index) => (
									<span key={`difficulty-${index}`}>
										{x
											.mapValueToResults()
											?.filter((x) => x !== null)
											.map(mapSymbolToCharacter)}
									</span>
								))}
							</td>
						</tr>
					)}
					{hasProficiencyResults && (
						<tr className="results-section">
							<td className="type">🟨 Proficiency</td>
							<td className="eote-results">
								{results?.proficiency.map((x, index) => (
									<span key={`proficiency-${index}`}>
										{x
											.mapValueToResults()
											?.filter((x) => x !== null)
											.map(mapSymbolToCharacter)}
									</span>
								))}
							</td>
						</tr>
					)}
					{hasChallengeResults && (
						<tr className="results-section">
							<td className="type">🟥 Challenge</td>
							<td className="eote-results">
								{results?.challenge.map((x, index) => (
									<span key={`challenge-${index}`}>
										{x
											.mapValueToResults()
											?.filter((x) => x !== null)
											.map(mapSymbolToCharacter)}
									</span>
								))}
							</td>
						</tr>
					)}
					{hasForceResults && (
						<tr className="results-section">
							<td className="type">⬜️ Force</td>
							<td className="results force-results">
								{results?.force.map((x, index) => (
									<span
										className="force-result"
										key={`force-${index}`}
									>
										{x
											.mapValueToResults()
											?.filter((x) => x !== null)
											.map(mapSymbolToCharacter)}
									</span>
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
						<tr>
							<td className="results-success-and-failure">
								{calculatedResults?.successAndFailure > -1
									? "Success"
									: "Failure"}
							</td>
							<td className="results-advantage-and-threat">
								{calculatedResults?.advantageAndThreat > -1
									? "Advantage"
									: "Threat"}
							</td>
						</tr>
						<tr>
							<td className="results-success-and-failure">
								{Math.abs(calculatedResults.successAndFailure)}
							</td>
							<td className="results-advantage-and-threat">
								{Math.abs(calculatedResults.advantageAndThreat)}
							</td>
						</tr>
						<tr className="roll-success">
							<td className="label">Success:</td>
							<td className="result">
								{calculatedResults.rollSuccess ? "✅" : "❌"}
							</td>
							<td className="empty" />
						</tr>
					</tfoot>
				)}
			</Table>
			<div>
				<Button
					variant="outline-danger"
					disabled={!resultsHaveDice}
					onClick={onClearClicked}
				>
					Clear
				</Button>
			</div>
		</div>
	);
};
