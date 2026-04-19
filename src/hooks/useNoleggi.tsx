import { toast } from "react-toastify";
import type { AddNoleggioRequest } from "../services/AddNoleggioService/AddNoleggioDto";
import AddNoleggioService from "../services/AddNoleggioService/AddNoleggioService";
import { useNavigate } from "react-router";

export const useNoleggi = () => {

  const navigate = useNavigate();

  const creaNoleggio = async (request: AddNoleggioRequest) => {
    try {
        const response = await AddNoleggioService(request);
        navigate('/dashboard');
    } catch (error) {
        throw error;
    }
  };

  return { creaNoleggio };
};