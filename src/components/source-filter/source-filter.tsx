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
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { mapNumberToSourceName, Source } from "../../enums/sources";
import { AgGridFilterProps } from "../../types/ag-grid-filter-props";
import {
	createDisabledFilterArray,
	numberBasedFilterDoesFilterPass,
	numberBasedFilterHandleCheck,
	numberBasedFilterIsChecked,
	numberBasedFilterIsFilterActive,
	NumberBasedFilterProps,
	NumberBasedFilterSetModel,
} from "../shared/number-based-filter/number-based-filter";

import "./source-filter.css";

const filterDisabledArray = createDisabledFilterArray(9);

export default forwardRef(function SourceFilter(
	props: AgGridFilterProps,
	ref,
): ReactElement {
	const [selectedSources, setSelectedSources] =
		useState<number[]>(filterDisabledArray);

	useEffect(() => {
		props.filterChangedCallback();
	}, [selectedSources]);

	useImperativeHandle(ref, () => {
		return {
			doesFilterPass(props: NumberBasedFilterProps) {
				return numberBasedFilterDoesFilterPass(
					props?.data?.source,
					selectedSources,
					mapNumberToSourceName,
				);
			},

			isFilterActive() {
				return numberBasedFilterIsFilterActive(
					selectedSources.length,
					filterDisabledArray.length,
				);
			},

			getModel() {
				if (!this.isFilterActive()) {
					return null;
				}

				return { value: selectedSources };
			},

			setModel(model: NumberBasedFilterSetModel) {
				setSelectedSources(model?.value ?? []);
			},
		};
	});

	const handleCheck = (x: Source): void =>
		numberBasedFilterHandleCheck(selectedSources, setSelectedSources, x);

	const isChecked = (x: number): boolean | undefined =>
		numberBasedFilterIsChecked(selectedSources, x);

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
