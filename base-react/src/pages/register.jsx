import { Button, Form, Input } from "antd";

const RegisterPage = () => {
    const [form] = Form.useForm();
    const onFinish = (values) => {
            console.log("check value: ", values);
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
                    <Form.Item
                        label="Họ tên"
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Mật khẩu"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <div>
                        <Button type="primary" onClick={() => form.submit()}>Đăng kí</Button>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default RegisterPage;