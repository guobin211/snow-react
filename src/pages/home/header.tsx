import React, { useState } from 'react'
import { MTab, TabItemProps } from '../../components'

export const initActiveTab = { isActive: true, title: '推荐' }

export const initTabs: TabItemProps[] = [
  initActiveTab,
  { isActive: false, title: '女装' },
  { isActive: false, title: '鞋包' },
  { isActive: false, title: '百货' },
  { isActive: false, title: '食品' },
  { isActive: false, title: '母婴' },
  { isActive: false, title: '男装' },
  { isActive: false, title: '童装' },
  { isActive: false, title: '电器' },
  { isActive: false, title: '手机' },
]

export interface HeaderProps {
  onTabChange: (tab: TabItemProps) => void
}

const Header: React.FC<HeaderProps> = (props) => {
  const [tabs, setTabs] = useState(initTabs)
  const [currentTab, setCurrentTab] = useState(initActiveTab)
  const { onTabChange } = props

  const handleTabClick = (tabItem: TabItemProps) => {
    const newTabs = []
    for (const tab of initTabs) {
      tab.isActive = tabItem.title === tab.title
      newTabs.push(tab)
    }
    setTabs(newTabs)
    if (currentTab.title !== tabItem.title) {
      setCurrentTab(tabItem)
      onTabChange(tabItem)
    }
  }

  return (
    <div className="header">
      <div className="header_search">
        <div className="header_search_input">
          <div className="header_search_input-wrap"></div>
        </div>
      </div>
      <div className="header_tabs">
        <MTab tabs={tabs} onClick={handleTabClick} />
      </div>
    </div>
  )
}

export default Header
