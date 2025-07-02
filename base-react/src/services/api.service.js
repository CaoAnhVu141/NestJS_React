
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

export {CreateUserAPI,GetAllUserAPI};