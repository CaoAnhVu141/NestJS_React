import { Space, Table, Tag } from 'antd';
import { GetAllUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';

const UserTable = (props) => {

    const {userData} = props;

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            render: text => <a>{text}</a>,
        }
        ,{
            title: 'Họ tên',
            dataIndex: 'name',
            key: '_id',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Tuổi',
            dataIndex: 'age',
        },
        {
            title: 'Giới tính',
            dataIndex: 'gender',
        },
    ];
    

    return (
        <Table columns={columns} dataSource={userData} />
    )
}

export default UserTable;