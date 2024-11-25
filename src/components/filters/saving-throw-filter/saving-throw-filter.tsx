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

import {
	mapNumberToSavingThrowDisplayName,
	SavingThrow,
} from "../../../enums/saving-throws";
import {
	createDisabledFilterArray,
	numberBasedFilterDoesFilterPass,
	numberBasedFilterHandleCheck,
	numberBasedFilterIsChecked,
	type NumberBasedFilterProps,
} from "../../../utility/filters/number-based-filter";

import "./saving-throw-filter.scss";

const savingThrowFilterDisabledArray = createDisabledFilterArray(7);

const SavingThrowFilter = ({
	onModelChange,
}: CustomFilterProps): ReactElement => {
	const [selectedSavingThrows, setSelectedSavingThrows] = useState<number[]>(
		savingThrowFilterDisabledArray,
	);
	const rollbar = useRollbar();

	useEffect(() => {
		if (selectedSavingThrows.length === savingThrowFilterDisabledArray.length)
			onModelChange(null);
		else onModelChange(selectedSavingThrows);
	}, [selectedSavingThrows]);

	const doesFilterPass = (props: NumberBasedFilterProps) => {
		return numberBasedFilterDoesFilterPass(
			props?.data?.save,
			selectedSavingThrows,
		);
	};

	useGridFilter({ doesFilterPass });

	const selectAllSavingThrows = useCallback(
		() => setSelectedSavingThrows(savingThrowFilterDisabledArray),
		[],
	);

	const selectNoSavingThrows = useCallback(
		() => setSelectedSavingThrows([]),
		[],
	);

	const handleCheck: ChangeEventHandler<HTMLInputElement> = useCallback(
		(e: React.BaseSyntheticEvent<object, unknown, HTMLInputElement>): void => {
			const savingThrow = e.target.getAttribute("data-throw");

			if (!savingThrow) {
				rollbar.warning("saving throw was null", e);
				return;
			}

			numberBasedFilterHandleCheck(
				selectedSavingThrows,
				setSelectedSavingThrows,
				savingThrow,
			);
		},
		[selectedSavingThrows],
	);

	const isChecked = (x: SavingThrow): boolean | undefined =>
		numberBasedFilterIsChecked(selectedSavingThrows, x);

	return (
		<div className="saving-throw-filter">
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToSavingThrowDisplayName(SavingThrow.None)}
				checked={isChecked(SavingThrow.None)}
				data-throw={SavingThrow.None}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToSavingThrowDisplayName(SavingThrow.Charisma)}
				checked={isChecked(SavingThrow.Charisma)}
				data-throw={SavingThrow.Charisma}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToSavingThrowDisplayName(SavingThrow.Constitution)}
				checked={isChecked(SavingThrow.Constitution)}
				data-throw={SavingThrow.Constitution}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToSavingThrowDisplayName(SavingThrow.Dexterity)}
				checked={isChecked(SavingThrow.Dexterity)}
				data-throw={SavingThrow.Dexterity}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToSavingThrowDisplayName(SavingThrow.Intelligence)}
				checked={isChecked(SavingThrow.Intelligence)}
				data-throw={SavingThrow.Intelligence}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToSavingThrowDisplayName(SavingThrow.Strength)}
				checked={isChecked(SavingThrow.Strength)}
				data-throw={SavingThrow.Strength}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={handleCheck}
				label={mapNumberToSavingThrowDisplayName(SavingThrow.Wisdom)}
				checked={isChecked(SavingThrow.Wisdom)}
				data-throw={SavingThrow.Wisdom}
			/>
			<Button
				className="all-button"
				variant="outline-primary"
				onClick={selectAllSavingThrows}
			>
				All
			</Button>
			<Button variant="outline-primary" onClick={selectNoSavingThrows}>
				None
			</Button>
		</div>
	);
};

SavingThrowFilter.displayName = "SavingThrowFilter";

export default SavingThrowFilter;
