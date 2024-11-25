/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import {
	type CustomFilterProps,
	useGridFilter,
} from "@ag-grid-community/react";
import { useRollbar } from "@rollbar/react";
import type React from "react";
import {
	type ChangeEventHandler,
	type ReactElement,
	useCallback,
	useEffect,
	useState,
} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Effect, mapEffectToDisplayName } from "../../../enums/effects";
import {
	createDisabledFilterArray,
	numberBasedFilterDoesFilterPass,
	numberBasedFilterHandleCheck,
	numberBasedFilterIsChecked,
	type NumberBasedFilterProps,
} from "../../../utility/filters/number-based-filter";

import "./effect-filter.scss";

const effectFilterDisabledArray = createDisabledFilterArray(36);

const EffectFilter = ({ onModelChange }: CustomFilterProps): ReactElement => {
	const [selectedEffectTypes, setSelectedEffectTypes] = useState<number[]>(
		effectFilterDisabledArray,
	);
	const rollbar = useRollbar();

	useEffect(() => {
		if (selectedEffectTypes.length === effectFilterDisabledArray.length)
			onModelChange(null);
		else onModelChange(selectedEffectTypes);
	}, [selectedEffectTypes]);

	const doesFilterPass = (props: NumberBasedFilterProps) => {
		if (!props?.data?.effect || props?.data?.effect?.length === 0) return false;

		for (const value of props.data.effect) {
			const passes = numberBasedFilterDoesFilterPass(
				value,
				selectedEffectTypes,
			);

			if (passes) return true;
		}

		return false;
	};

	useGridFilter({ doesFilterPass });

	const selectAllEffects = useCallback(
		() => setSelectedEffectTypes(effectFilterDisabledArray),
		[],
	);

	const selectNoEffects = useCallback(() => setSelectedEffectTypes([]), []);

	const handleCheck: ChangeEventHandler<HTMLInputElement> = useCallback(
		(e: React.BaseSyntheticEvent<object, unknown, HTMLInputElement>): void => {
			const effect = e.target.getAttribute("data-effect");

			if (!effect) {
				rollbar.warning("effect was null", e);
				return;
			}

			numberBasedFilterHandleCheck(
				selectedEffectTypes,
				setSelectedEffectTypes,
				effect,
			);
		},
		[selectedEffectTypes],
	);

	const isChecked = (x: Effect): boolean | undefined =>
		numberBasedFilterIsChecked(selectedEffectTypes, x);

	return (
		<div className="effect-filter">
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.None)}
				checked={isChecked(Effect.None)}
				data-effect={Effect.None}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Additional)}
				checked={isChecked(Effect.Additional)}
				data-effect={Effect.Additional}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Banishment)}
				checked={isChecked(Effect.Banishment)}
				data-effect={Effect.Banishment}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Blinded)}
				checked={isChecked(Effect.Blinded)}
				data-effect={Effect.Blinded}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Buff)}
				checked={isChecked(Effect.Buff)}
				data-effect={Effect.Buff}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Charmed)}
				checked={isChecked(Effect.Charmed)}
				data-effect={Effect.Charmed}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Combat)}
				checked={isChecked(Effect.Combat)}
				data-effect={Effect.Combat}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Communication)}
				checked={isChecked(Effect.Communication)}
				data-effect={Effect.Communication}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Control)}
				checked={isChecked(Effect.Control)}
				data-effect={Effect.Control}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Creation)}
				checked={isChecked(Effect.Creation)}
				data-effect={Effect.Creation}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Deafened)}
				checked={isChecked(Effect.Deafened)}
				data-effect={Effect.Deafened}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Debuff)}
				checked={isChecked(Effect.Debuff)}
				data-effect={Effect.Debuff}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Deception)}
				checked={isChecked(Effect.Deception)}
				data-effect={Effect.Deception}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Detection)}
				checked={isChecked(Effect.Detection)}
				data-effect={Effect.Detection}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Distracted)}
				checked={isChecked(Effect.Distracted)}
				data-effect={Effect.Distracted}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Dunamancy)}
				checked={isChecked(Effect.Dunamancy)}
				data-effect={Effect.Dunamancy}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Environment)}
				checked={isChecked(Effect.Environment)}
				data-effect={Effect.Environment}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Exploration)}
				checked={isChecked(Effect.Exploration)}
				data-effect={Effect.Exploration}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Foreknowledge)}
				checked={isChecked(Effect.Foreknowledge)}
				data-effect={Effect.Foreknowledge}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Frightened)}
				checked={isChecked(Effect.Frightened)}
				data-effect={Effect.Frightened}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Healing)}
				checked={isChecked(Effect.Healing)}
				data-effect={Effect.Healing}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Invisible)}
				checked={isChecked(Effect.Invisible)}
				data-effect={Effect.Invisible}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Movement)}
				checked={isChecked(Effect.Movement)}
				data-effect={Effect.Movement}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Negation)}
				checked={isChecked(Effect.Negation)}
				data-effect={Effect.Negation}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Paralyzed)}
				checked={isChecked(Effect.Paralyzed)}
				data-effect={Effect.Paralyzed}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Petrified)}
				checked={isChecked(Effect.Petrified)}
				data-effect={Effect.Petrified}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Prone)}
				checked={isChecked(Effect.Prone)}
				data-effect={Effect.Prone}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Restrained)}
				checked={isChecked(Effect.Restrained)}
				data-effect={Effect.Restrained}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Shapechanging)}
				checked={isChecked(Effect.Shapechanging)}
				data-effect={Effect.Shapechanging}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Social)}
				checked={isChecked(Effect.Social)}
				data-effect={Effect.Social}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Stunned)}
				checked={isChecked(Effect.Stunned)}
				data-effect={Effect.Stunned}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Summoning)}
				checked={isChecked(Effect.Summoning)}
				data-effect={Effect.Summoning}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Teleportation)}
				checked={isChecked(Effect.Teleportation)}
				data-effect={Effect.Teleportation}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Unconscious)}
				checked={isChecked(Effect.Unconscious)}
				data-effect={Effect.Unconscious}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Utility)}
				checked={isChecked(Effect.Utility)}
				data-effect={Effect.Utility}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapEffectToDisplayName(Effect.Warding)}
				checked={isChecked(Effect.Warding)}
				data-effect={Effect.Warding}
			/>
			<Button
				className="all-button"
				variant="outline-primary"
				onClick={selectAllEffects}
			>
				All
			</Button>
			<Button variant="outline-primary" onClick={selectNoEffects}>
				None
			</Button>
		</div>
	);
};

EffectFilter.displayName = "EffectFilter";

export default EffectFilter;
