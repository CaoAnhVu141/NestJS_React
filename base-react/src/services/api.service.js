
import axios from "./axios.customize";

const CreateUserAPI =  (fullName,email,password,age,gender) => {

    const URL_BACKEND = "/api/v1/users";
        const data = {
            name: fullName, email: email, password: password, age: age, gender: gender
        }   
       return axios.post(URL_BACKEND,data);
}

    const GetAllUserAPI = () => {
        const URL_BACKEND = "/api/v1/users";
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
    

export {CreateUserAPI,GetAllUserAPI, UpdateUserAPI, DeleteUserAPI,HandleUploadFileAPI,UpdateAvatarUserAPI};