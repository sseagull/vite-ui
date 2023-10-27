import { render, screen } from '@/test'

import { Button } from './button'

describe('Button', () => {
  test('renders', () => {
    render(<Button data-testid="btn">Submit</Button>)

    const el = screen.getByTestId('btn')

    expect(el).toBeDefined()
  })
})
