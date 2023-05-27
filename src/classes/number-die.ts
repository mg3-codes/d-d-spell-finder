/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

export default class NumberDie {
	sides = 0;
	value?: number;

	constructor(sides: number, value?: number) {
		this.sides = sides;
		this.value = value;

		this.roll();
	}

	roll = (): void => {
		const min = 1;
		const roll = Math.floor(Math.random() * (this.sides - min + 1) + min);

		this.value = roll;
	};
}
