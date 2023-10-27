import { cleanup, render } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})

function providerRenderer(ui: React.ReactElement, options = {}) {
  return render(ui, {
    // add providers here if needed
    wrapper: ({ children }) => {
      return children
    },
    ...options,
  })
}

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
// override render export
// NOTE: vite alias is set up to avoid importing via file path
export { providerRenderer as render }
