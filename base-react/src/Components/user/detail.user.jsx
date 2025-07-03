import { Button, Drawer } from "antd";
import { useState } from "react";

const UserDetailData = (props) => {

    const { dataDetail, setDataDetail, isModalDetailOpen, setIsModalDetailOpen } = props;
    const onClose = () => {
        setDataDetail(null);
        setIsModalDetailOpen(false);
    };
    return (
        <>
            <Drawer
                title="Detail"
                closable={{ 'aria-label': 'Close Button' }}
                onClose={onClose}
                open={isModalDetailOpen}
            >
                {
                    dataDetail ? <>
                        <p>ID: {dataDetail._id}</p>
                        <p>Name: {dataDetail.name}</p>
                        <p>Email: {dataDetail.email}</p>
                        <p>Age: {dataDetail.age}</p>
                        <p>Gender: {dataDetail.gender}</p>
                    </>
                        :
                        <>
                            <p>Không có data nào cả</p>
                        </>
                }

            </Drawer>
        </>
    );
}

export default UserDetailData;