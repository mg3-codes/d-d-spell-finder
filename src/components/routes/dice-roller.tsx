/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { DiceRollerPage } from "../dice-roller-page";
import PageWrapper from "../page-wrapper";

const DiceRoller = () => {
	return (
		<PageWrapper title="Dice Roller | D&D Spell Finder | MG3.codes">
			<DiceRollerPage />
		</PageWrapper>
	);
};

export default DiceRoller;
