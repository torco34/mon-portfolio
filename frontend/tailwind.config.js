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
                pink: {
                    500: "#F73D93",
                },
                brown: {
                    300: "#D7CCC8",
                    400: "#BCAAA4",
                    500: "#A1887F",
                    600: "#8D6E63",
                    700: "#795548",
                    800: "#6D4C41",
                    900: "#5D4037",
                }
            },
            animation: {
                'fade-in': 'fadeIn 0.8s ease-out',
                'fade-in-up': 'fadeInUp 0.8s ease-out',
                'slide-in-right': 'slideInRight 0.8s ease-out',
                'gradient': 'gradient 3s ease infinite',
                'float': 'float 3s ease-in-out infinite',
                'shimmer': 'shimmer 2s infinite',
                'pulse-slow': 'pulse 3s ease-in-out infinite',
                'bounce-slow': 'bounce 2s infinite',
            },
            backdropBlur: {
                sm: '4px',
                md: '8px',
                lg: '12px',
            },
            textShadow: {
                DEFAULT: '0 2px 4px rgba(0,0,0,0.1)',
                lg: '0 4px 8px rgba(0,0,0,0.15)',
            }
        },
    },
    plugins: [],
};

export default config;
