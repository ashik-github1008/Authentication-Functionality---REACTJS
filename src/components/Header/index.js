// Write your JS code here
import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = props => {
  return (
    <ul className="navigation-home-about-container">
      <Link to="/" className="nav-link">
        <li>Home</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
    </ul>
  )
}

export default withRouter(Header)
