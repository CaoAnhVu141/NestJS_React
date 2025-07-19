import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { notification, Popconfirm, Table } from "antd";
import { useState } from "react";
import DataBookDetail from "./detail.book";
import { deleteBookAPI } from "../../services/api.service";
import FormBookUpdate from "./book.form.update";

const BookTable = (props) => {

    const { bookData, current, pageSize, total, setCurrent, setPageSize, loadAllDataBook } = props;

    const [dataBookDetail, setDataBookDetail] = useState(null);
    const [isModelBookDetail, setIsModelBookDetail] = useState(false);

    const [dataUpdate, setDataUpdate] = useState(null);
    const [isModelUpdate, setIsModelUpdate] = useState(false);

    const handleDeleteBook = async (id) => {
        const response = await deleteBookAPI(id);
        if(response.data){
            notification.success({
                message: "Xoá sách thành công",
                description: "Xoá sách thành công",
            });
            await loadAllDataBook();
        }
        else{
            notification.error({
                message: "Lỗi xoá nha",
                description: "Xoá không thành công",
            })
        }
    }

    const onChange = (pagination, filters, sorter, extra) => {
        // thay đổi số phần tử trang
        if (pagination && pagination.current) {
            if (+pagination.current !== +current) {
                setCurrent(+pagination.current) //=> convert string to number
            }
        }
        //thay đổi phần tử pageSize
        if (pagination && pagination.pageSize) {
            if (pagination.pageSize !== pageSize) {
                setPageSize(pagination.pageSize);
            }
        }
    };

    const columns = [
        {
            title: "STT",
            render: (_, record, index) => {
                return (
                    <>{(index + 1) + (current - 1) * pageSize}</>
                )
            }
        },
        {
            title: 'ID',
            dataIndex: '_id',
            render: (_, record) => (
                <a href="#" onClick={() => {
                    setDataBookDetail(record), setIsModelBookDetail(true)
                }}>{record._id}</a>
            )
        }
        , {
            title: 'Tên sách',
            dataIndex: 'name',
            key: '_id',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
        },
        {
            title: 'Số lượng',
            dataIndex: 'quantity',
        },
        {
            title: 'Giá',
            dataIndex: 'price',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: "flex", gap: "10px" }}>
                    <a><EditOutlined onClick={() => { setDataUpdate(record); setIsModelUpdate(true) 
                        console.log("check now");
                    }} /></a>
                    <Popconfirm
                        title="Delete book"
                        description="Bạn có muốn xoá book không nè"
                        onConfirm={() => {
                            handleDeleteBook(record._id)
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


    return (
        <>
            <Table columns={columns} dataSource={bookData}
                pagination={
                    {
                        current: current,
                        pageSize: pageSize,
                        showSizeChanger: false,
                        total: total,
                        showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }
                    }}
                onChange={onChange}
            />
            <FormBookUpdate
                dataUpdate={dataUpdate}
                setDateUpdate= {setDataUpdate}
                isModelUpdate={isModelUpdate}
                setIsModelUpdate={setIsModelUpdate}
                loadAllDataBook={loadAllDataBook}
            />
            <DataBookDetail
                dataBookDetail={dataBookDetail}
                setDataBookDetail={setDataBookDetail}
                isModelBookDetail={isModelBookDetail}
                setIsModelBookDetail={setIsModelBookDetail}
                loadAllDataBook={loadAllDataBook}
            />
        </>

    )

}

export default BookTable;