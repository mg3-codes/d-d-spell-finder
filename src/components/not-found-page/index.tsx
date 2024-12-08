/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import { Link } from "react-router-dom";

import "./styles.css";

const NotFoundPage = () => {
	return (
		<div className="not-found">
			<h1>404: Not Found</h1>
			<span>
				Try going to the <Link to={"/"}>home page</Link>.
			</span>
		</div>
	);
};

export default NotFoundPage;
