/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				'sans': ['Roboto', 'sans-serif'],
				'serif': ['EB Garamond', 'serif'],
			  },
		}
	},

	plugins: []
};

module.exports = config;
