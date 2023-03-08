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

import {
	createDisabledFilterArray,
	numberBasedFilterDoesFilterPass,
	numberBasedFilterHandleCheck,
	numberBasedFilterIsChecked,
	numberBasedFilterIsFilterActive,
	NumberBasedFilterProps,
	NumberBasedFilterSetModel,
} from "../../../utility/filters/number-based-filter";
import { AgGridFilterProps } from "../../../types/ag-grid-filter-props";

import "./level-filter.scss";

const filterDisabledArray = createDisabledFilterArray(10);

const LevelFilter = forwardRef(
	(props: AgGridFilterProps, ref): ReactElement => {
		const [selectedLevels, setSelectedLevels] =
			useState<number[]>(filterDisabledArray);

		useEffect(() => {
			props.filterChangedCallback();
		}, [selectedLevels]);

		useImperativeHandle(ref, () => {
			const doesFilterPass = (props: NumberBasedFilterProps) => {
				return numberBasedFilterDoesFilterPass(
					props?.data?.level,
					selectedLevels,
				);
			};

			const isFilterActive = () => {
				return numberBasedFilterIsFilterActive(
					selectedLevels.length,
					filterDisabledArray.length,
				);
			};

			const getModel = () => {
				if (!isFilterActive()) {
					return null;
				}

				return { value: selectedLevels };
			};

			const setModel = (model: NumberBasedFilterSetModel) => {
				setSelectedLevels(model?.value ?? []);
			};

			return {
				doesFilterPass,
				isFilterActive,
				getModel,
				setModel,
			};
		});

		const selectAllLevels = useCallback(
			() => setSelectedLevels(filterDisabledArray),
			[],
		);

		const selectNoLevels = useCallback(() => setSelectedLevels([]), []);

		const handleCheck = useCallback(
			(e: React.BaseSyntheticEvent): void => {
				const level = parseInt(e.target.getAttribute("data-level"));
				numberBasedFilterHandleCheck(
					selectedLevels,
					setSelectedLevels,
					level.toString(),
				);
			},
			[selectedLevels],
		);

		const isChecked = (x: number): boolean | undefined =>
			numberBasedFilterIsChecked(selectedLevels, x);

		return (
			<div className="level-filter">
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={"0"}
					checked={isChecked(0)}
					data-level={0}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={"1"}
					checked={isChecked(1)}
					data-level={1}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={"2"}
					checked={isChecked(2)}
					data-level={2}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={"3"}
					checked={isChecked(3)}
					data-level={3}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={"4"}
					checked={isChecked(4)}
					data-level={4}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={"5"}
					checked={isChecked(5)}
					data-level={5}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={"6"}
					checked={isChecked(6)}
					data-level={6}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={"7"}
					checked={isChecked(7)}
					data-level={7}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={"8"}
					checked={isChecked(8)}
					data-level={8}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleCheck}
					label={"9"}
					checked={isChecked(9)}
					data-level={9}
				/>
				<Button variant="outline-primary" onClick={selectAllLevels}>
					All
				</Button>
				<Button variant="outline-primary" onClick={selectNoLevels}>
					None
				</Button>
			</div>
		);
	},
);

LevelFilter.displayName = "LevelFilter";

export default LevelFilter;
