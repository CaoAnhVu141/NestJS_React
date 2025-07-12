import { useEffect, useState } from "react";
import UserForm from "../Components/user/user.form";
import UserTable from "../Components/user/user.table";
import { GetAllUserAPI } from "../services/api.service";

const UserPage = () => {

    const [userData, setUserData] = useState([]);

    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(7);
    const [total, setTotal] = useState(0);

    useEffect(() => {loadAllDataUser()}, [])

    const loadAllDataUser = async () => {
        const response = await GetAllUserAPI(current,pageSize);
        if(response.data){
            setUserData(response.data.result)
            setCurrent(response.data.meta.current);
            setPageSize(response.data.meta.pageSize);
            setTotal(response.data.meta.total);
        }
    }
    return (
        <div>
            <UserForm loadAllDataUser={loadAllDataUser}/>
            <UserTable userData={userData} loadAllDataUser={loadAllDataUser}
            current={current}
            pageSize={pageSize}
            total={total}
            setCurrent={setCurrent}
            setPageSize={setPageSize}/>
        </div>
    )
}

export default UserPage;