import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CustomThemeProvider } from './themes/CustomThemeProvider.tsx'
import { GlobalStyles } from './styles/GlobalStyles.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomThemeProvider>
      <GlobalStyles />
      <App />
    </CustomThemeProvider>
  </StrictMode>,
)
