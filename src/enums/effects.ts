/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

export enum Effect {
	None = 0,
	Additional = 1,
	Banishment = 2,
	Blinded = 3,
	Buff = 4,
	Charmed = 5,
	Combat = 6,
	Communication = 7,
	Control = 8,
	Creation = 9,
	Deafened = 10,
	Debuff = 11,
	Deception = 12,
	Detection = 13,
	Distracted = 35,
	Dunamancy = 14,
	Environment = 15,
	Exploration = 33,
	Foreknowledge = 16,
	Frightened = 17,
	Healing = 18,
	Invisible = 19,
	Movement = 20,
	Negation = 21,
	Paralyzed = 22,
	Petrified = 23,
	Prone = 24,
	Restrained = 25,
	Shapechanging = 26,
	Social = 27,
	Stunned = 28,
	Summoning = 34,
	Teleportation = 29,
	Unconscious = 30,
	Utility = 31,
	Warding = 32,
}

// function requires complexity to map all values
// skipcq: JS-0044
export const mapNumberToEffect = (x: number): Effect | null => {
	switch (x) {
		case 0:
			return Effect.None;
		case 1:
			return Effect.Additional;
		case 2:
			return Effect.Banishment;
		case 3:
			return Effect.Blinded;
		case 4:
			return Effect.Buff;
		case 5:
			return Effect.Charmed;
		case 6:
			return Effect.Combat;
		case 7:
			return Effect.Communication;
		case 8:
			return Effect.Control;
		case 9:
			return Effect.Creation;
		case 10:
			return Effect.Deafened;
		case 11:
			return Effect.Debuff;
		case 12:
			return Effect.Deception;
		case 13:
			return Effect.Detection;
		case 14:
			return Effect.Dunamancy;
		case 15:
			return Effect.Environment;
		case 16:
			return Effect.Foreknowledge;
		case 17:
			return Effect.Frightened;
		case 18:
			return Effect.Healing;
		case 19:
			return Effect.Invisible;
		case 20:
			return Effect.Movement;
		case 21:
			return Effect.Negation;
		case 22:
			return Effect.Paralyzed;
		case 23:
			return Effect.Petrified;
		case 24:
			return Effect.Prone;
		case 25:
			return Effect.Restrained;
		case 26:
			return Effect.Shapechanging;
		case 27:
			return Effect.Social;
		case 28:
			return Effect.Stunned;
		case 29:
			return Effect.Teleportation;
		case 30:
			return Effect.Unconscious;
		case 31:
			return Effect.Utility;
		case 32:
			return Effect.Warding;
		case 33:
			return Effect.Exploration;
		case 34:
			return Effect.Summoning;
		case 35:
			return Effect.Distracted;
		default:
			return null;
	}
};

// function requires complexity to map all values
// skipcq: JS-0044
export const mapEffectToDisplayName = (x: Effect): string => {
	switch (x) {
		case Effect.None:
			return "None";
		case Effect.Additional:
			return "Additional";
		case Effect.Banishment:
			return "Banishment";
		case Effect.Blinded:
			return "Blinded";
		case Effect.Buff:
			return "Buff";
		case Effect.Charmed:
			return "Charmed";
		case Effect.Combat:
			return "Combat";
		case Effect.Communication:
			return "Communication";
		case Effect.Control:
			return "Control";
		case Effect.Creation:
			return "Creation";
		case Effect.Deafened:
			return "Deafened";
		case Effect.Debuff:
			return "Debuff";
		case Effect.Deception:
			return "Deception";
		case Effect.Detection:
			return "Detection";
		case Effect.Dunamancy:
			return "Dunamancy";
		case Effect.Environment:
			return "Environment";
		case Effect.Foreknowledge:
			return "Foreknowledge";
		case Effect.Frightened:
			return "Frightened";
		case Effect.Healing:
			return "Healing";
		case Effect.Invisible:
			return "Invisible";
		case Effect.Movement:
			return "Movement";
		case Effect.Negation:
			return "Negation";
		case Effect.Paralyzed:
			return "Paralyzed";
		case Effect.Petrified:
			return "Petrified";
		case Effect.Prone:
			return "Prone";
		case Effect.Restrained:
			return "Restrained";
		case Effect.Shapechanging:
			return "Shapechanging";
		case Effect.Social:
			return "Social";
		case Effect.Stunned:
			return "Stunned";
		case Effect.Teleportation:
			return "Teleportation";
		case Effect.Unconscious:
			return "Unconscious";
		case Effect.Utility:
			return "Utility";
		case Effect.Warding:
			return "Warding";
		case Effect.Exploration:
			return "Exploration";
		case Effect.Summoning:
			return "Summoning";
		case Effect.Distracted:
			return "Distracted";
		default:
			return "";
	}
};
