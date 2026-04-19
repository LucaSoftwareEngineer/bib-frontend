import { useState, useEffect } from 'react';
import type { LibroResponse } from '../services/LibroService/LibroResponse';
import { LibroService } from '../services/LibroService/LibroService';

export const useLibri = () => {
  const [libri, setLibri] = useState<LibroResponse[]>([]);
  const [libriFiltrati, setLibriFiltrati] = useState<LibroResponse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isFiltrato, setIsFiltrato] = useState<boolean>(false);

  const caricaDati = async () => {
    try {
      setLoading(true);
      const data = await LibroService.getAll();
      setLibri(data);
      setLibriFiltrati(data);
    } catch (err: any) {
      setError(err.message || 'Errore nel caricamento');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    caricaDati();
  }, []);

  const handlerCercaLibro = (termine: string) => {
    if (!termine) {
      setLibriFiltrati(libri);
      setIsFiltrato(false);
    } else {
      const filtered = libri.filter((l) =>
        l.titolo.toLowerCase().includes(termine.toLowerCase())
      );
      setLibriFiltrati(filtered);
      setIsFiltrato(true);
    }
  };

  const handlerResetFiltro = () => {
    setLibriFiltrati(libri);
    setIsFiltrato(false);
  };

  return { libriFiltrati, loading, error, isFiltrato, handlerCercaLibro, handlerResetFiltro };
};