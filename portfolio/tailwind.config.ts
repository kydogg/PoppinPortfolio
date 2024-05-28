import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				mauve: "#DABFFF",
				"tropical-indigo": "#907AD6",
				"ultra-violet": "#4F518C",
				"space-cadet": "2C2A4A",
				"pale-azure": "7FDEFF",
			},
		},
	},
	plugins: [],
};
export default config;
