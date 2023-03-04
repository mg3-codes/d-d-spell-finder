/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, {
	forwardRef,
	ReactElement,
	useCallback,
	useEffect,
	useImperativeHandle,
	useState,
} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { mapEffectToDisplayName, Effect } from "../../../enums/effects";
import { AgGridFilterProps } from "../../../types/ag-grid-filter-props";
import {
	createDisabledFilterArray,
	numberBasedFilterDoesFilterPass,
	numberBasedFilterHandleCheck,
	numberBasedFilterIsChecked,
	numberBasedFilterIsFilterActive,
	NumberBasedFilterProps,
	NumberBasedFilterSetModel,
} from "../../../utility/filters/number-based-filter";

import "./effect-filter.scss";

const effectFilterDisabledArray = createDisabledFilterArray(36);

const EffectFilter = forwardRef(
	(props: AgGridFilterProps, ref): ReactElement => {
		const [selectedEffectTypes, setSelectedEffectTypes] = useState<
			number[]
		>(effectFilterDisabledArray);

		useEffect(() => {
			props.filterChangedCallback();
		}, [selectedEffectTypes]);

		useImperativeHandle(ref, () => {
			const doesFilterPass = (props: NumberBasedFilterProps) => {
				if (!props?.data?.effect || props?.data?.effect?.length === 0)
					return false;

				for (const value of props.data.effect) {
					const passes = numberBasedFilterDoesFilterPass(
						value,
						selectedEffectTypes,
					);

					if (passes) return true;
				}

				return false;
			};

			const isFilterActive = () => {
				return numberBasedFilterIsFilterActive(
					selectedEffectTypes.length,
					effectFilterDisabledArray.length,
				);
			};

			const getModel = () => {
				if (!isFilterActive()) {
					return null;
				}

				return {
					value: selectedEffectTypes,
				};
			};

			const setModel = (model: NumberBasedFilterSetModel) => {
				setSelectedEffectTypes(model?.value ?? []);
			};

			return {
				doesFilterPass,
				isFilterActive,
				getModel,
				setModel,
			};
		});

		const handleCheck = useCallback(
			(x: Effect): void =>
				numberBasedFilterHandleCheck(
					selectedEffectTypes,
					setSelectedEffectTypes,
					x,
				),
			[],
		);

		const isChecked = (x: Effect): boolean | undefined =>
			numberBasedFilterIsChecked(selectedEffectTypes, x);

		return (
			<div className="effect-filter">
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.None)}
					label={mapEffectToDisplayName(Effect.None)}
					checked={isChecked(Effect.None)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Additional)}
					label={mapEffectToDisplayName(Effect.Additional)}
					checked={isChecked(Effect.Additional)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Banishment)}
					label={mapEffectToDisplayName(Effect.Banishment)}
					checked={isChecked(Effect.Banishment)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Blinded)}
					label={mapEffectToDisplayName(Effect.Blinded)}
					checked={isChecked(Effect.Blinded)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Buff)}
					label={mapEffectToDisplayName(Effect.Buff)}
					checked={isChecked(Effect.Buff)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Charmed)}
					label={mapEffectToDisplayName(Effect.Charmed)}
					checked={isChecked(Effect.Charmed)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Combat)}
					label={mapEffectToDisplayName(Effect.Combat)}
					checked={isChecked(Effect.Combat)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Communication)}
					label={mapEffectToDisplayName(Effect.Communication)}
					checked={isChecked(Effect.Communication)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Control)}
					label={mapEffectToDisplayName(Effect.Control)}
					checked={isChecked(Effect.Control)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Creation)}
					label={mapEffectToDisplayName(Effect.Creation)}
					checked={isChecked(Effect.Creation)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Deafened)}
					label={mapEffectToDisplayName(Effect.Deafened)}
					checked={isChecked(Effect.Deafened)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Debuff)}
					label={mapEffectToDisplayName(Effect.Debuff)}
					checked={isChecked(Effect.Debuff)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Deception)}
					label={mapEffectToDisplayName(Effect.Deception)}
					checked={isChecked(Effect.Deception)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Detection)}
					label={mapEffectToDisplayName(Effect.Detection)}
					checked={isChecked(Effect.Detection)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Detection)}
					label={mapEffectToDisplayName(Effect.Detection)}
					checked={isChecked(Effect.Detection)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Distracted)}
					label={mapEffectToDisplayName(Effect.Distracted)}
					checked={isChecked(Effect.Distracted)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Dunamancy)}
					label={mapEffectToDisplayName(Effect.Dunamancy)}
					checked={isChecked(Effect.Dunamancy)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Environment)}
					label={mapEffectToDisplayName(Effect.Environment)}
					checked={isChecked(Effect.Environment)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Exploration)}
					label={mapEffectToDisplayName(Effect.Exploration)}
					checked={isChecked(Effect.Exploration)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Foreknowledge)}
					label={mapEffectToDisplayName(Effect.Foreknowledge)}
					checked={isChecked(Effect.Foreknowledge)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Frightened)}
					label={mapEffectToDisplayName(Effect.Frightened)}
					checked={isChecked(Effect.Frightened)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Healing)}
					label={mapEffectToDisplayName(Effect.Healing)}
					checked={isChecked(Effect.Healing)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Invisible)}
					label={mapEffectToDisplayName(Effect.Invisible)}
					checked={isChecked(Effect.Invisible)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Movement)}
					label={mapEffectToDisplayName(Effect.Movement)}
					checked={isChecked(Effect.Movement)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Negation)}
					label={mapEffectToDisplayName(Effect.Negation)}
					checked={isChecked(Effect.Negation)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Paralyzed)}
					label={mapEffectToDisplayName(Effect.Paralyzed)}
					checked={isChecked(Effect.Paralyzed)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Petrified)}
					label={mapEffectToDisplayName(Effect.Petrified)}
					checked={isChecked(Effect.Petrified)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Prone)}
					label={mapEffectToDisplayName(Effect.Prone)}
					checked={isChecked(Effect.Prone)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Restrained)}
					label={mapEffectToDisplayName(Effect.Restrained)}
					checked={isChecked(Effect.Restrained)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Shapechanging)}
					label={mapEffectToDisplayName(Effect.Shapechanging)}
					checked={isChecked(Effect.Shapechanging)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Social)}
					label={mapEffectToDisplayName(Effect.Social)}
					checked={isChecked(Effect.Social)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Stunned)}
					label={mapEffectToDisplayName(Effect.Stunned)}
					checked={isChecked(Effect.Stunned)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Summoning)}
					label={mapEffectToDisplayName(Effect.Summoning)}
					checked={isChecked(Effect.Summoning)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Teleportation)}
					label={mapEffectToDisplayName(Effect.Teleportation)}
					checked={isChecked(Effect.Teleportation)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Unconscious)}
					label={mapEffectToDisplayName(Effect.Unconscious)}
					checked={isChecked(Effect.Unconscious)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Utility)}
					label={mapEffectToDisplayName(Effect.Utility)}
					checked={isChecked(Effect.Utility)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleCheck(Effect.Warding)}
					label={mapEffectToDisplayName(Effect.Warding)}
					checked={isChecked(Effect.Warding)}
				/>
				<Button
					variant="outline-primary"
					onClick={() =>
						useCallback(
							() =>
								setSelectedEffectTypes(
									effectFilterDisabledArray,
								),
							[],
						)
					}
				>
					All
				</Button>
				<Button
					variant="outline-primary"
					onClick={() =>
						useCallback(() => setSelectedEffectTypes([]), [])
					}
				>
					None
				</Button>
			</div>
		);
	},
);

EffectFilter.displayName = "EffectFilter";

export default EffectFilter;
