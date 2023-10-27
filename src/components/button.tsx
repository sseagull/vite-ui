import sx from './button.module.scss'

interface ButtonProps {
  'data-testid'?: string
  children?: React.ReactNode
}

export function Button({ children, ...passThroughProps }: ButtonProps) {
  return (
    <button className={sx.root} {...passThroughProps}>
      <div className={sx.rootContent}>{children}</div>
    </button>
  )
}
