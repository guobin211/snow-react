import React from 'react'

export interface MTabComponentProps {
  tabs: TabItemProps[]
  onClick?: (
    item: TabItemProps,
    index: number,
    ev: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) => void
}

export interface TabItemProps {
  isActive: boolean
  title: string
}

const MTabComponent: React.FC<MTabComponentProps> = (props) => {
  const { tabs, onClick } = props
  return (
    <ul className="tab">
      {tabs.map((item, index) => {
        const cls = item.isActive ? 'tab_item active' : 'tab_item'
        return (
          <li key={index} className={cls} onClick={(ev) => onClick && onClick(item, index, ev)}>
            {item.title}
          </li>
        )
      })}
    </ul>
  )
}

MTabComponent.defaultProps = {
  tabs: [],
}

export default MTabComponent
