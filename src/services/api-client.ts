import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'db4cde8162a94da39c08c8a1e9b686f8'
    }
})