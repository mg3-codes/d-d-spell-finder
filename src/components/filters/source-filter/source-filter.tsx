/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { useRollbar } from "@rollbar/react";
import React, {
	ChangeEventHandler,
	forwardRef,
	ReactElement,
	useCallback,
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

const SourceFilter = forwardRef(
	(props: AgGridFilterProps, ref): ReactElement => {
		const [selectedSources, setSelectedSources] =
			useState<number[]>(filterDisabledArray);

		const rollbar = useRollbar();

		useEffect(() => {
			props.filterChangedCallback();
		}, [selectedSources]);

		useImperativeHandle(ref, () => {
			const doesFilterPass = (props: NumberBasedFilterProps) => {
				return numberBasedFilterDoesFilterPass(
					props?.data?.source,
					selectedSources,
				);
			};

			const isFilterActive = () => {
				return numberBasedFilterIsFilterActive(
					selectedSources.length,
					filterDisabledArray.length,
				);
			};

			const getModel = () => {
				if (!isFilterActive()) {
					return null;
				}

				return { value: selectedSources };
			};

			const setModel = (model: NumberBasedFilterSetModel) => {
				setSelectedSources(model?.value ?? []);
			};

			return {
				doesFilterPass,
				isFilterActive,
				getModel,
				setModel,
			};
		});

		const selectAllSources = useCallback(
			() => setSelectedSources(filterDisabledArray),
			[],
		);

		const selectNoSources = useCallback(() => setSelectedSources([]), []);

		const handleCheck: ChangeEventHandler<HTMLInputElement> = useCallback(
			(
				e: React.BaseSyntheticEvent<object, unknown, HTMLInputElement>,
			): void => {
				const source = e.target.getAttribute("data-source");

				if (!source) {
					rollbar.warning("source was null", e);
					return;
				}

				numberBasedFilterHandleCheck(
					selectedSources,
					setSelectedSources,
					source,
				);
			},
			[selectedSources],
		);

		const isChecked = (x: number): boolean | undefined =>
			numberBasedFilterIsChecked(selectedSources, x);

		return (
			<div className="source-filter">
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToSourceDisplayName(
						Source.AcquisitionsIncorporated,
					)}
					checked={isChecked(Source.AcquisitionsIncorporated)}
					data-source={Source.AcquisitionsIncorporated}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToSourceDisplayName(Source.BasicRules)}
					checked={isChecked(Source.BasicRules)}
					data-source={Source.BasicRules}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToSourceDisplayName(Source.ElementalEvil)}
					checked={isChecked(Source.ElementalEvil)}
					data-source={Source.ElementalEvil}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToSourceDisplayName(
						Source.ExplorersGuideToWildemount,
					)}
					checked={isChecked(Source.ExplorersGuideToWildemount)}
					data-source={Source.ExplorersGuideToWildemount}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToSourceDisplayName(
						Source.GuildmastersGuideToRavnica,
					)}
					checked={isChecked(Source.GuildmastersGuideToRavnica)}
					data-source={Source.GuildmastersGuideToRavnica}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToSourceDisplayName(
						Source.LostLaboratoryOfKwalish,
					)}
					checked={isChecked(Source.LostLaboratoryOfKwalish)}
					data-source={Source.LostLaboratoryOfKwalish}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToSourceDisplayName(Source.PlayersHandbook)}
					checked={isChecked(Source.PlayersHandbook)}
					data-source={Source.PlayersHandbook}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToSourceDisplayName(
						Source.TashasCauldronOfEverything,
					)}
					checked={isChecked(Source.TashasCauldronOfEverything)}
					data-source={Source.TashasCauldronOfEverything}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={mapNumberToSourceDisplayName(
						Source.XanatharsGuideToEverything,
					)}
					checked={isChecked(Source.XanatharsGuideToEverything)}
					data-source={Source.XanatharsGuideToEverything}
				/>
				<Button
					className="all-button"
					variant="outline-primary"
					onClick={selectAllSources}
				>
					All
				</Button>
				<Button variant="outline-primary" onClick={selectNoSources}>
					None
				</Button>
			</div>
		);
	},
);

SourceFilter.displayName = "SourceFilter";

export default SourceFilter;
