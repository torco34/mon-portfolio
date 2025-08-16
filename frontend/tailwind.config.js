// tailwind.config.js

const config = {
    content: [
        "../index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#FCD8D4",    // Rosa pastel
                background: "#FDF6F0", // Beige claro
                dark: "#2C2C2C",       // Gris oscuro para contraste
            },
        },
    },
    plugins: [],
};

export default config;
