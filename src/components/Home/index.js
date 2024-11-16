// Write your JS code here
import {Component} from 'react'
import './index.css'
import Header from '../Header/index'
import LogoutButton from '../LogoutButton/index'

class Home extends Component {
  render() {
    return (
      <div className="home-app-container">
        <div className="home-main-container">
          <Header />
          <h1>Home Route</h1>
          <LogoutButton />
        </div>
      </div>
    )
  }
}

export default Home
