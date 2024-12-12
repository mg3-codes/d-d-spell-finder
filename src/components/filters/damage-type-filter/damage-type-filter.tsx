/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import {
	type CustomFilterProps,
	useGridFilter,
} from "ag-grid-react";
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

import {
	DamageType,
	mapNumberToDamageTypeDisplayName,
} from "../../../enums/damage-types";
import {
	type NumberBasedFilterProps,
	createDisabledFilterArray,
	numberBasedFilterDoesFilterPass,
	numberBasedFilterHandleCheck,
	numberBasedFilterIsChecked,
} from "../../../utility/filters/number-based-filter";

import "./styles.css";

const damageTypeFilterDisabledArray = createDisabledFilterArray(14);

const DamageTypeFilter = ({
	onModelChange,
}: CustomFilterProps): ReactElement => {
	const [selectedDamageTypes, setSelectedDamageTypes] = useState<number[]>(
		damageTypeFilterDisabledArray,
	);
	const rollbar = useRollbar();

	useEffect(() => {
		if (selectedDamageTypes.length === damageTypeFilterDisabledArray.length)
			onModelChange(null);
		else onModelChange(selectedDamageTypes);
	}, [selectedDamageTypes, onModelChange]);

	const doesFilterPass = (props: NumberBasedFilterProps) => {
		return numberBasedFilterDoesFilterPass(
			props?.data?.damage,
			selectedDamageTypes,
		);
	};

	useGridFilter({ doesFilterPass });

	const selectAllDamageTypes = useCallback(
		() => setSelectedDamageTypes(damageTypeFilterDisabledArray),
		[],
	);

	const selectNoDamageTypes = useCallback(() => setSelectedDamageTypes([]), []);

	const handleCheck: ChangeEventHandler<HTMLInputElement> = useCallback(
		(e: React.BaseSyntheticEvent<object, unknown, HTMLInputElement>): void => {
			const damage = e.target.getAttribute("data-damage");

			if (!damage) {
				rollbar.warning("damage was null", e);
				return;
			}

			numberBasedFilterHandleCheck(
				selectedDamageTypes,
				setSelectedDamageTypes,
				damage,
			);
		},
		[selectedDamageTypes, rollbar],
	);

	const isChecked = (x: DamageType): boolean | undefined =>
		numberBasedFilterIsChecked(selectedDamageTypes, x);

	return (
		<div className="damage-type-filter">
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToDamageTypeDisplayName(DamageType.None)}
				checked={isChecked(DamageType.None)}
				data-damage={DamageType.None}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToDamageTypeDisplayName(DamageType.Acid)}
				checked={isChecked(DamageType.Acid)}
				data-damage={DamageType.Acid}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToDamageTypeDisplayName(DamageType.Bludgeoning)}
				checked={isChecked(DamageType.Bludgeoning)}
				data-damage={DamageType.Bludgeoning}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToDamageTypeDisplayName(DamageType.Cold)}
				checked={isChecked(DamageType.Cold)}
				data-damage={DamageType.Cold}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToDamageTypeDisplayName(DamageType.Fire)}
				checked={isChecked(DamageType.Fire)}
				data-damage={DamageType.Fire}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToDamageTypeDisplayName(DamageType.Force)}
				checked={isChecked(DamageType.Force)}
				data-damage={DamageType.Force}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToDamageTypeDisplayName(DamageType.Lightning)}
				checked={isChecked(DamageType.Lightning)}
				data-damage={DamageType.Lightning}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToDamageTypeDisplayName(DamageType.Necrotic)}
				checked={isChecked(DamageType.Necrotic)}
				data-damage={DamageType.Necrotic}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToDamageTypeDisplayName(DamageType.Piercing)}
				checked={isChecked(DamageType.Piercing)}
				data-damage={DamageType.Piercing}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToDamageTypeDisplayName(DamageType.Poison)}
				checked={isChecked(DamageType.Poison)}
				data-damage={DamageType.Poison}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToDamageTypeDisplayName(DamageType.Psychic)}
				checked={isChecked(DamageType.Psychic)}
				data-damage={DamageType.Psychic}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToDamageTypeDisplayName(DamageType.Radiant)}
				checked={isChecked(DamageType.Radiant)}
				data-damage={DamageType.Radiant}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToDamageTypeDisplayName(DamageType.Slashing)}
				checked={isChecked(DamageType.Slashing)}
				data-damage={DamageType.Slashing}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToDamageTypeDisplayName(DamageType.Thunder)}
				checked={isChecked(DamageType.Thunder)}
				data-damage={DamageType.Thunder}
			/>
			<Button
				className="all-button"
				variant="outline-primary"
				onClick={selectAllDamageTypes}
			>
				All
			</Button>
			<Button variant="outline-primary" onClick={selectNoDamageTypes}>
				None
			</Button>
		</div>
	);
};

DamageTypeFilter.displayName = "DamageTypeFilter";

export default DamageTypeFilter;
