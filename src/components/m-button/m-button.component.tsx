import React from 'react'
import classNames from 'classnames'

interface MButtonProps {
  type?: 'danger' | 'primary' | 'error'
  size?: 'large' | 'small' | 'middle'
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  className?: string
}

const MButtonComponent: React.FC<MButtonProps> = (props) => {
  const { type = 'primary', children, onClick, className, ...restProps } = props
  const cls = classNames('m-btn', type, className)
  return (
    <button className={cls} onClick={onClick} {...restProps}>
      {children}
    </button>
  )
}

export default MButtonComponent
