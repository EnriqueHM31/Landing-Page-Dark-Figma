// tailwind.config.cjs
module.exports = {
    content: [
        "./src/**/*.{astro,html,js,jsx,ts,tsx}",
    ],
    theme: {
        extend: { // 👈 Usa "extend" para añadir customizaciones sin sobrescribir lo predeterminado
            // Colores personalizados
            colors: {
                'mi-color': '#3a86ff',
                'oscuro': '#1e1e2d',
            },
            // Fuentes personalizadas
            fontFamily: {
                'sans': ['Inter', 'sans-serif'],
                'mono': ['Fira Code', 'monospace'],
            },
            // Espaciado (padding, margin, etc.)
            spacing: {
                '128': '32rem',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'), // 👈 Plugin para estilos tipográficos
        require('@tailwindcss/forms'),      // 👈 Plugin para estilizar formularios
    ],
};