import Axios from 'axios'

export const axios = Axios.create({
    baseURL:"http://localhost:4000",
    headers:{Auth:"Simple AUTH"},
    timeout:3000,
})