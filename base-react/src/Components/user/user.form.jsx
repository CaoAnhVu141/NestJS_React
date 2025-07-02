import { Button, Input, notification } from "antd";
import { useState } from "react";
import { CreateUserAPI } from "../../services/api.service";


const UserForm = () => {
    const [fullName,setFullName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [age,setAge] = useState();
    const [gender,setGender] = useState();
    console.log("check full name: ",email);

    const handleClickBtn = async () => {

       const response = await CreateUserAPI(fullName,email,password,age,gender);
       if(response.data){
            notification.success({
                message: "Create user",
                description: "Tạo mới user thành công",
            });
       }
    }

    return (
        <div className="user-form" style={{ display: "flex", gap: "10px",marginTop: "10px", justifyContent: "center" }}>
                <div>
                    <span>Họ tên</span>
                    <Input placeholder="Họ tên"
                    value={fullName} onChange={(event) => {setFullName(event.target.value)}}/>
                </div>
                <div>
                    <span>Email</span>
                    <Input placeholder="Email"
                    value={email} onChange={(event) => {setEmail(event.target.value)}}/>
                </div>
                <div>
                    <span>Mật khẩu</span>
                    <Input.Password placeholder="Mật khẩu"
                    value={password} onChange={(event) => {setPassword(event.target.value)}}/>
                </div>
                <div>
                    <span>Tuổi</span>
                    <Input placeholder="Tuổi"
                    value={age} onChange={(event) => {setAge(event.target.value)}}/>
                </div>
                <div>
                    <span>Giới tính</span>
                    <Input placeholder="Giới tính"
                    value={gender} onChange={(event) => {setGender(event.target.value)}}/>
                </div>
                <div>
                    <Button type="dashed" onClick={() => {handleClickBtn()}}>Dashed Button</Button>
                </div>
        </div>
    )
}

export default UserForm;