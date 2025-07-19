import { Button, Input, Modal, notification } from "antd"
import { useState } from "react"
import { createBookAPI } from "../../services/api.service";

const BookForm = (props) => {

    const [name,setName] = useState();
    const [description,setDescription] = useState();
    const [quantity,setQuantity] = useState();
    const [price,setPrice] = useState();

    const {loadAllDataBook} = props;

    const [isModelBook, setIsModelBook] = useState(false);

    const handleClickBtn = () => {
        setIsModelBook(true);
    }
    const clearFormBook = () => {
        setIsModelBook(false);
        setName(""); setDescription(""); setQuantity(""); setPrice("");
    }

    const handleCreateBook = async () => {
        const response = await createBookAPI(name,description,quantity,price);
        if(response.data){
            notification.success({
                message: "Thành công",
                description: "Tạo mới book thành công",
            });
            clearFormBook();
            await loadAllDataBook();
        } 
        else{
            notification.error({
                message: "Thất bại",
                description: "Tạo mới book không thành công",
            });
        }
    }

    return (
        <>
            <div className="user-form">
            <div className="btn-model-create" style={{ marginTop: "10px", marginLeft: "20px", marginBottom: "10px" }}>
                <Button type="dashed" onClick={() => { handleClickBtn() }}>Create Book</Button>
            </div>
            <Modal
                title="Model Create"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModelBook}
                onOk={() => { handleCreateBook() }}
                onCancel={() => { setIsModelBook(false) }}
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
        </div>
        </>
    )
}

export default BookForm;