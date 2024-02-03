import { Link } from "react-router-dom";
import "./Topbar.css";


const Topbar = () => {
     const user=true;
  return (
    
      <div className="top">
        <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/homepage">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">USER DETAILS</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user &&<li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
      
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
     
            </div>
    </div>
      
      
    
  )
}

export default Topbar
