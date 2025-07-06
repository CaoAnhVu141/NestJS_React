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
                        <div className="img-avarta">
                                <img src={`${import.meta.env.VITE_BACKEND_URL}/images/default/${dataDetail.avatar}`} width={"430px"} height={"auto"} alt="" />
                        </div>
                        <div>
                            <label htmlFor="btn-Upload" style={{ 
                                display: "block",
                                width: "fit-content",
                                marginTop: "10px",
                                backgroundColor: "orange",
                                borderRadius: "5px",
                                cursor: "pointer",
                                padding: "5px 10px"
                             }}>Upload File</label>
                            <input type="file" hidden id="btn-Upload"/>
                        </div>
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