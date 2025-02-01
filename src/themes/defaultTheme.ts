export const defaultTheme = {
    colors: {
        primary: '#0070f3',
        secondary: '#1c1c1e',
        background: '#ffffff',
        text: '#333333',
    },
    spacing: {
        small: '8px',
        medium: '16px',
        large: '24px',
    },
    typography: {
        fonts: {
            primary: "'Open Sans', 'Helvetica Neue', Arial, sans-serif", // or 'Roboto' if using Google Fonts
        },
        fontSizes: {
            small: '0.875rem',
            medium: '1rem',
            large: '1.125rem',
        },
        fontWeights: {
            normal: 400,
            bold: 700,
        },
        lineHeights: {
            normal: 1.5,
            heading: 1.2,
        },
    }
}

export type ThemeType = typeof defaultTheme;