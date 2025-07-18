import { useContext } from "react";
import { AuthContext } from "../Components/context/auth.context";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";


const PrivateRoute = (props) => {

    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleBackLogin = () => {
        navigate('/login');
    }

    if (userLogin && userLogin._id) {
        return (
            <>
                {props.children}
            </>
        )
    }

    return (
        <Result
            status="403"
            title="403"
            subTitle="Bạn cần thực hiện Login nha."
            extra={<Button type="primary" onClick={() => {handleBackLogin()}}>Đăng nhập nha</Button>}
        />
    )
}

export default PrivateRoute;