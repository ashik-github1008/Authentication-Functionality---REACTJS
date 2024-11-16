// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookie from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  const onClickLogout = () => {
    Cookie.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div className="logout-btn-container">
      <button className="logout-btn" onClick={onClickLogout} type="button">
        Logout
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)
