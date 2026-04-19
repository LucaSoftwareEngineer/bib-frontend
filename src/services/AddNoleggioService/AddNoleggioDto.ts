export interface AddNoleggioRequest {
    utenteId: number;
    libroId: number;
    dataNoleggio: string;
    dataRestituzione: string;
}

export interface AddNoleggioResponse {
    noleggioId: number;
}