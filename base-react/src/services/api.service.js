
import axios from "./axios.customize";

const CreateUserAPI =  (fullName,email,password,age,gender) => {

    const URL_BACKEND = "/api/v1/users";
        const data = {
            name: fullName, email: email, password: password, age: age, gender: gender
        }   
       return axios.post(URL_BACKEND,data);
}

    const GetAllUserAPI = (current,pageSize) => {
        const URL_BACKEND = `/api/v1/users?current=${current}&pageSize=${pageSize}`;
        return axios.get(URL_BACKEND);
        }
    

    const UpdateUserAPI = (_id,fullName,email,age,gender,avatar) => {
        const URL_BACKEND = `/api/v1/users/${_id}`;
        const data = {
           _id: _id, name: fullName, email: email, age: age, gender: gender, avatar: avatar
        } 
        return axios.patch(URL_BACKEND,data);
    }

    const DeleteUserAPI = (_id) => {
        const URL_BACKEND = `/api/v1/users/${_id}`;
        return axios.delete(URL_BACKEND);
    }

    const HandleUploadFileAPI = (file, folderFile) => {
        const URL_BACKEND = `/api/v1/files/upload`;
        let config = {
            headers: {
                "folder_type": folderFile,
                "Content-Type": "multipart/form-data"
            }
        }
        const data = new FormData();
        data.append("fileUpload", file); 
        return axios.post(URL_BACKEND,data,config);
    }

    const UpdateAvatarUserAPI = (_id,avatar) => {
        const URL_BACKEND = `/api/v1/users/${_id}`;
        const data = {
           _id: _id, avatar: avatar
        } 
        return axios.patch(URL_BACKEND,data);
    }

    const RegisterUserAPI =  (fullName,email,password) => {

    const URL_BACKEND = "/api/v1/auth/register";
        const data = {
            name: fullName, email: email, password: password,
        }   
       return axios.post(URL_BACKEND,data);
}

    const LoginUserAPI =  (email,password) => {

        const URL_BACKEND = "/api/v1/auth/login";
            const data = {
                username: email, password: password, delay: 5000,
            }   
        return axios.post(URL_BACKEND,data);
    }

    const getAccountAPI =  () => {
        const URL_BACKEND = "/api/v1/auth/account"; 
        return axios.get(URL_BACKEND);
    }

    const logoutUserAPI =  () => {

    const URL_BACKEND = "/api/v1/auth/logout";
       return axios.post(URL_BACKEND);
}


const getAllBookAPI = (current,pageSize) => {
        const URL_BACKEND = `/api/v1/books?current=${current}&pageSize=${pageSize}`;
        return axios.get(URL_BACKEND);
        }
    

export {CreateUserAPI,GetAllUserAPI, UpdateUserAPI, DeleteUserAPI,HandleUploadFileAPI,UpdateAvatarUserAPI,RegisterUserAPI,LoginUserAPI,
    getAccountAPI,logoutUserAPI,getAllBookAPI
};