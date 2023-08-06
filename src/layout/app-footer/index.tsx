import './style.css'
import { navbarLogo } from '../../assets/images/svg'
import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import {
  FACEBOOK_PROFILE,
  INSTAGRAM_PROFILE,
  TWITTER_PROFILE,
} from '../../config/config'

const Index = () => {
  return (
    <footer className="footer">
      <div className="footer__content-box">
        <div className="footer__content-box__logo">{navbarLogo}</div>
        <ul className="footer__content-box__nav">
          <li className="footer__content_box__nav__element">
            <a href="/">About</a>
          </li>
          <li
            style={{ margin: '0 2rem' }}
            className="footer__content_box__nav__element"
          >
            <a href="/">Contact</a>
          </li>
          <li className="footer__content_box__nav__element">
            <a href="/">Projects</a>
          </li>
        </ul>
        <div className="footer__content-box__social">
          <a href={FACEBOOK_PROFILE} target="_blank" rel="noreferrer">
            <Facebook sx={{ fontSize: 70, color: '#3b5998' }} />
          </a>
          <a
            style={{ margin: '0 2rem' }}
            href={TWITTER_PROFILE}
            target="_blank"
            rel="noreferrer"
          >
            <Twitter sx={{ fontSize: 70, color: '#03a9f4' }} />
          </a>
          <a href={INSTAGRAM_PROFILE} target="_blank" rel="noreferrer">
            <Instagram sx={{ fontSize: 70, color: '#ff8e40' }} />
          </a>
        </div>
      </div>
      <div className="footer__copyright-box">
        <p>© 2023 Follio. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Index
