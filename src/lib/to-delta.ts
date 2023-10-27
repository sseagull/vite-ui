const fx = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  minimumFractionDigits: 3,
  maximumFractionDigits: 3,
  signDisplay: 'exceptZero',
})

export function toDelta(
  value: string | number | null | undefined
): string | null {
  if (value == null) return null
  const parsed = Number(value)
  return !Number.isNaN(parsed) ? fx.format(parsed) : null
}
