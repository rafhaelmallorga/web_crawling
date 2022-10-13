import axios from "axios";

const api = axios.create({
    baseURL: "http://testapp.axreng.com:3000/crawl",
    timeout: 5000
})

export default api