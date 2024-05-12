import {Link} from 'react-router-dom'

const Nav = (props) => {
    return (
        <div className="nav">
          <Link to="/">
            <div className="navTab">
              <p>Bio</p>
            </div>
          </Link>
    
          <Link to="/skills">
            <div className="navTab">
              <p>Skills</p>
            </div>
          </Link>
          <Link to="/employment">
            <div className="navTab">
              <p>Employment</p>
            </div>
          </Link>
          <Link to="/education">
            <div className="navTab">
              <p>Education</p>
            </div>
          </Link>
        </div>
      );
    }

export default Nav


