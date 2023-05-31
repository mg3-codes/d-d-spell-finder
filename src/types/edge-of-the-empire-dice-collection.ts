/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import AbilityDie from "../classes/edge-of-the-empire-dice/ability-die";
import BoostDie from "../classes/edge-of-the-empire-dice/boost-die";
import ChallengeDie from "../classes/edge-of-the-empire-dice/challenge-die";
import DifficultyDie from "../classes/edge-of-the-empire-dice/difficulty-die";
import ForceDie from "../classes/edge-of-the-empire-dice/force-die";
import ProficiencyDie from "../classes/edge-of-the-empire-dice/proficiency-die";
import SetbackDie from "../classes/edge-of-the-empire-dice/setback-die";

type EdgeOfTheEmpireDiceCollection = {
	boost: BoostDie[];
	setback: SetbackDie[];
	ability: AbilityDie[];
	difficulty: DifficultyDie[];
	proficiency: ProficiencyDie[];
	challenge: ChallengeDie[];
	force: ForceDie[];
};

export default EdgeOfTheEmpireDiceCollection;
