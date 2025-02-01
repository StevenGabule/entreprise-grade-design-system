import React, { Suspense } from 'react'
import { Button } from './components/atoms/Button/Button'
import { defaultTheme, ThemeType } from './themes/defaultTheme'
import { useTheme } from './themes/CustomThemeProvider'

const darkTheme: ThemeType = {
  ...defaultTheme,
  colors: {
    primary: '#0d6efd',
    secondary: '#6c757d',
    background: '#343a40',
    text: '#f8f9fa',
  }
}

const App: React.FC = () => {
  const {setTheme, theme} = useTheme()

  const handleToggleTheme = () => {
    setTheme(theme.colors.background === defaultTheme.colors.background ? darkTheme : defaultTheme)
  }

  return (
    <div style={{width: '100%', height: '100vh', background: theme.colors.background, color: theme.colors.text}}>
      <h1>Design System</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Button variant={'primary'}>Primary Button</Button>
        <Button variant={'secondary'}>Secondary Button</Button>
        <Button variant={'primary'} onClick={handleToggleTheme}>Toggle Theme</Button>
      </Suspense>
    </div>
  )
}

export default App
