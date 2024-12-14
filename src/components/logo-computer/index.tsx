/**
 * @author Michael Gamlem III
 * @copyright This file is subject to the terms and conditions defined in file 'LICENSE', which is part of the source code for this project.
 * @format
 */

import "./styles.css";

interface LogoComputerProps {
	maxHeight: number;
	maxWidth: number;
}

export const LogoComputer = ({ maxHeight, maxWidth }: LogoComputerProps) => (
	<div style={{ maxHeight, maxWidth }}>
		<svg
			className="logo"
			viewBox="0 0 640 849"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<title>MG3.codes logo</title>
			<path
				d="M330 561.999L542.998 562.937"
				strokeWidth="36"
				strokeLinecap="round"
			/>
			<rect x="97" y="98" width="445" height="367" strokeWidth="34" />
			<path
				d="M160.002 166.841L204.213 167.779"
				strokeWidth="16"
				strokeLinecap="round"
			/>
			<circle cx="123" cy="779" r="18" fill="black" />
			<line
				x1="69"
				y1="831"
				x2="570"
				y2="831"
				strokeWidth="36"
				strokeLinecap="round"
			/>
			<line
				x1="570"
				y1="831"
				x2="570"
				y2="735"
				strokeWidth="36"
				strokeLinecap="round"
			/>
			<line
				x1="69"
				y1="828"
				x2="69"
				y2="732"
				strokeWidth="36"
				strokeLinecap="round"
			/>
			<path
				d="M574 18H66C39.4903 18 18 39.4903 18 66V680C18 706.51 39.4904 728 66 728H574C600.51 728 622 706.51 622 680V66C622 39.4903 600.51 18 574 18Z"
				strokeWidth="36"
			/>
		</svg>
	</div>
);
