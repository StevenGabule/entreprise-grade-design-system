import React from 'react';
import { defaultTheme, ThemeType } from './defaultTheme'
import {ThemeProvider as StyledThemeProvider} from 'styled-components'

type ThemeContextType = {
	theme: ThemeType;
	setTheme: (theme: ThemeType) => void;
}

const ThemeContext = React.createContext<ThemeContextType>({
	theme: defaultTheme,
	setTheme: () => {}
})

export const useTheme = () => React.useContext(ThemeContext)

export const CustomThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
	const [theme, setTheme] = React.useState<ThemeType>(defaultTheme);
	return (
		<ThemeContext.Provider value={{theme, setTheme}}>
			<StyledThemeProvider theme={theme}>
				{children}
			</StyledThemeProvider>
		</ThemeContext.Provider>
	)
}