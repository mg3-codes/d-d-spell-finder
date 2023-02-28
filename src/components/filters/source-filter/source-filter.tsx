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

import { mapNumberToSourceDisplayName, Source } from "../../../enums/sources";
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

import "./source-filter.scss";

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
				onChange={() => handleCheck(Source.AcquisitionsIncorporated)}
				label={mapNumberToSourceDisplayName(
					Source.AcquisitionsIncorporated,
				)}
				checked={isChecked(Source.AcquisitionsIncorporated)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(Source.BasicRules)}
				label={mapNumberToSourceDisplayName(Source.BasicRules)}
				checked={isChecked(Source.BasicRules)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(Source.ElementalEvil)}
				label={mapNumberToSourceDisplayName(Source.ElementalEvil)}
				checked={isChecked(Source.ElementalEvil)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(Source.ExplorersGuideToWildemount)}
				label={mapNumberToSourceDisplayName(
					Source.ExplorersGuideToWildemount,
				)}
				checked={isChecked(Source.ExplorersGuideToWildemount)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(Source.GuildmastersGuideToRavnica)}
				label={mapNumberToSourceDisplayName(
					Source.GuildmastersGuideToRavnica,
				)}
				checked={isChecked(Source.GuildmastersGuideToRavnica)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(Source.LostLaboratoryOfKwalish)}
				label={mapNumberToSourceDisplayName(
					Source.LostLaboratoryOfKwalish,
				)}
				checked={isChecked(Source.LostLaboratoryOfKwalish)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(Source.PlayersHandbook)}
				label={mapNumberToSourceDisplayName(Source.PlayersHandbook)}
				checked={isChecked(Source.PlayersHandbook)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(Source.TashasCauldronOfEverything)}
				label={mapNumberToSourceDisplayName(
					Source.TashasCauldronOfEverything,
				)}
				checked={isChecked(Source.TashasCauldronOfEverything)}
			/>
			<Form.Check
				type={"checkbox"}
				onChange={() => handleCheck(Source.XanatharsGuideToEverything)}
				label={mapNumberToSourceDisplayName(
					Source.XanatharsGuideToEverything,
				)}
				checked={isChecked(Source.XanatharsGuideToEverything)}
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
