import axios from "@/api/axios";

export const authenticate = () => {
    return axios.get('authentication');
}