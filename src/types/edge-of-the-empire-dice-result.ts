/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

type EdgeOfTheEmpireDiceResult = {
	successes: number;
	advantages: number;
	failures: number;
	threats: number;
	triumphs: number;
	despairs: number;
	successAndFailure: number;
	advantageAndThreat: number;
	lightSide: number;
	darkSide: number;
	rollSuccess: boolean;
};

export default EdgeOfTheEmpireDiceResult;
