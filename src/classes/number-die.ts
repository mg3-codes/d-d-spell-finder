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

	/**
	 * Rolls the die and sets the value to a random number between 1 and the number of sides on the die.
	 *
	 * @returns {void}
	 */
	roll = (): void => {
		const min = 1;
		const roll = Math.floor(Math.random() * (this.sides - min + 1) + min);

		this.value = roll;
	};
}
