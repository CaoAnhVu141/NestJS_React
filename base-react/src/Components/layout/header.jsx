
import { Link, useNavigate } from 'react-router-dom';
import { AlibabaOutlined, BookOutlined, HomeOutlined, LoginOutlined, UserOutlined } from '@ant-design/icons';
import { Menu, notification } from 'antd';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';
import { logoutUserAPI } from '../../services/api.service';

const Header = () => {
    const [current, setCurrent] = useState('');

    const navigate = useNavigate();

    const onClick = e => {
        setCurrent(e.key);
    };

    const { userLogin, setUserLogin } = useContext(AuthContext);

    const handleLogout = async () => {
        const response = await logoutUserAPI();
        if (response.data) {
            localStorage.removeItem("access_token");
            setUserLogin({
                _id: "",
                name: "",
                email: "",
                age: 0,
                gender: "",
                avatar: "",
            })
            notification.success({
                message: "Thành công",
                description: "Đăng xuất thành công"
            })
            navigate("/");
        }
    }



    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={"/user"}>User</Link>,
            key: 'user',
            icon: <UserOutlined />,
        },
        {
            label: <Link to={"/book"}>Book</Link>,
            key: 'book',
            icon: <BookOutlined />,
        },
        ...(!userLogin._id ? [{
            label: <Link to={"/login"}>Đăng nhập</Link>,
            key: 'login',
            icon: <LoginOutlined />,
        }] : []),

        ...(userLogin._id ? [{
            label: `Welcome ${userLogin.name}`,
            key: 'logout',
            icon: <AlibabaOutlined />,
            children: [
                {
                    label: <span onClick={() => { handleLogout() }}>Đăng xuất</span>,
                    key: "logout"
                }
            ]
        }] : []),
    ];
    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
    )
}
export default Header;

