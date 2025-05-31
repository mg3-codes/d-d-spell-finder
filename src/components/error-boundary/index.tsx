/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import Footer from "../footer";
import Heading from "../heading";

export const ErrorBoundary = () => {
	return (
		<div className="gutter-container">
			<div className="page">
				<Heading />
				<div className="d-flex justify-content-center flex-column align-items-center my-5">
					<h1>Something went wrong :(</h1>
					<p>Please try refreshing the page or come back later.</p>
					<p>
						Consider reporting an{" "}
						<a
							href="https://github.com/mg3-codes/d-d-spell-finder/issues"
							target="_blank"
							rel="noopener noreferrer"
							className="text-decoration-none"
						>
							issue <i className="bi bi-box-arrow-up-right" />
						</a>{" "}
						on GitHub so I can fix it.
					</p>
				</div>
				<Footer />
			</div>
		</div>
	);
};
