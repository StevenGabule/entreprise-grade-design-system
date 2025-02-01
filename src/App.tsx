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
import { AspectRatio, StyledImage } from './components/atoms/AspectRatio/AspectRatio'
import { Avatar, AvatarContainerDiv } from './components/atoms/Avatar/Avatar'
import { Badge } from './components/atoms/Badge/Badge'
import { BreadCrumbContainer, Breadcrumb } from './components/molecules/Breadcrumb/Breadcrumb'
import { CalendarContainer, Calendar } from './components/organisms/Calendar/Calendar'
import { Card, CardContainerWrapper } from './components/molecules/Card/Card'
import { Carousel, SlideContent } from './components/molecules/Carousel/Carousel'
import { Chart, ChartContainerWrapper, sampleData } from './components/organisms/Chart/Chart'

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
  const [selectedCalendar, setSelectedCalendar] = React.useState<Date | undefined>(undefined);
  const [chartType, setChartType] = React.useState<'line' | 'bar' | 'area' | 'pie'>('line');

  const handleToggleTheme = () => {
    setTheme(theme.colors.background === defaultTheme.colors.background ? darkTheme : defaultTheme)
  }

  const handleOpenDialog = () => setDialogOpen(true)
  const handleCloseDialog = () => setDialogOpen(false)

  return (
    <div style={{ width: '100%', background: theme.colors.background, color: theme.colors.text }}>
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
        <div style={{ marginBottom: '10%' }}>
          <h2>Aspect Ratio Component Example</h2>
          <div style={{ width: '50%', height: 300 }}>

            <AspectRatio ratio={16 / 9}>
              <StyledImage src="https://images.unsplash.com/photo-1736452221254-ae8d76bf3c79?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Placeholder" />
            </AspectRatio>
          </div>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dignissimos fuga ratione minus quo vel reiciendis odio, maxime eaque quibusdam dolor quas numquam ut impedit doloremque voluptatem rem, nobis at.</p>
        </div>

        <div>
          <h2>Avatar</h2>
          <AvatarContainerDiv>
            {/* Avatar with an image */}
            <Avatar
              src="https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="User Avatar"
              size="large"
              showStatus
              status="online" />

            {/* Avatar with fallback initials (derived from alt) */}
            <Avatar
              src={'https://plus.unsplash.com/premium_photo-1689629870780-5d0e655383e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
              alt="John Doe"
              size="medium"
              variant="circle"
              showStatus
              status="busy" />

            {/* Avatar with custom size and square variant */}
            <Avatar
              src={'https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
              alt="Jane Doe"
              size={80}
              variant="square"
              fallback="JD"
              showStatus
              status="away"
            />
          </AvatarContainerDiv>
        </div>

        <AvatarContainerDiv>
          <Badge variant="default" size="small">
            Default Small
          </Badge>
          <Badge variant="primary" size="medium">
            Primary Medium
          </Badge>
          <Badge variant="secondary" size="large" pill>
            Secondary Large (Pill)
          </Badge>
          <Badge variant="success" pill>
            Success
          </Badge>
          <Badge variant="warning" size="small">
            Warning Small
          </Badge>
          <Badge variant="error" size="large">
            Error Large
          </Badge>
        </AvatarContainerDiv>

        <div>
          <h2>Breadcrumb</h2>
          <BreadCrumbContainer>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
              <Breadcrumb.Item isCurrentPage>Product Details</Breadcrumb.Item>
            </Breadcrumb>
          </BreadCrumbContainer>
        </div>
        <div>
          <h2>Calendar</h2>
          <CalendarContainer>
            <Calendar
              // @ts-ignore
              mode="single" // Supports "single", "multiple", or "range" modes
              selected={selectedCalendar}
              onSelect={setSelectedCalendar}
            />
            {selectedCalendar && <p>selectedCalendar Date: {selectedCalendar.toLocaleDateString()}</p>}
          </CalendarContainer>
        </div>
        <div style={{ width: '30%' }}>
          <h2>Card</h2>
          <CardContainerWrapper>
            <Card>
              <Card.Header>
                Card Title
              </Card.Header>
              <Card.Content>
                <p>This is the main content of the card. It can include text, images, or any other React elements.</p>
              </Card.Content>
              <Card.Footer>
                <Button variant="primary">Action</Button>
              </Card.Footer>
            </Card>
          </CardContainerWrapper>
        </div>
        <div style={{ width: '30%' }}>
          <h2>Carousel</h2>
          <div>
            <Carousel loop>
              <SlideContent>Slide 1</SlideContent>
              <SlideContent>Slide 2</SlideContent>
              <SlideContent>Slide 3</SlideContent>
            </Carousel>
          </div>
        </div>

        <ChartContainerWrapper>
          <div style={{ marginBottom: '1rem' }}>
            <button onClick={() => setChartType('line')}>Line</button>
            <button onClick={() => setChartType('bar')}>Bar</button>
            <button onClick={() => setChartType('area')}>Area</button>
            <button onClick={() => setChartType('pie')}>Pie</button>
          </div>
          <Chart
            type={chartType}
            data={sampleData}
            xKey="date"
            yKeys={['sales', 'profit']}
            colors={['#8884d8', '#82ca9d']}
          />
        </ChartContainerWrapper>
      </Suspense>
    </div>
  )
}

export default App
