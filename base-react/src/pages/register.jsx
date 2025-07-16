import { Button, Col, Form, Input, notification, Row } from "antd";
import { RegisterUserAPI } from "../services/api.service";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const onFinish = async (values) => {
        console.log(values);
        const userData = await RegisterUserAPI(
            values.name,
            values.email,
            values.password
        )
        if (userData.data) {
            notification.success({
                message: "Đăng kí thành công",
                description: "Thành công nha"
            });
            navigate("/login");
        }
        else {
            notification.error({
                message: "Đăng kí không thành công",
                description: "Không thành công nhâ"
            })
        }
    }
    return (
        <>
            <div className="form-register" style={{ margin: "20px" }}>
                <Form
                    form={form}
                    name="basic"
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    layout="vertical"
                    onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off">
                    <Row justify={"center"}>
                        <Col xs={24} md={6}>
                            <Form.Item
                                label="Họ tên"
                                name="name"
                                rules={[{ required: true, message: 'Vui lòng điền họ tên!' },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row justify={"center"}>
                        <Col xs={24} md={6}>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: 'Vui lòng điền email!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row justify={"center"}>
                        <Col xs={24} md={6}>
                            <Form.Item
                                label="Mật khẩu"
                                name="password"
                                rules={[{ required: true, message: 'Vui lòng điền password!' }]}
                            >
                                <Input.Password />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row justify={"center"}>
                        <Col xs={24} md={6}>
                            <div>
                                <Button type="primary" onClick={() => form.submit()}>Đăng kí</Button>
                            </div>
                        </Col>
                    </Row>

                </Form>
            </div>
        </>
    )
}

export default RegisterPage;