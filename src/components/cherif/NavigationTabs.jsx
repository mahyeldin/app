import './../navbar/navbar.css' 
import Profileimg from '../../img/profile.jpeg'
import { Link } from 'react-router-dom'
export default function NavigationTabs() {

  return (
    <div className="navbar-com">
      <div className="navbar-com-left">
        <div className='profile'>
          <img
            className="avatar"
            src={Profileimg}
            alt="Profile"
          />
          <Link to='/edit-property'><span className="profile-name">Profiel</span></Link> 
        </div>
        <Link to='/home'><button className="home-button">Home</button></Link> 
    </div>
  </div>
)
}