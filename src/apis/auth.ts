import axiosClient from "./axiosClient";

const authApi = {
    login(params: object){
        const url = `/api/users/login`;
        return axiosClient.post(url, params);
    }
}

export default authApi