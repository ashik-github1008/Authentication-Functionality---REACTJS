// Write your JS code here
import Cookies from 'js-cookie'
import { Redirect } from "react-router-dom";
import './index.css'

const Login = props => {
  const onSubmitSuccess = jwtTkoken => {
    const {history} = props

    Cookies.set('jwt_token', jwtTkoken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  const onClickLoginBtn = async () => {
    const username = 'rahul'
    const password = 'rahul@2021'
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      onSubmitSuccess(data.jwt_token)
    }
  }

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  } else {
    return (
      <div className="app-container">
        <div className="main-container">
          <h1 className="pls-login">Please Login</h1>
          <button onClick={onClickLoginBtn}>Login with Sample Creds</button>
        </div>
      </div>
    )
  }
}

export default Login
