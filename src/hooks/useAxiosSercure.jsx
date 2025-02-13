import axios from "axios";

const axiosSercure = axios.create({
baseURL: import.meta.env.VITE_API_URL,
withCredentials: true,

})
const useAxiosSercure = () => {



    return axiosSercure
};

export default useAxiosSercure;