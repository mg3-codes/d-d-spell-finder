/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React, {
	forwardRef,
	ReactElement,
	useEffect,
	useImperativeHandle,
	useState,
} from "react";
import { RowNode } from "ag-grid-community";
import Form from "react-bootstrap/Form";
import Spell from "../../types/spell";

import "./source-filter.css";
import { Button } from "react-bootstrap";
import { mapNumberToSourceName, Source } from "../../enums/sources";

type FilterProps = {
	data: Spell;
	node: RowNode;
};

export default forwardRef(function SourceFilter(props: any, ref): ReactElement {
	const filterDisabledArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];

	const [selectedSources, setSelectedSources] =
		useState<number[]>(filterDisabledArray);

	useEffect(() => {
		props.filterChangedCallback();
	}, [selectedSources]);

	useImperativeHandle(ref, () => {
		return {
			doesFilterPass(props: FilterProps) {
				return (
					selectedSources.find(
						(value) =>
							mapNumberToSourceName(value) ===
							props?.data?.source,
					) !== undefined
				);
			},

			isFilterActive() {
				return selectedSources.length !== filterDisabledArray.length;
			},

			getModel() {
				if (!this.isFilterActive()) {
					return null;
				}

				return { value: selectedSources };
			},

			setModel(model: any) {
				setSelectedSources(model?.value ?? []);
			},
		};
	});

	const handleCheck = (x: Source): void => {
		if (selectedSources.find((value) => x === value) === undefined)
			setSelectedSources([...selectedSources, x]);
		else setSelectedSources(selectedSources.filter((value) => value !== x));
	};

	const isChecked = (x: number): boolean | undefined => {
		if (selectedSources.find((value) => value === x) !== undefined)
			return true;

		return false;
	};

	return (
		<div className="source-filter">
			<Form.Check
				type={"checkbox"}
				onChange={() =>
					handleCheck(Source["Acquisitions Incorporated"])
				}
				label={mapNumberToSourceName(
					Source["Acquisitions Incorporated"],
				)}
				checked={isChecked(Source["Acquisitions Incorporated"])}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(Source["Basic Rules"])}
				label={mapNumberToSourceName(Source["Basic Rules"])}
				checked={isChecked(Source["Basic Rules"])}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(Source["Elemental Evil"])}
				label={mapNumberToSourceName(Source["Elemental Evil"])}
				checked={isChecked(Source["Elemental Evil"])}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() =>
					handleCheck(Source["Explorer's Guide to Wildemount"])
				}
				label={mapNumberToSourceName(
					Source["Explorer's Guide to Wildemount"],
				)}
				checked={isChecked(Source["Explorer's Guide to Wildemount"])}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() =>
					handleCheck(Source["Guildmasters' Guide to Ravnica"])
				}
				label={mapNumberToSourceName(
					Source["Guildmasters' Guide to Ravnica"],
				)}
				checked={isChecked(Source["Guildmasters' Guide to Ravnica"])}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() =>
					handleCheck(Source["Lost Laboratory of Kwalish"])
				}
				label={mapNumberToSourceName(
					Source["Lost Laboratory of Kwalish"],
				)}
				checked={isChecked(Source["Lost Laboratory of Kwalish"])}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(Source["Player's Handbook"])}
				label={mapNumberToSourceName(Source["Player's Handbook"])}
				checked={isChecked(Source["Player's Handbook"])}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() =>
					handleCheck(Source["Tasha's Cauldron of Everything"])
				}
				label={mapNumberToSourceName(
					Source["Tasha's Cauldron of Everything"],
				)}
				checked={isChecked(Source["Tasha's Cauldron of Everything"])}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() =>
					handleCheck(Source["Xanathar's Guide to Everything"])
				}
				label={mapNumberToSourceName(
					Source["Xanathar's Guide to Everything"],
				)}
				checked={isChecked(Source["Xanathar's Guide to Everything"])}
			/>
			<Button
				variant="outline-primary"
				onClick={() => setSelectedSources(filterDisabledArray)}
			>
				All
			</Button>
			<Button
				variant="outline-primary"
				onClick={() => setSelectedSources([])}
			>
				None
			</Button>
		</div>
	);
});
