
export interface EstadoResponse {
    total: number;
    pages: number;
    estados: Estado[];
}

export interface Estado {
    id: number;
    name: string;
}
