import { Modal } from "antd"
import { Button, Input, notification } from "antd";
import { useState } from "react";
import { CreateUserAPI } from "../../services/api.service";

const UpdateUserModell = () => {
    const [isModalOpen, setIsModelOpen] = useState(false);
    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();

    // const {loadAllDataUser} = props;

    const handleClickBtn = () => {
        setIsModelOpen(true);
    }

    const handleCreateUser = async () => {
        const response = await CreateUserAPI(fullName, email, password, age, gender);
        if (response.data) {
            notification.success({
                message: "Create user",
                description: "Tạo mới user thành công",
            });
            clearDataForm();
        //    await loadAllDataUser()
        }
        else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(response.message),
            });
        }
    }

    const clearDataForm = () => {
        setIsModelOpen(false);
        setFullName(""), setEmail(""),setPassword(""),setGender(""),setAge("");
    }
    return (
        <Modal
                title="Model Update"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={() => { handleCreateUser() }}
                onCancel={() => { setIsModelOpen(false) }}
                maskClosable={false}
            >
                <div className="data-form-user" style={{ display: "flex", gap: "15px", marginTop: "10px", flexDirection: "column"}}>
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
                    <span>Mật khẩu</span>
                    <Input.Password placeholder="Mật khẩu"
                        value={password} onChange={(event) => { setPassword(event.target.value) }} />
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