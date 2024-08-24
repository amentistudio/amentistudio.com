/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        "abilities-colorsbuff": "var(--abilities-colorsbuff)",
        "abilities-colorsdebuff": "var(--abilities-colorsdebuff)",
        "primary-ui-colorsdark-background": "var(--primary-ui-colorsdark-background)",
        "primary-ui-colorsdirt": "var(--primary-ui-colorsdirt)",
        "primary-ui-colorsiron": "var(--primary-ui-colorsiron)",
        "primary-ui-colorsmud": "var(--primary-ui-colorsmud)",
        "primary-ui-colorssand": "var(--primary-ui-colorssand)",
        "primary-ui-colorssnow": "var(--primary-ui-colorssnow)",
        "primary-ui-texturescharcoal": "var(--primary-ui-texturescharcoal)",
        "primary-ui-texturesvoid": "var(--primary-ui-texturesvoid)",
        systemunfinished: "var(--systemunfinished)",
      },
      fontFamily: {
        arkhip: ['Arkhip', 'sans-serif'],
        cagliostro: ['Cagliostro', 'sans-serif'],
        button: "var(--button-font-family)",
        "main-copy": "var(--main-copy-font-family)",
        "main-headline": "var(--main-headline-font-family)",
        "main-headline-big": "var(--main-headline-big-font-family)",
        notes: "var(--notes-font-family)",
        "sub-headline": "var(--sub-headline-font-family)",
      },
      boxShadow: {
        "damage-glow": "var(--damage-glow)",
        "golden-frame-glow": "var(--golden-frame-glow)",
        "golden-glow": "var(--golden-glow)",
        "health-glow": "var(--health-glow)",
        "light-glow": "var(--light-glow)",
        "material-box": "var(--material-box)",
        notification: "var(--notification)",
        "shadow-glow": "var(--shadow-glow)",
        "time-glow": "var(--time-glow)",
        "web-shade": "var(--web-shade)",
      },
    },
	},
	plugins: [],
}
