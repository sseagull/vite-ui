import {
  cleanup,
  render as _render,
  type RenderOptions,
} from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})

// Alternative setup: https://testing-library.com/docs/react-testing-library/setup#custom-render
export function render(ui: React.ReactElement, options: RenderOptions = {}) {
  return _render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  })
}

export { screen } from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
