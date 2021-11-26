import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import classes from './NavBar.Module.css'

const NavLinks = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/')
  }

  /* const changeTheCss = () => {
    console.log(1)
  } */

  const {isMobile, closeMobileMenu} = props

  const {isHomeRouteMounted, isCartRouteMounted} = props

  const homeClass = isHomeRouteMounted ? classes.li1 : classes.li2
  const cartClass = isCartRouteMounted ? classes.li1 : classes.li2

  return (
    <ul>
      <Link to="/">
        <li onClick={() => isMobile && closeMobileMenu()} className={homeClass}>
          Home
        </li>
      </Link>
      <Link to="/cart">
        <li onClick={() => isMobile && closeMobileMenu()} className={cartClass}>
          Cart
        </li>
      </Link>
      <li onClick={() => isMobile && closeMobileMenu()}>
        <button
          type="button"
          className={classes.LogoutButton}
          onClick={onClickLogout}
        >
          Logout
        </button>
      </li>
    </ul>
  )
}

export default withRouter(NavLinks)
