import { Button, Input, Modal, notification } from "antd"
import { useEffect, useState } from "react";
import { updateBookAPI } from "../../services/api.service";

const FormBookUpdate = (props) => {

        const [id,setId] = useState();
        const [name,setName] = useState();
        const [description,setDescription] = useState();
        const [quantity,setQuantity] = useState();
        const [price,setPrice] = useState();
    
    const {dataUpdate,setDataUpdate,isModelUpdate,setIsModelUpdate,loadAllDataBook} = props;

    useEffect(() => {
            if(dataUpdate){
                setId(dataUpdate._id);
                setName(dataUpdate.name);
                setDescription(dataUpdate.description);
                setQuantity(dataUpdate.quantity);
                setPrice(dataUpdate.price);
            }
        },[dataUpdate]);

        const handleClearBook = () => {
            setIsModelUpdate(false);
            setId(""); setName(""); setDescription(""); setQuantity(""); setPrice("");
            setDataUpdate(null);
        }


        const handleUpdateBook = async () => {
            const response = await updateBookAPI(id,name,description,quantity,price);
            if(response.data){
                notification.success({
                    message: "Thành công",
                    description: "Cập nhật thành công"
                });
                handleClearBook();
                await loadAllDataBook();
            }
            else{
                notification.error({
                    message: "Thất bại",
                    description: "Cập nhật không thành công"
                });

            }
        }
    return (
        <>
            <Modal
                title="Model Create"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModelUpdate}
                onOk={() => { handleUpdateBook() }}
                onCancel={() => { setIsModelUpdate(false) }}
                maskClosable={false}
            >
                <div className="data-form-user" style={{ display: "flex", gap: "15px", marginTop: "10px", flexDirection: "column"}}>
                <div>
                    <span>Tên sách</span>
                    <Input placeholder="Tên sách"
                        value={name} onChange={(event) => { setName(event.target.value) }} />
                </div>
                <div>
                    <span>Desciption</span>
                    <Input placeholder="Email"
                        value={description} onChange={(event) => { setDescription(event.target.value) }} />
                </div>
                <div>
                    <span>Số lượng</span>
                    <Input placeholder="Số lượng"
                        value={quantity} onChange={(event) => { setQuantity(event.target.value) }} />
                </div>
                <div>
                    <span>Giá</span>
                    <Input placeholder="Giá"
                        value={price} onChange={(event) => { setPrice(event.target.value) }} />
                </div>
                </div>
            </Modal>
        
        </>
    )

}

export default  FormBookUpdate;