import { toDelta } from './to-delta'

describe('toDelta', () => {
  test('handles null/undefined', () => {
    expect(toDelta(null)).toBe(null)
    expect(toDelta(undefined)).toBe(null)
  })
  test('handles strings', () => {
    expect(toDelta('99.345')).toBe('+99.345')
    expect(toDelta('-99.345')).toBe('-99.345')
  })
  test('handles numbers', () => {
    expect(toDelta(99.345)).toBe('+99.345')
    expect(toDelta(-99.345)).toBe('-99.345')
  })
  test('rounds to static decimals', () => {
    expect(toDelta(99.34)).toBe('+99.340')
    expect(toDelta(-99.3453)).toBe('-99.345')
  })
})
