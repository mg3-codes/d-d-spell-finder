/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import Table from "react-bootstrap/Table";

import "./edge-dice-key.scss";
import { EdgeDiceSymbol } from "../edge-dice-symbol";
import { EdgeOfTheEmpireDiceSymbol } from "../../enums/edge-of-the-empire-dice-symbol";

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
					<td id="boost">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Blank}
						/>
					</td>
					<td id="setback">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Blank}
						/>
					</td>
					<td id="ability">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Blank}
						/>
					</td>
					<td id="difficulty">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Blank}
						/>
					</td>
					<td id="proficiency">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Blank}
						/>
					</td>
					<td id="challenge">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Blank}
						/>
					</td>
					<td>
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.DarkSide}
						/>
					</td>
				</tr>
				<tr className="symbols">
					<td>2</td>
					<td id="boost">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Blank}
						/>
					</td>
					<td id="setback">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Blank}
						/>
					</td>
					<td id="ability">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Success}
						/>
					</td>
					<td id="difficulty">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Failure}
						/>
					</td>
					<td id="proficiency">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Success}
						/>
					</td>
					<td id="challenge">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Failure}
						/>
					</td>
					<td id="force">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.DarkSide}
						/>
					</td>
				</tr>
				<tr className="symbols">
					<td>3</td>
					<td id="boost">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Success}
						/>
					</td>
					<td id="setback">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Failure}
						/>
					</td>
					<td id="ability">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Success}
						/>
					</td>
					<td id="difficulty">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Failure}
						/>
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Failure}
						/>
					</td>
					<td id="proficiency">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Success}
						/>
					</td>
					<td id="challenge">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Failure}
						/>
					</td>
					<td id="force">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.DarkSide}
						/>
					</td>
				</tr>
				<tr className="symbols">
					<td>4</td>
					<td id="boost">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Success}
						/>
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Advantage}
						/>
					</td>
					<td id="setback">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Failure}
						/>
					</td>
					<td id="ability">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Success}
						/>
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Success}
						/>
					</td>
					<td id="difficulty">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Threat}
						/>
					</td>
					<td id="proficiency">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Success}
						/>
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Success}
						/>
					</td>
					<td id="challenge">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Failure}
						/>
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Failure}
						/>
					</td>
					<td id="force">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.DarkSide}
						/>
					</td>
				</tr>
				<tr className="symbols">
					<td>5</td>
					<td id="boost">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Advantage}
						/>
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Advantage}
						/>
					</td>
					<td id="setback">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Threat}
						/>
					</td>
					<td id="ability">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Advantage}
						/>
					</td>
					<td id="difficulty">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Threat}
						/>
					</td>
					<td id="proficiency">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Success}
						/>
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Success}
						/>
					</td>
					<td id="challenge">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Failure}
						/>
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Failure}
						/>
					</td>
					<td id="force">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.DarkSide}
						/>
					</td>
				</tr>
				<tr className="symbols">
					<td>6</td>
					<td id="boost">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Advantage}
						/>
					</td>
					<td id="setback">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Threat}
						/>
					</td>
					<td id="ability">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Advantage}
						/>
					</td>
					<td id="difficulty">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Threat}
						/>
					</td>
					<td id="proficiency">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Advantage}
						/>
					</td>
					<td id="challenge">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Threat}
						/>
					</td>
					<td id="force">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.DarkSide}
						/>
					</td>
				</tr>
				<tr className="symbols">
					<td>7</td>
					<td id="boost" />
					<td id="setback" />
					<td id="ability">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Success}
						/>
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Advantage}
						/>
					</td>
					<td id="difficulty">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Threat}
						/>
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Threat}
						/>
					</td>
					<td id="proficiency">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Success}
						/>
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Advantage}
						/>
					</td>
					<td id="challenge">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Threat}
						/>
					</td>
					<td id="force">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.DarkSide}
						/>
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.DarkSide}
						/>
					</td>
				</tr>
				<tr className="symbols">
					<td>8</td>
					<td id="boost" />
					<td id="setback" />
					<td id="ability">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Advantage}
						/>
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Advantage}
						/>
					</td>
					<td id="difficulty">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Failure}
						/>
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Threat}
						/>
					</td>
					<td id="proficiency">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Success}
						/>
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Advantage}
						/>
					</td>
					<td id="challenge">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Failure}
						/>
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Threat}
						/>
					</td>
					<td id="force">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.LightSide}
						/>
					</td>
				</tr>
				<tr className="symbols">
					<td>9</td>
					<td id="boost" />
					<td id="setback" />
					<td id="ability" />
					<td id="difficulty" />
					<td id="proficiency">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Success}
						/>
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Advantage}
						/>
					</td>
					<td id="challenge">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Failure}
						/>
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Threat}
						/>
					</td>
					<td id="force">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.LightSide}
						/>
					</td>
				</tr>
				<tr className="symbols">
					<td>10</td>
					<td id="boost" />
					<td id="setback" />
					<td id="ability" />
					<td id="difficulty" />
					<td id="proficiency">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Advantage}
						/>
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Advantage}
						/>
					</td>
					<td id="challenge">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Threat}
						/>
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Threat}
						/>
					</td>
					<td id="force">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.LightSide}
						/>
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.LightSide}
						/>
					</td>
				</tr>
				<tr className="symbols">
					<td>11</td>
					<td id="boost" />
					<td id="setback" />
					<td id="ability" />
					<td id="difficulty" />
					<td id="proficiency">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Advantage}
						/>
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Advantage}
						/>
					</td>
					<td id="challenge">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Threat}
						/>
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Threat}
						/>
					</td>
					<td id="force">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.LightSide}
						/>
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.LightSide}
						/>
					</td>
				</tr>
				<tr className="symbols">
					<td>12</td>
					<td id="boost" />
					<td id="setback" />
					<td id="ability" />
					<td id="difficulty" />
					<td id="proficiency">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Triumph}
						/>
					</td>
					<td id="challenge">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.Despair}
						/>
					</td>
					<td id="force">
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.LightSide}
						/>
						<EdgeDiceSymbol
							symbol={EdgeOfTheEmpireDiceSymbol.LightSide}
						/>
					</td>
				</tr>
			</tbody>
		</Table>
	);
};
