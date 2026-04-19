import axios from "axios";
import { ApiConfig } from "../../api.config";
import type { IRegisterRequest } from "./IRegisterRequest";
import { IRegisterResponse } from "./IRegisterResponse";

const RegisterService = (props:IRegisterRequest) => {

    const API = new ApiConfig();
    return axios.post<IRegisterResponse>(API.register, props);

}

export default RegisterService;