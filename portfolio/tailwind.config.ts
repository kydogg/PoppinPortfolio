const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			xs: "475px",
			...defaultTheme.screens,
		},
		extend: {
			colors: {
				mauve: "#DABFFF",
				"tropical-indigo": "#907AD6",
				"ultra-violet": "#4F518C",
				"space-cadet": "#2C2A4A",
				"pale-azure": "#7FDEFF",
			},
		},
	},
	plugins: [],
};
