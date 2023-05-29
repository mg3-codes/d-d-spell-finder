/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import NumberDie from "../number-die";
import { EdgeOfTheEmpireDiceColor } from "../../enums/edge-of-the-empire-dice-color";
import { EdgeOfTheEmpireDiceSymbol } from "../../enums/edge-of-the-empire-dice-symbol";

export default class AbilityDie extends NumberDie {
	color = EdgeOfTheEmpireDiceColor.Green;
	shortDisplayName = "Ability";
	displayName = "Ability Die";

	constructor(value?: number) {
		super(8, value);
	}

	mapNumberToDiceFace = (x: number): AbilityDieFace | null => {
		switch (x) {
			case 1:
				return AbilityDieFace.Blank;
			case 2:
			case 3:
				return AbilityDieFace.Success;
			case 4:
				return AbilityDieFace.TwoSuccess;
			case 5:
			case 6:
				return AbilityDieFace.Advantage;
			case 7:
				return AbilityDieFace.SuccessAndAdvantage;
			case 8:
				return AbilityDieFace.TwoAdvantage;
			default:
				return null;
		}
	};

	mapValueToResults = (): EdgeOfTheEmpireDiceSymbol[] => {
		switch (this.value) {
			case 1:
				return [EdgeOfTheEmpireDiceSymbol.Blank];
			case 2:
			case 3:
				return [EdgeOfTheEmpireDiceSymbol.Success];
			case 4:
				return [
					EdgeOfTheEmpireDiceSymbol.Success,
					EdgeOfTheEmpireDiceSymbol.Success,
				];
			case 5:
			case 6:
				return [EdgeOfTheEmpireDiceSymbol.Advantage];
			case 7:
				return [
					EdgeOfTheEmpireDiceSymbol.Success,
					EdgeOfTheEmpireDiceSymbol.Advantage,
				];
			case 8:
				return [
					EdgeOfTheEmpireDiceSymbol.Advantage,
					EdgeOfTheEmpireDiceSymbol.Advantage,
				];
			default:
				return [];
		}
	};
}

enum AbilityDieFace {
	Blank,
	Success,
	TwoSuccess,
	SuccessAndAdvantage,
	Advantage,
	TwoAdvantage,
}
