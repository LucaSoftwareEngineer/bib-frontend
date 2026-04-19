import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import RegisterService from "../services/RegisterService/RegisterService.ts";

const useRegister = () => {
  const navigate = useNavigate();
  
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dataNascita, setDataNascita] = useState("");
  const [luogoNascita, setLuogoNascita] = useState("");

  const registerHandler = () => {
    let nErr = 0;

    if (nome === "") { toast.warn("Inserisci il nome..."); nErr++; }
    if (cognome === "") { toast.warn("Inserisci il cognome..."); nErr++; }
    if (email === "") { toast.warn("Inserisci l'email..."); nErr++; }
    if (password === "") { toast.warn("Inserisci la password..."); nErr++; }
    if (dataNascita === "") { toast.warn("Inserisci la data di nascita..."); nErr++; }
    if (luogoNascita === "") { toast.warn("Inserisci il luogo di nascita..."); nErr++; }

    if (nErr === 0) {
      RegisterService({ 
        Nome: nome, 
        Cognome: cognome, 
        Email: email, 
        Password: password, 
        dataNascita: dataNascita, 
        luogoNascita: luogoNascita 
      })
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            toast.success("Registrazione completata con successo!");
            setTimeout(() => {
              navigate("/");
            }, 2000);
          }
        })
        .catch(() => {
          toast.error("Errore durante la registrazione, riprova...");
        });
    }
  };

  return { 
    nome, setNome, 
    cognome, setCognome, 
    email, setEmail, 
    password, setPassword, 
    dataNascita, setDataNascita, 
    luogoNascita, setLuogoNascita, 
    registerHandler 
  };
};

export default useRegister;