
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
    

    const UpdateUserAPI = (_id,fullName,email,age,gender) => {
        const URL_BACKEND = `/api/v1/users/${_id}`;
        const data = {
           _id: _id, name: fullName, email: email, age: age, gender: gender
        } 
        return axios.patch(URL_BACKEND,data);
    }

    const DeleteUserAPI = (_id) => {
        const URL_BACKEND = `/api/v1/users/${_id}`;
        return axios.delete(URL_BACKEND);
    }
    

export {CreateUserAPI,GetAllUserAPI, UpdateUserAPI, DeleteUserAPI};