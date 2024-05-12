import {Link} from 'react-router-dom'

const Footer = (props) => {
    return (
        <div className="footer">
          <Link to="/">
            <div className="footTab">
              <p>Home</p>
            </div>
          </Link>
    
          <a href="https://github.com/lizjadejohnson" target="_blank" rel="noopener noreferrer">
            <div className="footTab">
              <p>Github</p>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/lizjadejohnson/" target="_blank" rel="noopener noreferrer">
            <div className="footTab">
              <p>LinkedIn</p>
            </div>
          </a>

        </div>
      );
    }

export default Footer


