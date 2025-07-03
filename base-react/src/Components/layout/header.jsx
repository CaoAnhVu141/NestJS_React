
import { Link, NavLink } from 'react-router-dom';
import { AppstoreOutlined, BookOutlined, HomeOutlined, MailOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';

const Header = () => {
        const [current, setCurrent] = useState('');
        const onClick = e => {
            console.log('click ', e);
            setCurrent(e.key);
        };
        const items = [
            {
                label: <Link to={"/"}>Home</Link>,
                key: 'home',
                icon: <HomeOutlined/>,
            },
            {
                label: <Link to={"/user"}>User</Link>,
                key: 'user',
                icon: <UserOutlined/>,
            },
            {
                label: <Link to={"/book"}>Book</Link>,
                key: 'book',
                icon: <BookOutlined/>,
            },
        ];
        return (
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        )
    }
export default Header;

