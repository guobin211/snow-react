import React, { useState } from 'react'
import Footer, { initFooterItems } from './footer'
import Header from './header'
import type { TabItemProps } from '../../components/m-tab'

const HomePage: React.FC = () => {
  const [footerItems, setFooterItems] = useState(initFooterItems)
  const [currentTab, setCurrentTab] = useState({ isActive: true, title: '推荐' })
  const handleTabChange = (tab: TabItemProps) => {
    setCurrentTab(tab)
  }

  return (
    <div className="home">
      <div className="home_header-sticky">
        <Header onTabChange={handleTabChange} />
      </div>
      <div className="home_scroll">
        <div className="home_scroll-body">
          <div>card</div>
          <div>{currentTab.title}</div>
          <div>infinity scroll</div>
        </div>
      </div>
      <div className="home_footer-fixed">
        <Footer footerItems={footerItems} />
      </div>
    </div>
  )
}

export default HomePage
