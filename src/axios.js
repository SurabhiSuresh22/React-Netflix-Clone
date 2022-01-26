// axios configuration and creating axios instance- custom
// axios is used for

import axios from 'axios'
import {baseUrl} from './Constants/constants'

const instance = axios.create({
    baseURL: baseUrl,
})

export default instance;