/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			borderColor: (theme) => ({
        DEFAULT: theme("colors.gray.200"),
      }),
			colors: {
				low: {
					DEFAULT: "#808080",
					dark: "#dddddd",
				},
				background: {
					DEFAULT: "#ffffff",
					dark: "#01010a"
				},
				text: {
					DEFAULT: "#000000",
					dark: "#ffffff"
				},
			},
		},
	},
	plugins: [],
}
