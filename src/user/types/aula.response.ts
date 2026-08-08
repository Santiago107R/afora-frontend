
export interface AulaResponse {
    total: number;
    pages: number;
    aulas: Aula[];
}

export interface Aula {
    id: string;
    name: string;
    description: string;
    squareMeters: number;
    heightInMeters: number;
    classroomType: string;
    deductTeacherSpace: null;
    capacity: number;
    estado: Estado;
    clase: any[];
}

export interface Estado {
    id: number;
    name: string;
}
