/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";
import Spinner from "react-bootstrap/Spinner";

import "./spinner.scss";

const LoadingSpinner = () => {
	return (
		<div className="spinner-container">
			<Spinner variant="primary" />
		</div>
	);
};

export default LoadingSpinner;
