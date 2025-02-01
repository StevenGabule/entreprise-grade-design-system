import React from 'react'
import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import Button from '../../src/components/atoms/Button/Button'

test('Button is accessible', async () => {
  const { container } = render(<Button>Click Me</Button>)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})