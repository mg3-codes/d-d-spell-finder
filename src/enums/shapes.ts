/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

export enum Shape {
	Cube = 0,
	Square = 1,
	Sphere = 2,
	Cylinder = 3,
	Cone = 4,
	Line = 5,
}

export const mapNumberToShape = (x: number): number | undefined => {
	switch (x) {
		case 0:
			return Shape.Cube;
		case 1:
			return Shape.Square;
		case 2:
			return Shape.Sphere;
		case 3:
			return Shape.Cylinder;
		case 4:
			return Shape.Cone;
		case 5:
			return Shape.Line;
	}
};

export const mapNumberToShapeDisplayName = (x: number): string => {
	switch (x) {
		case 0:
			return "Cube";
		case 1:
			return "Square";
		case 2:
			return "Sphere";
		case 3:
			return "Cylinder";
		case 4:
			return "Cone";
		case 5:
			return "Line";
	}

	return "";
};
