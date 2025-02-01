import React, { Suspense } from 'react'
import { Button } from './components/atoms/Button/Button'
import { defaultTheme, ThemeType } from './themes/defaultTheme'
import { useTheme } from './themes/CustomThemeProvider'
import { Accordion } from './components/organisms/Accordion/Accordion'
import { AccordionItem } from './components/organisms/Accordion/AccordonItem'
import { AccordionHeader } from './components/organisms/Accordion/AccordionHeader'
import { AccordionPanel } from './components/organisms/Accordion/AccordionPanel'

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
  const { setTheme, theme } = useTheme()

  const handleToggleTheme = () => {
    setTheme(theme.colors.background === defaultTheme.colors.background ? darkTheme : defaultTheme)
  }

  return (
    <div style={{ width: '100%', height: '100vh', background: theme.colors.background, color: theme.colors.text }}>
      <h1>Design System</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <h2>Buttons Component</h2>
          <Button variant={'primary'}>Primary Button</Button>
          <Button variant={'secondary'}>Secondary Button</Button>
          <Button variant={'outline'}>Outline Button</Button>
          <Button variant={'ghost'}>Ghost Button</Button>
          <Button variant={'primary'} onClick={handleToggleTheme}>Toggle Theme</Button>
        </div>
        <div>
          <h2>Accordion Component</h2>
          <Accordion>
            <AccordionItem id='item1'>
              <AccordionHeader>Accordion Item 1</AccordionHeader>
              <AccordionPanel>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel consequatur nesciunt, ut dolor soluta eaque tempore voluptatem ipsum cupiditate incidunt, magnam, laudantium enim harum! Optio perferendis aperiam ad rem quos.</p>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem id='item2'>
              <AccordionHeader>Accordion Item 2</AccordionHeader>
              <AccordionPanel>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel consequatur nesciunt, ut dolor soluta eaque tempore voluptatem ipsum cupiditate incidunt, magnam, laudantium enim harum! Optio perferendis aperiam ad rem quos.</p>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem id='item3'>
              <AccordionHeader>Accordion Item 3</AccordionHeader>
              <AccordionPanel>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel consequatur nesciunt, ut dolor soluta eaque tempore voluptatem ipsum cupiditate incidunt, magnam, laudantium enim harum! Optio perferendis aperiam ad rem quos.</p>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>

      </Suspense>
    </div>
  )
}

export default App
