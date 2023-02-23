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

import {
	mapNumberToDistanceDisplayName,
	Distance,
} from "../../enums/distances";
import { mapNumberToShapeDisplayName, Shape } from "../../enums/shapes";
import { AgGridFilterProps } from "../../types/ag-grid-filter-props";
import {
	createDisabledFilterArray,
	numberBasedFilterDoesFilterPass,
	numberBasedFilterHandleCheck,
	numberBasedFilterIsChecked,
	numberBasedFilterIsFilterActive,
	NumberBasedFilterProps,
} from "../../utility/filters/number-based-filter";

import "./area-filter.css";

type AreaFilterSetModel = {
	value?: {
		selectedDistances: number[];
		selectedShapes: number[];
	};
};

const distanceFilterDisabledArray = [
	-1, 1, 5, 10, 15, 20, 30, 40, 50, 60, 100, 200, 2500, 5280, 26400, 40000,
];
const shapeFilterDisabledArray = createDisabledFilterArray(16);

export default forwardRef(function SchoolFilter(
	props: AgGridFilterProps,
	ref,
): ReactElement {
	const [selectedDistances, setSelectedDistances] = useState<number[]>(
		distanceFilterDisabledArray,
	);
	const [selectedShapes, setSelectedShapes] = useState<number[]>(
		shapeFilterDisabledArray,
	);

	useEffect(() => {
		props.filterChangedCallback();
	}, [selectedDistances, selectedShapes]);

	useImperativeHandle(ref, () => {
		return {
			doesFilterPass(props: NumberBasedFilterProps) {
				return (
					numberBasedFilterDoesFilterPass(
						props?.data?.area?.distance,
						selectedDistances,
					) &&
					numberBasedFilterDoesFilterPass(
						props?.data?.area?.shape,
						selectedShapes,
					)
				);
			},

			isFilterActive() {
				return (
					numberBasedFilterIsFilterActive(
						selectedDistances.length,
						distanceFilterDisabledArray.length,
					) ||
					numberBasedFilterIsFilterActive(
						selectedShapes.length,
						shapeFilterDisabledArray.length,
					)
				);
			},

			getModel() {
				if (!this.isFilterActive()) {
					return null;
				}

				return { value: { selectedDistances, selectedShapes } };
			},

			setModel(model: AreaFilterSetModel) {
				setSelectedDistances(model?.value?.selectedDistances ?? []);
				setSelectedShapes(model?.value?.selectedShapes ?? []);
			},
		};
	});

	const handleDistanceCheck = (x: Distance): void =>
		numberBasedFilterHandleCheck(
			selectedDistances,
			setSelectedDistances,
			x,
		);

	const handleShapeCheck = (x: Shape): void =>
		numberBasedFilterHandleCheck(selectedShapes, setSelectedShapes, x);

	const isDistanceChecked = (x: Distance): boolean | undefined =>
		numberBasedFilterIsChecked(selectedDistances, x);

	const isShapeChecked = (x: Shape): boolean | undefined =>
		numberBasedFilterIsChecked(selectedShapes, x);

	return (
		<div className="area-filter">
			<div className="distances">
				<Form.Check
					type={"checkbox"}
					onChange={() => handleDistanceCheck(Distance.Unknown)}
					label={mapNumberToDistanceDisplayName(Distance.Unknown)}
					checked={isDistanceChecked(Distance.Unknown)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleDistanceCheck(Distance.One)}
					label={mapNumberToDistanceDisplayName(Distance.One)}
					checked={isDistanceChecked(Distance.One)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleDistanceCheck(Distance.Five)}
					label={mapNumberToDistanceDisplayName(Distance.Five)}
					checked={isDistanceChecked(Distance.Five)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleDistanceCheck(Distance.Ten)}
					label={mapNumberToDistanceDisplayName(Distance.Ten)}
					checked={isDistanceChecked(Distance.Ten)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleDistanceCheck(Distance.Fifteen)}
					label={mapNumberToDistanceDisplayName(Distance.Fifteen)}
					checked={isDistanceChecked(Distance.Fifteen)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleDistanceCheck(Distance.Twenty)}
					label={mapNumberToDistanceDisplayName(Distance.Twenty)}
					checked={isDistanceChecked(Distance.Twenty)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleDistanceCheck(Distance.Thirty)}
					label={mapNumberToDistanceDisplayName(Distance.Thirty)}
					checked={isDistanceChecked(Distance.Thirty)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleDistanceCheck(Distance.Forty)}
					label={mapNumberToDistanceDisplayName(Distance.Forty)}
					checked={isDistanceChecked(Distance.Forty)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleDistanceCheck(Distance.Fifty)}
					label={mapNumberToDistanceDisplayName(Distance.Fifty)}
					checked={isDistanceChecked(Distance.Fifty)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleDistanceCheck(Distance.Sixty)}
					label={mapNumberToDistanceDisplayName(Distance.Sixty)}
					checked={isDistanceChecked(Distance.Sixty)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleDistanceCheck(Distance.OneHundred)}
					label={mapNumberToDistanceDisplayName(Distance.OneHundred)}
					checked={isDistanceChecked(Distance.OneHundred)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleDistanceCheck(Distance.TwoHundred)}
					label={mapNumberToDistanceDisplayName(Distance.TwoHundred)}
					checked={isDistanceChecked(Distance.TwoHundred)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() =>
						handleDistanceCheck(Distance.TwoThousandFiveHundred)
					}
					label={mapNumberToDistanceDisplayName(
						Distance.TwoThousandFiveHundred,
					)}
					checked={isDistanceChecked(Distance.TwoThousandFiveHundred)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleDistanceCheck(Distance.OneMile)}
					label={mapNumberToDistanceDisplayName(Distance.OneMile)}
					checked={isDistanceChecked(Distance.OneMile)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleDistanceCheck(Distance.FiveMiles)}
					label={mapNumberToDistanceDisplayName(Distance.FiveMiles)}
					checked={isDistanceChecked(Distance.FiveMiles)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleDistanceCheck(Distance.FortyThousand)}
					label={mapNumberToDistanceDisplayName(
						Distance.FortyThousand,
					)}
					checked={isDistanceChecked(Distance.FortyThousand)}
				/>
				<Button
					variant="outline-primary"
					onClick={() =>
						setSelectedDistances(distanceFilterDisabledArray)
					}
				>
					All
				</Button>
				<Button
					variant="outline-primary"
					onClick={() => setSelectedDistances([])}
				>
					None
				</Button>
			</div>
			<div className="shapes">
				<Form.Check
					type={"checkbox"}
					onChange={() => handleShapeCheck(Shape.Cube)}
					label={mapNumberToShapeDisplayName(Shape.Cube)}
					checked={isShapeChecked(Shape.Cube)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleShapeCheck(Shape.Square)}
					label={mapNumberToShapeDisplayName(Shape.Square)}
					checked={isShapeChecked(Shape.Square)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleShapeCheck(Shape.Sphere)}
					label={mapNumberToShapeDisplayName(Shape.Sphere)}
					checked={isShapeChecked(Shape.Sphere)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleShapeCheck(Shape.Cylinder)}
					label={mapNumberToShapeDisplayName(Shape.Cylinder)}
					checked={isShapeChecked(Shape.Cylinder)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleShapeCheck(Shape.Cone)}
					label={mapNumberToShapeDisplayName(Shape.Cone)}
					checked={isShapeChecked(Shape.Cone)}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={() => handleShapeCheck(Shape.Line)}
					label={mapNumberToShapeDisplayName(Shape.Line)}
					checked={isShapeChecked(Shape.Line)}
				/>
				<Button
					variant="outline-primary"
					onClick={() => setSelectedShapes(shapeFilterDisabledArray)}
				>
					All
				</Button>
				<Button
					variant="outline-primary"
					onClick={() => setSelectedShapes([])}
				>
					None
				</Button>
			</div>
		</div>
	);
});
