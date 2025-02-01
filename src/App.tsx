import { lazy, Suspense } from 'react'

const Button = lazy(() => import('./components/atoms/Button/Button'))

function App() {
  return (
    <div>
      <h1>Design System</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Button variant={'primary'}>Primary Button</Button>
        <Button variant={'secondary'}>Secondary Button</Button>
      </Suspense>
    </div>
  )
}

export default App
