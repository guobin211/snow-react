import React from 'react'
import classNames from 'classnames'

interface FooterItemProps {
  isActive: boolean
  title: string
  path: string
}

export interface FooterProps {
  footerItems: FooterItemProps[]
}

export const initFooterItems: FooterItemProps[] = [
  { path: '/', isActive: true, title: '首页' },
  { path: '/watch', isActive: false, title: '关注' },
  { path: '/cates', isActive: false, title: '分类' },
  { path: '/message', isActive: false, title: '聊天' },
  { path: '/user', isActive: false, title: '个人中心' },
]

const FooterItem: React.FC<FooterItemProps> = (props) => {
  const cls = classNames('footer_item', {
    active: props.isActive,
  })
  return <div className={cls}>{props.title}</div>
}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <div className="footer">
      {props.footerItems.map((item, index) => (
        <FooterItem key={index} {...item} />
      ))}
    </div>
  )
}

Footer.defaultProps = {
  footerItems: [],
}

export default Footer
