// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
    ],
    theme: {
        extend: {
            colors: {
                'mi-color': '#3a86ff',
                'oscuro': '#1e1e2d',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Fira Code', 'monospace'],
            },
            spacing: {
                '128': '32rem',
            },
        },
    },
    plugins: [],
}
