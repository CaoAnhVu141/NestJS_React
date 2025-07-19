import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Popconfirm, Table } from "antd";

const BookTable = (props) => {

    const { bookData, current, pageSize, total, setCurrent, setPageSize } = props;

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
            // render: (_, record) => (
            //     <a href="#" onClick={() => {
            //         setDataDetail(record), setIsModalDetailOpen(true)
            //     }}>{record._id}</a>
            // )
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
                    <a><EditOutlined /></a>
                    <Popconfirm
                        title="Delete the task"
                        description="Bạn có muốn xoá user không nè"
                        // onConfirm={() => {
                        //     handleDeleteUser(record._id)
                        // }}
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
    )

}

export default BookTable;