/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import NumberDie from "../number-die";
import { EdgeOfTheEmpireDiceColor } from "../../enums/edge-of-the-empire-dice-color";
import { EdgeOfTheEmpireDiceSymbol } from "../../enums/edge-of-the-empire-dice-symbol";

export default class BoostDie extends NumberDie {
	color = EdgeOfTheEmpireDiceColor.Blue;
	shortDisplayName = "Boost";
	displayName = "Boost Die";

	constructor(value?: number) {
		super(6, value);
	}

	mapValueToResults = (): EdgeOfTheEmpireDiceSymbol[] => {
		switch (this.value) {
			case 1:
			case 2:
				return [EdgeOfTheEmpireDiceSymbol.Blank];
			case 3:
				return [EdgeOfTheEmpireDiceSymbol.Success];
			case 4:
				return [
					EdgeOfTheEmpireDiceSymbol.Success,
					EdgeOfTheEmpireDiceSymbol.Advantage,
				];
			case 5:
				return [
					EdgeOfTheEmpireDiceSymbol.Advantage,
					EdgeOfTheEmpireDiceSymbol.Advantage,
				];
			case 6:
				return [EdgeOfTheEmpireDiceSymbol.Advantage];
			default:
				return [];
		}
	};
}
