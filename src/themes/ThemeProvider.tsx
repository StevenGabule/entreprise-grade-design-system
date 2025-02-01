import React from 'react';
import { defaultTheme } from './defaultTheme';

type Theme = typeof defaultTheme;

const ThemeContext = React.createContext<{ theme: Theme, setTheme: (theme: Theme) => void }>({ theme: defaultTheme, setTheme: () => { } })

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [theme, setTheme] = React.useState<Theme>(defaultTheme);

	React.useEffect(() => {
		Object.entries(theme.colors).forEach(([key, value]) => {
			document.documentElement.style.setProperty(`--color-${key}`, value)
		})
		Object.entries(theme.spacing).forEach(([key, value]) => {
			document.documentElement.style.setProperty(`--spacing-${key}`, value)
		})
	}, [theme])

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export const useTheme = () => React.useContext(ThemeContext);

