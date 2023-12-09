/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import Table from "react-bootstrap/Table";

import "./edge-dice-key.scss";

export const EdgeDiceKey = () => {
	return (
		<Table className="dice-table" bordered responsive>
			<thead>
				<tr>
					<td className="title" colSpan={13}>
						Dice
					</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Side</td>
					<td className="dice">🟦 Boost</td>
					<td className="dice">⬛️ Setback</td>
					<td className="dice">🟩 Ability</td>
					<td className="dice">🟪 Difficulty</td>
					<td className="dice">🟨 Proficiency</td>
					<td className="dice">🟥 Challenge</td>
					<td className="dice">⬜️ Force</td>
				</tr>
				<tr className="symbols">
					<td>1</td>
					<td id="boost">☐</td>
					<td id="setback">☐</td>
					<td id="ability">☐</td>
					<td id="difficulty">☐</td>
					<td id="proficiency">☐</td>
					<td id="challenge">☐</td>
					<td className="symbol force">z</td>
				</tr>
				<tr className="symbols">
					<td>2</td>
					<td id="boost">☐</td>
					<td id="setback">☐</td>
					<td className="symbol ability">s</td>
					<td className="symbol difficulty">f</td>
					<td className="symbol proficiency">s</td>
					<td className="symbol challenge">f</td>
					<td className="symbol force">z</td>
				</tr>
				<tr className="symbols">
					<td>3</td>
					<td className="symbol boost">s</td>
					<td className="symbol setback">f</td>
					<td className="symbol ability">s</td>
					<td className="symbol difficulty">f f</td>
					<td className="symbol proficiency">s</td>
					<td className="symbol challenge">f</td>
					<td className="symbol force">z</td>
				</tr>
				<tr className="symbols">
					<td>4</td>
					<td className="symbol boost">s a</td>
					<td className="symbol setback">f</td>
					<td className="symbol ability">s s</td>
					<td className="symbol difficulty">t</td>
					<td className="symbol proficiency">s s</td>
					<td className="symbol challenge">f f</td>
					<td className="symbol force">z</td>
				</tr>
				<tr className="symbols">
					<td>5</td>
					<td className="symbol boost">a a</td>
					<td className="symbol setback">t</td>
					<td className="symbol ability">a</td>
					<td className="symbol difficulty">t</td>
					<td className="symbol proficiency">s s</td>
					<td className="symbol challenge">f f</td>
					<td className="symbol force">z</td>
				</tr>
				<tr className="symbols">
					<td>6</td>
					<td className="symbol boost">a</td>
					<td className="symbol setback">t</td>
					<td className="symbol ability">a</td>
					<td className="symbol difficulty">t</td>
					<td className="symbol proficiency">a</td>
					<td className="symbol challenge">t</td>
					<td className="symbol force">z</td>
				</tr>
				<tr className="symbols">
					<td>7</td>
					<td id="boost" />
					<td id="setback" />
					<td className="symbol ability">s a</td>
					<td className="symbol difficulty">t t</td>
					<td className="symbol proficiency">s a</td>
					<td className="symbol challenge">t</td>
					<td className="symbol force">z z</td>
				</tr>
				<tr className="symbols">
					<td>8</td>
					<td id="boost" />
					<td id="setback" />
					<td className="symbol ability">a a</td>
					<td className="symbol difficulty">f t</td>
					<td className="symbol proficiency">s a</td>
					<td className="symbol challenge">f t</td>
					<td className="symbol force">Z</td>
				</tr>
				<tr className="symbols">
					<td>9</td>
					<td id="boost" />
					<td id="setback" />
					<td id="ability" />
					<td id="difficulty" />
					<td className="symbol proficiency">s a</td>
					<td className="symbol challenge">f t</td>
					<td className="symbol force">Z</td>
				</tr>
				<tr className="symbols">
					<td>10</td>
					<td id="boost" />
					<td id="setback" />
					<td id="ability" />
					<td id="difficulty" />
					<td className="symbol proficiency">a a</td>
					<td className="symbol challenge">f t</td>
					<td className="symbol force">Z Z</td>
				</tr>
				<tr className="symbols">
					<td>11</td>
					<td id="boost" />
					<td id="setback" />
					<td id="ability" />
					<td id="difficulty" />
					<td className="symbol proficiency">a a</td>
					<td className="symbol challenge">f t</td>
					<td className="symbol force">Z Z</td>
				</tr>
				<tr className="symbols">
					<td>12</td>
					<td id="boost" />
					<td id="setback" />
					<td id="ability" />
					<td id="difficulty" />
					<td className="symbol proficiency">x</td>
					<td className="symbol challenge">y</td>
					<td className="symbol force">Z Z</td>
				</tr>
			</tbody>
		</Table>
	);
};
