import { notification, Popconfirm, Space, Table, Tag } from 'antd';
import { DeleteUserAPI, GetAllUserAPI } from '../../services/api.service';
import { useEffect, useState } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import UpdateUserModell from './user.form.update';
import UserDetailData from './detail.user';

const UserTable = (props) => {

    const { userData, loadAllDataUser, current, pageSize, total,setCurrent,setPageSize } = props;

    const [isModelUpdateOpen, setIsModelUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);

    const [isModalDetailOpen, setIsModalDetailOpen] = useState(false);
    const [dataDetail, setDataDetail] = useState(null);

    const handleDeleteUser = async (id) => {
        const response = await DeleteUserAPI(id);
        if (response.data) {
            notification.success({
                message: "Delete user",
                description: "Xoá user thành công",
            });
            await loadAllDataUser();
        }
        else {
            notification.error({
                message: "Error delete user",
                description: JSON.stringify(response.message),
            });
        }
    }

    const columns = [
        {
            title: "STT",
            // render: (_, record, index) => <>{index + 1}</>
            render: (_, record, index) => {
                console.log("check nha: ", index);
                return (
                    <>{index + 1}</>
                )
            }
        },
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => (
                <a href="#" onClick={() => {
                    setDataDetail(record), setIsModalDetailOpen(true)
                }}>{record._id}</a>
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
                    <a><EditOutlined onClick={() => { setDataUpdate(record); setIsModelUpdateOpen(true) }} /></a>
                    <Popconfirm
                        title="Delete the task"
                        description="Bạn có muốn xoá user không nè"
                        onConfirm={() => {
                            handleDeleteUser(record._id)
                        }}
                        // onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                    >
                        <a><DeleteOutlined /></a>
                    </Popconfirm>

                </div>
            ),
        },
    ];

    const onChange = (pagination, filters, sorter, extra) => { 
            console.log("check now: ", pagination,filters,sorter,extra)
     };


    return (
        <>
            <Table columns={columns} dataSource={userData}
                pagination={
                    {
                        current: current,
                        pageSize: pageSize,
                        showSizeChanger: true,
                        total: total,
                        showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }
                    }}
                    onChange={onChange}
            />
            <UpdateUserModell isModelUpdateOpen={isModelUpdateOpen}
                setIsModelUpdateOpen={setIsModelUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                loadAllDataUser={loadAllDataUser} />
            <UserDetailData
                dataDetail={dataDetail}
                setDataDetail={setDataDetail}
                isModalDetailOpen={isModalDetailOpen}
                setIsModalDetailOpen={setIsModalDetailOpen}
                loadAllDataUser={loadAllDataUser} />
        </>
    )
}

export default UserTable;