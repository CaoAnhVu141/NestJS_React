import { Button, Checkbox, Form, Input, notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { LoginUserAPI } from "../services/api.service";

const LoginPage = () => {

    const [form] = Form.useForm();
    const navigate = useNavigate()
    const onFinish = async (values) => {
        console.log("check values: ", values);

        const userData = await LoginUserAPI(
            values.email,
            values.password,
        )
        if(userData.data){
            notification.success({
                message: "Login thành công",
                description: "Thành công nha"
            });
            navigate("/user");
        }
        else{
            notification.error({
                message: "Lỗi đăng nhập",
                description: "Không thành công nha"
            })
        }
    }
    return (
        <>
            <div className="form-login" style={{ justifyContent: "center", display: "flex", minHeight: '100vh', alignItems: "center" }}>
                <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="email"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <div className="title" style={{ justifyContent: "space-between", display: "flex" }}>
                        <Form.Item name="remember" valuePropName="checked" label={null}>
                            <Checkbox style={{ maxWidth: 200 }}>Nhớ tôi</Checkbox>
                        </Form.Item>
                        <div className="">
                            <Link to={"/register"}>Đăng kí tại đây</Link>
                        </div>
                    </div>

                    <div className="btn-login" style={{ alignItems: "center", justifyContent: "center" }}>

                        <Form.Item label={null}>
                            <div>
                                <Button type="primary" onClick={() => form.submit()}>Đăng nhập</Button>
                            </div>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default LoginPage;