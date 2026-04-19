import axios from 'axios';
import { ApiConfig } from "../../api.config";
import type { LibroResponse } from './LibroResponse';
import SecureLS from 'secure-ls';

const API = new ApiConfig();

export const LibroService = {
  getAll: async (): Promise<LibroResponse[]> => {

  const ls = new SecureLS();
  const details = JSON.parse(ls.get("details"));

    const response = await axios.get<LibroResponse[]>(API.allLibri, {
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + details.token,
        }
    });
    return response.data;
  }
};