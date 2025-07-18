/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontSize: {
                base: '1rem',
                sm: '0.875rem',
                lg: '1.125rem',
                xl: '1.25rem',
            },
        },
    },
    plugins: [],
};