/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { ValueFormatterParams } from "ag-grid-community";
import Spell from "../types/spell";

enum Source {
	"Acquisitions Incorporated" = 0,
	"Basic Rules" = 1,
	"Elemental Evil" = 2,
	"Explorer's Guide to Wildemount" = 3,
	"Guildmasters' Guide to Ravnica" = 4,
	"Lost Laboratory of Kwalish" = 5,
	"Player's Handbook" = 6,
	"Tasha's Cauldron of Everything" = 7,
	"Xanathar's Guide to Everything" = 8,
}

const mapNumberToSource = (x: number): number | undefined => {
	switch (x) {
		case 0:
			return Source["Acquisitions Incorporated"];
		case 1:
			return Source["Basic Rules"];
		case 2:
			return Source["Elemental Evil"];
		case 3:
			return Source["Explorer's Guide to Wildemount"];
		case 4:
			return Source["Guildmasters' Guide to Ravnica"];
		case 5:
			return Source["Lost Laboratory of Kwalish"];
		case 6:
			return Source["Player's Handbook"];
		case 7:
			return Source["Tasha's Cauldron of Everything"];
		case 8:
			return Source["Xanathar's Guide to Everything"];
	}
};

const mapNumberToSourceDisplayName = (x: number): string => {
	switch (x) {
		case 0:
			return "Acquisitions Incorporated";
		case 1:
			return "Basic Rules";
		case 2:
			return "Elemental Evil";
		case 3:
			return "Explorer's Guide to Wildemount";
		case 4:
			return "Guildmasters' Guide to Ravnica";
		case 5:
			return "Lost Laboratory of Kwalish";
		case 6:
			return "Player's Handbook";
		case 7:
			return "Tasha's Cauldron of Everything";
		case 8:
			return "Xanathar's Guide to Everything";
	}

	return "";
};

const sourceDataFormatter = (params: ValueFormatterParams<Spell>): string =>
	mapNumberToSourceDisplayName(params.value);

export {
	Source,
	mapNumberToSource,
	mapNumberToSourceDisplayName,
	sourceDataFormatter,
};
