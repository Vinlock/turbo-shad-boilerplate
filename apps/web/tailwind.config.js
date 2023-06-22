const sharedConfig = require("tailwindconfig");

/** @type {import('tailwindcss').Config} */
module.exports = {
	...sharedConfig,
	content: [
		"./src/**/*.{ts,tsx,mdx}",
		"../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
	],
};
