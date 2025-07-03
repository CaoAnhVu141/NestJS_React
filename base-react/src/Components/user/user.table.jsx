import { Space, Table, Tag } from 'antd';
import { GetAllUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import UpdateUserModell from './user.form.update';

const UserTable = (props) => {

    const { userData } = props;

    const [isModelUpdateOpen, setIsModelUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => (
                <a href="#">{record._id}</a>
            )
        }
        , {
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
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "10px" }}>
                    <a><EditOutlined onClick={() => {setDataUpdate(record);setIsModelUpdateOpen(true)}} /></a>
                    <a><DeleteOutlined /></a>
                </div>
            ),
        },
    ];

    return (
        <>
            <Table columns={columns} dataSource={userData} />
            <UpdateUserModell isModelUpdateOpen={isModelUpdateOpen}
                               setIsModelUpdateOpen={setIsModelUpdateOpen}
                               dataUpdate={dataUpdate}
                               setDataUpdate={setDataUpdate} />
        </>
    )
}

export default UserTable;