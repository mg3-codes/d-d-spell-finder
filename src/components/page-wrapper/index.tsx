/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import React from "react";

import "./page-wrapper.scss";

export interface IPageWrapperProps {
	children: React.ReactNode;
}

const PageWrapper = ({ children }: IPageWrapperProps): JSX.Element => {
	return (
		<div className="app">
			<div className="gutter-container">{children}</div>
		</div>
	);
};

export default PageWrapper;
