import './style.css'
import { navbarLogo } from '../../assets/images/svg'
import PrimaryButton from '../../components/primary-button'
import { MenuOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'

function Index() {
  /**
   * When the user clicks the menu button, toggle the class 'bs-x' on the menu button, toggle the class
   * 'open' on the content box, and toggle the class 'open' on the primary button.
   */
  const handleOnClick = () => {
    let menu = document.querySelector('#header-menu-btn')
    let contentBox = document.querySelector('.header__content-box')
    let primaryBtn = document.querySelector('.header__btn-primary')
    if (primaryBtn?.classList.contains('open')) {
      primaryBtn.classList.remove('open')
    }
    menu?.classList.toggle('bs-x')
    contentBox?.classList.toggle('open')
    primaryBtn?.classList.toggle('open')
  }

  const handleMenuToggle = () => {
    let navMenu = document.getElementsByClassName('header__content-box')[0]
    let primaryBtn = document.querySelector('.header__btn-primary')
    if (navMenu.classList.contains('open')) {
      navMenu.classList.remove('open')
      primaryBtn?.classList.remove('open')
    }
  }

  return (
    <header className="header">
      <div className="header__logo-box">
        <Link to="/">{navbarLogo}</Link>
      </div>
      <ul className="header__content-box" onClick={handleMenuToggle}>
        <li className="header__content-box__element">
          <Link to="/">Home</Link>
        </li>
        <li className="header__content-box__element">
          <Link to="/about">About</Link>
        </li>
        <li className="header__content-box__element">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="header__content-box__element">
          <a href="#contact-details">Contact</a>
        </li>
      </ul>

      <div className="header__btn-primary">
        <PrimaryButton destination="lets-talk" title="Lets Talk" />
      </div>
      <div id="header-btn-menu" onClick={handleOnClick}>
        <MenuOutlined sx={{ color: '#fff', fontSize: 40 }} />
      </div>
    </header>
  )
}
export default Index
