import { act, renderHook } from '@testing-library/react'

import { useCounter } from './use-counter'

describe('useCounter', () => {
  test('should increment counter', () => {
    const { result } = renderHook(() => useCounter())
    act(() => {
      result.current.increment()
    })
    expect(result.current.count).toBe(1)
  })
})
