/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, { useCallback, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

import type NumberDie from "../../classes/number-die";

import "./number-dice-results.scss";

export interface INumberDiceResults {
	results: NumberDie[] | null;
	onClearClicked?: () => void;
	hideClear?: boolean;
}

export const NumberDiceResults = ({
	results,
	onClearClicked,
	hideClear,
}: INumberDiceResults) => {
	const [sumMap, setSumMap] = useState<Map<number, number>>(
		new Map<number, number>(),
	);
	const [hasTwoSidedResults, setHasTwoSidedResults] = useState<boolean>(false);
	const [hasFourSidedResults, setHasFourSidedResults] =
		useState<boolean>(false);
	const [hasSixSidedResults, setHasSixSidedResults] = useState<boolean>(false);
	const [hasEightSidedResults, setHasEightSidedResults] =
		useState<boolean>(false);
	const [hasTenSidedResults, setHasTenSidedResults] = useState<boolean>(false);
	const [hasTwelveSidedResults, setHasTwelveSidedResults] =
		useState<boolean>(false);
	const [hasTwentySidedResults, setHasTwentySidedResults] =
		useState<boolean>(false);
	const [hasOneHundredSidedResults, setHasOneHundredSidedResults] =
		useState<boolean>(false);
	const [sumResults, setSumResults] = useState<boolean>(false);

	const calculateSum = (dice: NumberDie[] | undefined): number => {
		if (!dice) return 0;

		let sum = 0;
		dice.forEach((x) => (sum += x?.value ?? 0));

		return sum;
	};

	useEffect(() => {
		setHasTwoSidedResults(
			results?.filter((x) => x.sides === 2).length ? true : false,
		);
		setHasFourSidedResults(
			results?.filter((x) => x.sides === 4).length ? true : false,
		);
		setHasSixSidedResults(
			results?.filter((x) => x.sides === 6).length ? true : false,
		);
		setHasEightSidedResults(
			results?.filter((x) => x.sides === 8).length ? true : false,
		);
		setHasTenSidedResults(
			results?.filter((x) => x.sides === 10).length ? true : false,
		);
		setHasTwelveSidedResults(
			results?.filter((x) => x.sides === 12).length ? true : false,
		);
		setHasTwentySidedResults(
			results?.filter((x) => x.sides === 20).length ? true : false,
		);
		setHasOneHundredSidedResults(
			results?.filter((x) => x.sides === 100).length ? true : false,
		);
	}, [results]);

	useEffect(() => {
		setSumMap(
			sumMap.set(2, calculateSum(results?.filter((x) => x.sides === 2))),
		);
		setSumMap(
			sumMap.set(4, calculateSum(results?.filter((x) => x.sides === 4))),
		);
		setSumMap(
			sumMap.set(6, calculateSum(results?.filter((x) => x.sides === 6))),
		);
		setSumMap(
			sumMap.set(8, calculateSum(results?.filter((x) => x.sides === 8))),
		);
		setSumMap(
			sumMap.set(10, calculateSum(results?.filter((x) => x.sides === 10))),
		);
		setSumMap(
			sumMap.set(12, calculateSum(results?.filter((x) => x.sides === 12))),
		);
		setSumMap(
			sumMap.set(20, calculateSum(results?.filter((x) => x.sides === 20))),
		);
		setSumMap(
			sumMap.set(100, calculateSum(results?.filter((x) => x.sides === 100))),
		);
	}, [sumResults, results]);

	const handleSumResultsCheck = useCallback(() => {
		setSumResults(!sumResults);
	}, [sumResults]);

	return (
		<div className="number-dice-results">
			<Table className="results-table" striped bordered hover>
				<thead>
					<tr className="title-row">
						<td>
							<Form.Check
								type={"checkbox"}
								label="Sum Results"
								onChange={handleSumResultsCheck}
								checked={sumResults}
							/>
						</td>
					</tr>
					<tr className="header">
						<td className="sides">Sides</td>
						<td className="results">Results</td>
						{sumResults && <td className="sum">Sum</td>}
					</tr>
				</thead>
				<tbody>
					{hasTwoSidedResults && (
						<tr className="results-section">
							<td className="sides">2</td>
							<td className="results">
								{results
									?.filter((x) => x.sides === 2)
									.map((x, index) => (
										<span key={`two-sided-${index}`}>{x.value}&nbsp;</span>
									))}
							</td>
							{sumResults && <td className="sum">{sumMap.get(2)}</td>}
						</tr>
					)}
					{hasFourSidedResults && (
						<tr className="results-section">
							<td className="sides">4</td>
							<td className="results">
								{results
									?.filter((x) => x.sides === 4)
									.map((x, index) => (
										<span key={`four-sided-${index}`}>{x.value}&nbsp;</span>
									))}
							</td>
							{sumResults && <td className="sum">{sumMap.get(4)}</td>}
						</tr>
					)}
					{hasSixSidedResults && (
						<tr className="results-section">
							<td className="sides">6</td>
							<td className="results">
								{results
									?.filter((x) => x.sides === 6)
									.map((x, index) => (
										<span key={`six-sided-${index}`}>{x.value}&nbsp;</span>
									))}
							</td>
							{sumResults && <td className="sum">{sumMap.get(6)}</td>}
						</tr>
					)}
					{hasEightSidedResults && (
						<tr className="results-section">
							<td className="sides">8</td>
							<td className="results">
								{results
									?.filter((x) => x.sides === 8)
									.map((x, index) => (
										<span key={`eight-sided-${index}`}>{x.value}&nbsp;</span>
									))}
							</td>
							{sumResults && <td className="sum">{sumMap.get(8)}</td>}
						</tr>
					)}
					{hasTenSidedResults && (
						<tr className="results-section">
							<td className="sides">10</td>
							<td className="results">
								{results
									?.filter((x) => x.sides === 10)
									.map((x, index) => (
										<span key={`ten-sided-${index}`}>{x.value}&nbsp;</span>
									))}
							</td>
							{sumResults && <td className="sum">{sumMap.get(10)}</td>}
						</tr>
					)}
					{hasTwelveSidedResults && (
						<tr className="results-section">
							<td className="sides">12</td>
							<td className="results">
								{results
									?.filter((x) => x.sides === 12)
									.map((x, index) => (
										<span key={`twelve-sided-${index}`}>{x.value}&nbsp;</span>
									))}
							</td>
							{sumResults && <td className="sum">{sumMap.get(12)}</td>}
						</tr>
					)}
					{hasTwentySidedResults && (
						<tr className="results-section">
							<td className="sides">20</td>
							<td className="results">
								{results
									?.filter((x) => x.sides === 20)
									.map((x, index) => (
										<span key={`twenty-sided-${index}`}>{x.value}&nbsp;</span>
									))}
							</td>
							{sumResults && <td className="sum">{sumMap.get(20)}</td>}
						</tr>
					)}
					{hasOneHundredSidedResults && (
						<tr className="results-section">
							<td className="sides">100</td>
							<td className="results">
								{results
									?.filter((x) => x.sides === 100)
									.map((x, index) => (
										<span key={`one-hundred-sided-${index}`}>
											{x.value}&nbsp;
										</span>
									))}
							</td>
							{sumResults && <td className="sum">{sumMap.get(100)}</td>}
						</tr>
					)}
				</tbody>
			</Table>
			{!hideClear && (
				<div>
					<Button
						variant="outline-danger"
						disabled={!results?.length}
						onClick={onClearClicked}
					>
						Clear
					</Button>
				</div>
			)}
		</div>
	);
};
