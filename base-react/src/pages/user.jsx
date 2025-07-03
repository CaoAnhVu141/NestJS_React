import { useEffect, useState } from "react";
import UserForm from "../Components/user/user.form";
import UserTable from "../Components/user/user.table";
import { GetAllUserAPI } from "../services/api.service";

const UserPage = () => {

    const [userData, setUserData] = useState([]);

    useEffect(() => {loadAllDataUser()}, [])

    const loadAllDataUser = async () => {
        const response = await GetAllUserAPI();
        setUserData(response.data.result)
    }
    return (
        <div>
            <UserForm loadAllDataUser={loadAllDataUser}/>
            <UserTable userData={userData}/>
        </div>
    )
}

export default UserPage;