import { Button, Drawer, notification } from "antd";
import { useState } from "react";
import { HandleUploadFileAPI, UpdateAvatarUserAPI } from "../../services/api.service";

const UserDetailData = (props) => {

    const { dataDetail, setDataDetail, isModalDetailOpen, setIsModalDetailOpen,loadAllDataUser } = props;

    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState(null)

    const onClose = () => {
        setDataDetail(null);
        setIsModalDetailOpen(false);
    };

    const handleOnChange = (event) => {
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(null);
            setPreview(null);
            return
        }
        const file = event.target.files[0];
        if(file){
            const previewUrl = URL.createObjectURL(file)
            setSelectedFile(file);
            setPreview(previewUrl);
        }
    }

    const handleUpdateAvatar = async () => {
        const response = await HandleUploadFileAPI(selectedFile,"avatar");
        if(response.data){
            const newAvatar = response.data.fileName;
            const resUpdateAvatar = await UpdateAvatarUserAPI(dataDetail._id, newAvatar);
            if(resUpdateAvatar.data){
                setIsModalDetailOpen(false);
                setSelectedFile(null);
                setPreview(null);
                await loadAllDataUser();
                notification.success({
                    message: "Thành công",
                    description: "Cập nhật ảnh thành công nha"    
                })
            }
            else{
                notification.error({
                message: "Lỗi upload avatar",
                description: "Lỗi Upload ảnh avatar"
            });
            }
        }
        else{
            notification.error({
                message: "Lỗi upload avatar",
                description: "Lỗi Upload ảnh avatar"
            });
        }
    }


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
                        <div className="img-upload"> 
                        <div className="img-avarta">
                            <img src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`} width={"300px"} height={"120px"} alt="" />
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
                            <input type="file" hidden id="btn-Upload" onChange={(event) => { handleOnChange(event) }} />
                        </div>
                        </div>
                        { preview && 
                        <>
                        <div className="img-avarta" style={{ padding: "10px 0" }}>
                            <img src={preview} width={"300px"} height={"120px"} alt="" />
                        </div>
                        <Button type="primary" onClick={() => handleUpdateAvatar(dataDetail._id,dataDetail.avatar)}>Save</Button>
                        </>
                        }
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