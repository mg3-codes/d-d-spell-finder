import confetti from "canvas-confetti";
import React, { useImperativeHandle } from "react";

export enum ConfettiColor {
	Colorful,
	Red,
}

// biome-ignore lint/suspicious/noEmptyInterface: Need to use this to use handle interface
export interface IConfettiSideCannonsProps {}

export interface IConfettiSideCannonsHandle {
	fireConfetti: (color: ConfettiColor) => void;
}

export const ConfettiSideCannons = React.forwardRef<
	IConfettiSideCannonsHandle,
	IConfettiSideCannonsProps
>((_, ref) => {
	const fireConfetti = (color: ConfettiColor) => {
		const end = Date.now() + 1 * 1000;
		const colorfulColors = [
			"#6736ee",
			"#f6559b",
			"#3aeb7e",
			"#f3e368",
			"#ff6b9d",
			"#00d9ff",
			"#0008ff",
			"#ff1493",
		];

		const redColors = ["#ff0000", "#ff4d4d", "#ff9999", "#b30000"];

		const colors =
			color === ConfettiColor.Colorful ? colorfulColors : redColors;

		const frame = () => {
			if (Date.now() > end) return;

			confetti({
				particleCount: 8,
				angle: 60,
				spread: 80,
				startVelocity: 60,
				origin: { x: 0, y: 0.5 },
				colors: colors,
			});
			confetti({
				particleCount: 8,
				angle: 120,
				spread: 80,
				startVelocity: 60,
				origin: { x: 1, y: 0.5 },
				colors: colors,
			});

			requestAnimationFrame(frame);
		};

		frame();
	};

	useImperativeHandle(ref, () => ({
		fireConfetti,
	}));

	return null;
});
