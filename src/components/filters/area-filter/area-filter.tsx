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
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import {
	Distance,
	mapNumberToDistanceDisplayName,
} from "../../../enums/distances";
import { mapNumberToShapeDisplayName, Shape } from "../../../enums/shapes";
import { AgGridFilterProps } from "../../../types/ag-grid-filter-props";
import {
	createDisabledFilterArray,
	numberBasedFilterDoesFilterPass,
	numberBasedFilterHandleCheck,
	numberBasedFilterIsChecked,
	numberBasedFilterIsFilterActive,
	NumberBasedFilterProps,
} from "../../../utility/filters/number-based-filter";

import "./area-filter.scss";

type AreaFilterSetModel = {
	value?: {
		selectedDistances: number[];
		selectedShapes: number[];
	};
};

const distanceFilterDisabledArray = [
	-1, 1, 5, 10, 15, 20, 30, 40, 50, 60, 100, 200, 2500, 5280, 26400, 40000,
];
const shapeFilterDisabledArray = createDisabledFilterArray(6);

const AreaFilter = forwardRef((props: AgGridFilterProps, ref): ReactElement => {
	const [selectedDistances, setSelectedDistances] = useState<number[]>(
		distanceFilterDisabledArray,
	);
	const [selectedShapes, setSelectedShapes] = useState<number[]>(
		shapeFilterDisabledArray,
	);
	const [showOverlay, setShowOverlay] = useState<boolean>(false);
	const rollbar = useRollbar();

	useEffect(() => {
		props.filterChangedCallback();
	}, [selectedDistances, selectedShapes]);

	const handleDistanceCheck: ChangeEventHandler<HTMLInputElement> =
		useCallback(
			(
				e: React.BaseSyntheticEvent<object, unknown, HTMLInputElement>,
			): void => {
				const distance = e.target.getAttribute("data-distance");

				if (!distance) {
					rollbar.warning("distance was null", e);
					return;
				}

				numberBasedFilterHandleCheck(
					selectedDistances,
					setSelectedDistances,
					distance,
				);
			},
			[selectedDistances],
		);

	const selectAllDistances = useCallback(
		() => setSelectedDistances(distanceFilterDisabledArray),
		[],
	);

	const selectNoDistances = useCallback(() => setSelectedDistances([]), []);

	const handleShapeCheck: ChangeEventHandler<HTMLInputElement> = useCallback(
		(
			e: React.BaseSyntheticEvent<object, unknown, HTMLInputElement>,
		): void => {
			const shape = e.target.getAttribute("data-shape");

			if (!shape) {
				rollbar.warning("shape was null", e);
				return;
			}

			numberBasedFilterHandleCheck(
				selectedShapes,
				setSelectedShapes,
				shape,
			);
		},
		[selectedShapes],
	);

	const selectAllShapes = useCallback(
		() => setSelectedShapes(shapeFilterDisabledArray),
		[],
	);

	const selectNoShapes = useCallback(() => setSelectedShapes([]), []);

	const isDistanceChecked = (x: Distance): boolean | undefined =>
		numberBasedFilterIsChecked(selectedDistances, x);

	const isShapeChecked = (x: Shape): boolean | undefined =>
		numberBasedFilterIsChecked(selectedShapes, x);

	const isUnknownDisabled = (): boolean => {
		if (selectedShapes.length !== shapeFilterDisabledArray.length) {
			if (isDistanceChecked(Distance.Unknown))
				numberBasedFilterHandleCheck(
					selectedDistances,
					setSelectedDistances,
					Distance.Unknown.toString(),
				);
			return true;
		}
		return false;
	};

	const onOverlayToggle = useCallback((nextShow: boolean): void => {
		if (isUnknownDisabled() && nextShow) {
			setShowOverlay(true);
		} else setShowOverlay(false);
	}, []);

	useImperativeHandle(ref, () => {
		const doesFilterPass = (props: NumberBasedFilterProps) => {
			if (
				props?.data?.area?.distance === Distance.Unknown &&
				isDistanceChecked(Distance.Unknown) &&
				selectedShapes.length === shapeFilterDisabledArray.length
			)
				return true;

			const distanceResult = numberBasedFilterDoesFilterPass(
				props?.data?.area?.distance,
				selectedDistances,
			);
			const shapeResult = numberBasedFilterDoesFilterPass(
				props?.data?.area?.shape,
				selectedShapes,
			);

			return distanceResult && shapeResult;
		};

		const isFilterActive = () => {
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
		};

		const getModel = () => {
			if (!isFilterActive()) {
				return null;
			}

			return { value: { selectedDistances, selectedShapes } };
		};

		const setModel = (model: AreaFilterSetModel) => {
			setSelectedDistances(model?.value?.selectedDistances ?? []);
			setSelectedShapes(model?.value?.selectedShapes ?? []);
		};

		return {
			doesFilterPass,
			isFilterActive,
			getModel,
			setModel,
		};
	});

	return (
		<div className="area-filter">
			<div className="distances">
				<OverlayTrigger
					onToggle={onOverlayToggle}
					show={showOverlay}
					placement="left"
					overlay={
						<Tooltip>
							{`${mapNumberToDistanceDisplayName(
								Distance.Unknown,
							)} is disabled when shape filter is active. Select all shapes to re-enable this filter option.`}
						</Tooltip>
					}
				>
					<div>
						<Form.Check
							type={"checkbox"}
							onChange={handleDistanceCheck}
							label={mapNumberToDistanceDisplayName(
								Distance.Unknown,
							)}
							checked={isDistanceChecked(Distance.Unknown)}
							disabled={isUnknownDisabled()}
							data-distance={Distance.Unknown}
						/>
					</div>
				</OverlayTrigger>
				<Form.Check
					type={"checkbox"}
					onChange={handleDistanceCheck}
					label={mapNumberToDistanceDisplayName(Distance.One)}
					checked={isDistanceChecked(Distance.One)}
					data-distance={Distance.One}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleDistanceCheck}
					label={mapNumberToDistanceDisplayName(Distance.Five)}
					checked={isDistanceChecked(Distance.Five)}
					data-distance={Distance.Five}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleDistanceCheck}
					label={mapNumberToDistanceDisplayName(Distance.Ten)}
					checked={isDistanceChecked(Distance.Ten)}
					data-distance={Distance.Ten}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleDistanceCheck}
					label={mapNumberToDistanceDisplayName(Distance.Fifteen)}
					checked={isDistanceChecked(Distance.Fifteen)}
					data-distance={Distance.Fifteen}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleDistanceCheck}
					label={mapNumberToDistanceDisplayName(Distance.Twenty)}
					checked={isDistanceChecked(Distance.Twenty)}
					data-distance={Distance.Twenty}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleDistanceCheck}
					label={mapNumberToDistanceDisplayName(Distance.Thirty)}
					checked={isDistanceChecked(Distance.Thirty)}
					data-distance={Distance.Thirty}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleDistanceCheck}
					label={mapNumberToDistanceDisplayName(Distance.Forty)}
					checked={isDistanceChecked(Distance.Forty)}
					data-distance={Distance.Forty}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleDistanceCheck}
					label={mapNumberToDistanceDisplayName(Distance.Fifty)}
					checked={isDistanceChecked(Distance.Fifty)}
					data-distance={Distance.Fifty}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleDistanceCheck}
					label={mapNumberToDistanceDisplayName(Distance.Sixty)}
					checked={isDistanceChecked(Distance.Sixty)}
					data-distance={Distance.Sixty}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleDistanceCheck}
					label={mapNumberToDistanceDisplayName(Distance.OneHundred)}
					checked={isDistanceChecked(Distance.OneHundred)}
					data-distance={Distance.OneHundred}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleDistanceCheck}
					label={mapNumberToDistanceDisplayName(Distance.TwoHundred)}
					checked={isDistanceChecked(Distance.TwoHundred)}
					data-distance={Distance.TwoHundred}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleDistanceCheck}
					label={mapNumberToDistanceDisplayName(
						Distance.TwoThousandFiveHundred,
					)}
					checked={isDistanceChecked(Distance.TwoThousandFiveHundred)}
					data-distance={Distance.TwoThousandFiveHundred}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleDistanceCheck}
					label={mapNumberToDistanceDisplayName(Distance.OneMile)}
					checked={isDistanceChecked(Distance.OneMile)}
					data-distance={Distance.OneMile}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleDistanceCheck}
					label={mapNumberToDistanceDisplayName(Distance.FiveMiles)}
					checked={isDistanceChecked(Distance.FiveMiles)}
					data-distance={Distance.FiveMiles}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleDistanceCheck}
					label={mapNumberToDistanceDisplayName(
						Distance.FortyThousand,
					)}
					checked={isDistanceChecked(Distance.FortyThousand)}
					data-distance={Distance.FortyThousand}
				/>
				<Button
					variant="outline-primary"
					className="all-button"
					onClick={selectAllDistances}
				>
					All
				</Button>
				<Button
					variant="outline-primary"
					className="first-none-button"
					onClick={selectNoDistances}
				>
					None
				</Button>
			</div>
			<div className="shapes">
				<Form.Check
					type={"checkbox"}
					onChange={handleShapeCheck}
					label={mapNumberToShapeDisplayName(Shape.Cube)}
					checked={isShapeChecked(Shape.Cube)}
					data-shape={Shape.Cube}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleShapeCheck}
					label={mapNumberToShapeDisplayName(Shape.Square)}
					checked={isShapeChecked(Shape.Square)}
					data-shape={Shape.Square}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleShapeCheck}
					label={mapNumberToShapeDisplayName(Shape.Sphere)}
					checked={isShapeChecked(Shape.Sphere)}
					data-shape={Shape.Sphere}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleShapeCheck}
					label={mapNumberToShapeDisplayName(Shape.Cylinder)}
					checked={isShapeChecked(Shape.Cylinder)}
					data-shape={Shape.Cylinder}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleShapeCheck}
					label={mapNumberToShapeDisplayName(Shape.Cone)}
					checked={isShapeChecked(Shape.Cone)}
					data-shape={Shape.Cone}
				/>
				<Form.Check
					type={"checkbox"}
					onChange={handleShapeCheck}
					label={mapNumberToShapeDisplayName(Shape.Line)}
					checked={isShapeChecked(Shape.Line)}
					data-shape={Shape.Line}
				/>
				<Button
					className="all-button"
					variant="outline-primary"
					onClick={selectAllShapes}
				>
					All
				</Button>
				<Button variant="outline-primary" onClick={selectNoShapes}>
					None
				</Button>
			</div>
		</div>
	);
});

AreaFilter.displayName = "AreaFilter";

export default AreaFilter;
