// Write your JS code here
import './index.css'
import Header from '../Header/index'
import LogoutButton from '../LogoutButton/index'

const About = props => {
  return (
    <div className="about-app-container">
      <div className="about-main-container">
        <Header />
        <h1>About Route</h1>
        <LogoutButton />
      </div>
    </div>
  )
}

export default About
