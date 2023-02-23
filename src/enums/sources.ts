/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

export enum Source {
	AcquisitionsIncorporated = 0,
	BasicRules = 1,
	ElementalEvil = 2,
	ExplorersGuideToWildemount = 3,
	GuildmastersGuideToRavnica = 4,
	LostLaboratoryOfKwalish = 5,
	PlayersHandbook = 6,
	TashasCauldronOfEverything = 7,
	XanatharsGuideToEverything = 8,
}

export const mapNumberToSource = (x: number): number | undefined => {
	switch (x) {
		case 0:
			return Source.AcquisitionsIncorporated;
		case 1:
			return Source.BasicRules;
		case 2:
			return Source.ElementalEvil;
		case 3:
			return Source.ExplorersGuideToWildemount;
		case 4:
			return Source.GuildmastersGuideToRavnica;
		case 5:
			return Source.LostLaboratoryOfKwalish;
		case 6:
			return Source.PlayersHandbook;
		case 7:
			return Source.TashasCauldronOfEverything;
		case 8:
			return Source.XanatharsGuideToEverything;
	}
};

export const mapNumberToSourceDisplayName = (x: number): string => {
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
