import { ReactNode, memo } from 'react'
import './style.css'

type PropsType = {
  color: string
  socialName: string
  socialIcon: ReactNode
  profileLink: string
}

const Index = ({ color, socialName, socialIcon, profileLink }: PropsType) => {
  return (
    <a
      className="tabs-primary__social-view"
      href={profileLink}
      target="_blank"
      rel="noreferrer"
    >
      <div
        style={{ color: `${color}`, border: `3px solid ${color}` }}
        className="tabs-primary__social-view__icon"
      >
        {socialIcon}
      </div>
      <p>{socialName}</p>
    </a>
  )
}

export default memo(Index)
