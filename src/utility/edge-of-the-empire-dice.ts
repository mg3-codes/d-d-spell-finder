/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { EdgeOfTheEmpireDiceSymbol } from "../enums/edge-of-the-empire-dice-symbol";
import type EdgeOfTheEmpireDiceResult from "../types/edge-of-the-empire-dice-result";

/**
 * Determine if the roll is successful based on the result.
 * @param result - The result of the dice roll.
 * @returns True if the roll is successful, otherwise false.
 */
const determineRollSuccess = (result: EdgeOfTheEmpireDiceResult): boolean => {
	return result.successAndFailure > 0;
};

/**
 * Get the outcome from the given dice symbols.
 * @param diceSymbols - The array of dice symbols.
 * @returns The result of the dice roll.
 */
export const getOutcomeFromSymbols = (
	diceSymbols: EdgeOfTheEmpireDiceSymbol[] | null,
): EdgeOfTheEmpireDiceResult => {
	const diceResult: EdgeOfTheEmpireDiceResult = {
		successes: 0,
		advantages: 0,
		failures: 0,
		threats: 0,
		triumphs: 0,
		despairs: 0,
		successAndFailure: 0,
		advantageAndThreat: 0,
		lightSide: 0,
		darkSide: 0,
		rollSuccess: false,
	};

	if (!diceSymbols) return diceResult;

	for (const symbol of diceSymbols) {
		switch (symbol) {
			case EdgeOfTheEmpireDiceSymbol.Success:
				diceResult.successes++;
				break;
			case EdgeOfTheEmpireDiceSymbol.Advantage:
				diceResult.advantages++;
				break;
			case EdgeOfTheEmpireDiceSymbol.Failure:
				diceResult.failures++;
				break;
			case EdgeOfTheEmpireDiceSymbol.Threat:
				diceResult.threats++;
				break;
			case EdgeOfTheEmpireDiceSymbol.Triumph:
				diceResult.triumphs++;
				break;
			case EdgeOfTheEmpireDiceSymbol.Despair:
				diceResult.despairs++;
				break;
			case EdgeOfTheEmpireDiceSymbol.LightSide:
				diceResult.lightSide++;
				break;
			case EdgeOfTheEmpireDiceSymbol.DarkSide:
				diceResult.darkSide++;
				break;
			case EdgeOfTheEmpireDiceSymbol.Blank:
			default:
				continue;
		}
	}

	diceResult.successAndFailure =
		diceResult.successes +
		diceResult.triumphs -
		(diceResult.failures + diceResult.despairs);
	diceResult.advantageAndThreat = diceResult.advantages - diceResult.threats;

	diceResult.rollSuccess = determineRollSuccess(diceResult);

	return diceResult;
};
