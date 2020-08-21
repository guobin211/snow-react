import React from 'react'

interface MButtonProps {
  type?: 'danger' | 'primary' | 'error'
  size?: 'large' | 'small' | 'middle'
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const MButtonComponent: React.FC<MButtonProps> = (props) => {
  const { type, children, onClick, ...restProps } = props
  return (
    <button className="m-btn" onClick={onClick} {...restProps}>
      {children}
    </button>
  )
}

export default MButtonComponent
