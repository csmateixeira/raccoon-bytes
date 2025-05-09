/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                white: "#fff",
                black: "#121212",
                tone0: "#222035",
                tone1: "#373549",
                primary: "#827fe7"
            },
        },
    },
    plugins: [],
}

