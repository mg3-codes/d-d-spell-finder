/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

export enum DamageType {
	Acid = 0,
	Bludgeoning = 1,
	Cold = 2,
	Fire = 3,
	Force = 4,
	Lightning = 5,
	Necrotic = 6,
	Piercing = 7,
	Poison = 8,
	Psychic = 9,
	Radiant = 10,
	Slashing = 11,
	Thunder = 12,
	None = 13,
}

/**
 * Map a number to a DamageType enum value.
 * @param x - The number to map.
 * @returns The corresponding DamageType enum value, or null if invalid.
 */
export const mapNumberToDamageType = (x: number): DamageType | null => {
	switch (x) {
		case 0:
			return DamageType.Acid;
		case 1:
			return DamageType.Bludgeoning;
		case 2:
			return DamageType.Cold;
		case 3:
			return DamageType.Fire;
		case 4:
			return DamageType.Force;
		case 5:
			return DamageType.Lightning;
		case 6:
			return DamageType.Necrotic;
		case 7:
			return DamageType.Piercing;
		case 8:
			return DamageType.Poison;
		case 9:
			return DamageType.Psychic;
		case 10:
			return DamageType.Radiant;
		case 11:
			return DamageType.Slashing;
		case 12:
			return DamageType.Thunder;
		case 13:
			return DamageType.None;
		default:
			return null;
	}
};

/**
 * Map a number to a damage type display name.
 * @param x - The number to map.
 * @returns The corresponding damage type display name.
 */
export const mapNumberToDamageTypeDisplayName = (
	x: number | undefined,
): string => {
	switch (x) {
		case 0:
			return "Acid";
		case 1:
			return "Bludgeoning";
		case 2:
			return "Cold";
		case 3:
			return "Fire";
		case 4:
			return "Force";
		case 5:
			return "Lightning";
		case 6:
			return "Necrotic";
		case 7:
			return "Piercing";
		case 8:
			return "Poison";
		case 9:
			return "Psychic";
		case 10:
			return "Radiant";
		case 11:
			return "Slashing";
		case 12:
			return "Thunder";
		case 13:
			return "None";
		default:
			return "";
	}
};
