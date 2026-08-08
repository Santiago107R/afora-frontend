
export interface MateriaResponse {
    total: number;
    pages: number;
    materias: Materia[];
}

export interface Materia {
    id: string;
    name: string;
    clase: any[];
}
