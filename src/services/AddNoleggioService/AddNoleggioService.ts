import axios from 'axios';
import { ApiConfig } from "../../api.config";
import type { AddNoleggioRequest, AddNoleggioResponse } from './AddNoleggioDto';
import SecureLS from 'secure-ls';

const AddNoleggioService = (props: AddNoleggioRequest) => {
    const API = new ApiConfig();
    const ls = new SecureLS();
    const details = JSON.parse(ls.get('details'));

    const token = details.token;

    return axios.post<AddNoleggioResponse>(API.addNoleggio, props, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export default AddNoleggioService;