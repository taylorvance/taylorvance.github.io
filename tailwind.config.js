import { createRequire } from "module";
const require = createRequire(import.meta.url);

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				dark: {
					...require("daisyui/src/theming/themes")["dark"],
					neutral: "hsl(213, 18%, 30%)", // original = #2a323c = hsl(213, 18%, 20%)
				},
			},
		],
	},
}
