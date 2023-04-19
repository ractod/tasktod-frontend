/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    important: 'body',
    theme: {
        extend: {
            colors: {
                primary: "#362FD9",
                secondary: "#767b86",
                black: "#23272f",
                gray: "#ecf0f8",
                mute: "#73758e",
                yellow: { dark: "#F2921D", light: "#FFFEA8" },
                green: { dark: "#1F8A70", light: "#BEF0CB" },
                red: { dark: "#DC0000", light: "#F9B5D0"},
                purple: { dark: "#5D3891", light: "#E5D1FA" }
            },
            screens: {
                xs: "0",
                sm: "480px",
                md: "760px",
                lg: "900px",
                xl: "1200px",
                "2xl": "1500px"
            },
            
        }
    },
    plugins: [],
}
  