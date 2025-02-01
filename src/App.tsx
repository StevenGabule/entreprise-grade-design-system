import React, { Suspense } from 'react'
import { Button } from './components/atoms/Button/Button'
import { defaultTheme, ThemeType } from './themes/defaultTheme'
import { useTheme } from './themes/CustomThemeProvider'
import { Accordion } from './components/organisms/Accordion/Accordion'
import { AccordionItem } from './components/organisms/Accordion/AccordionItem'
import { AccordionHeader } from './components/organisms/Accordion/AccordionHeader'
import { AccordionPanel } from './components/organisms/Accordion/AccordionPanel'
import { Alert } from './components/molecules/Alert/Alert'
import { AlertDialog } from './components/organisms/AlertDialog/AlertDialog'

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
  const [dialogOpen, setDialogOpen] = React.useState(false)

  const handleToggleTheme = () => {
    setTheme(theme.colors.background === defaultTheme.colors.background ? darkTheme : defaultTheme)
  }

  const handleOpenDialog = () => setDialogOpen(true)
  const handleCloseDialog = () => setDialogOpen(false)

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

        <div>
          <h2>Alert Component Example</h2>
          <Alert
            variant="success"
            title="Success!"
            message="Your operation was completed successfully."
            dismissible
            // autoDismiss={5000}  // Alert will auto-dismiss after 5 seconds
            onClose={() => console.log('Alert closed')}
          /> <Alert
            variant="error"
            title="Error!"
            message="Something went wrong. Please try again."
            dismissible
          />
          <Alert
            variant="warning"
            message="This is a warning alert without a title."
          />
          <Alert
            variant="info"
            title="FYI"
            message="This is an informational alert."
            dismissible
          />
        </div>
        <div>
          <h2>Alert Dialog Example</h2>
          <Button onClick={handleOpenDialog} variant='primary'>Open Alert Dialog</Button>
          <AlertDialog
            open={dialogOpen}
            title="Attention Required"
            message="This is an important alert dialog. Please read the information carefully before proceeding."
            onClose={handleCloseDialog}
            actions={
              <>
                <Button onClick={handleCloseDialog} variant='ghost'>Cancel</Button>
                <Button onClick={() => alert('Confirmed!')} variant='primary'>Confirm</Button>
              </>
            }
          />
        </div>
      </Suspense>
    </div>
  )
}

export default App
