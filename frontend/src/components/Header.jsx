import {FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <Header className='header'>
        <div className='logo'>
            <Link to='/'>Support Desk</Link>
        </div>
        <ul>
            <li>
                <Link to='/login'>
                    <FaSignInAlt />Login
                </Link>
            </li>
            <Link to='/login'>
                    <FaUser />Register
                </Link>
        </ul>
    </Header>
  )
}

export default Header