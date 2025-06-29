
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <ul>
            <li><Link className="active" to="/">Home</Link></li>
            <li><Link to="/user">User</Link></li>
            <li><Link to="/product">Product</Link></li>
        </ul>
    )
}

export default Header;