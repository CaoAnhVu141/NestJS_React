import { Modal } from "antd"
import { Button, Input, notification } from "antd";
import { useEffect, useState } from "react";
import { UpdateUserAPI } from "../../services/api.service";

const UpdateUserModell = (props) => {
    
    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [id, setId] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();

    const {isModelUpdateOpen,setIsModelUpdateOpen,dataUpdate,setDataUpdate, loadAllDataUser} = props;

    useEffect(() => {
        if(dataUpdate){
            setId(dataUpdate._id);
            setFullName(dataUpdate.name);
            setEmail(dataUpdate.email);
            setAge(dataUpdate.age);
            setGender(dataUpdate.gender);
        }
    },[dataUpdate])
    
    const handleClickBtn = () => {
        setIsModelUpdateOpen(true);
    }

    const handleUpdateUser = async () => {
        const response = await UpdateUserAPI(id,fullName, email, age, gender);
        if (response.data) {
            notification.success({
                message: "Update user",
                description: "Cập nhật user thành công",
            });
            clearDataForm();
           await loadAllDataUser()
        }
        else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(response.message),
            });
        }
    }

    const clearDataForm = () => {
        setIsModelUpdateOpen(false);
        setFullName(""), setEmail(""),setId(""),setGender(""),setAge("");
        setDataUpdate(null)
    }
    return (
        <Modal
                title="Model Update"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModelUpdateOpen}
                onOk={() => { handleUpdateUser() }}
                onCancel={() => { setIsModelUpdateOpen(false) }}
                maskClosable={false}
            >
                <div className="data-form-user" style={{ display: "flex", gap: "15px", marginTop: "10px", flexDirection: "column"}}>
                <div>
                    <span>ID</span>
                    <Input placeholder="ID"
                        value={id}
                        disabled />
                </div>
                <div>
                    <span>Họ tên</span>
                    <Input placeholder="Họ tên"
                        value={fullName} onChange={(event) => { setFullName(event.target.value) }} />
                </div>
                <div>
                    <span>Email</span>
                    <Input placeholder="Email"
                        value={email} onChange={(event) => { setEmail(event.target.value) }} />
                </div>
                <div>
                    <span>Tuổi</span>
                    <Input placeholder="Tuổi"
                        value={age} onChange={(event) => { setAge(event.target.value) }} />
                </div>
                <div>
                    <span>Giới tính</span>
                    <Input placeholder="Giới tính"
                        value={gender} onChange={(event) => { setGender(event.target.value) }} />
                </div>
                </div>
            </Modal>
    )
}

export default UpdateUserModell;