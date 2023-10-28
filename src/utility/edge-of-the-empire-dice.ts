/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { EdgeOfTheEmpireDiceSymbol } from "../enums/edge-of-the-empire-dice-symbol";
import EdgeOfTheEmpireDiceResult from "../types/edge-of-the-empire-dice-result";

const determineRollSuccess = (result: EdgeOfTheEmpireDiceResult): boolean => {
	if (result.successAndFailure > 0) return true;
	else return false;
};

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
