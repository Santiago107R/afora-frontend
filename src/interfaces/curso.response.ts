
export interface CursoResponse {
    total: number;
    pages: number;
    cursos: Curso[];
}

export interface Curso {
    id: string;
    name: string;
    shift: string;
    numberOfStudents: number;
    clase: any[];
}
