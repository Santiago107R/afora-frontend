
import type { Aula } from "./aula.response";

export interface ClaseResponse {
    id: string;
    user: User;
    aulaI: Aula;
    curso: Curso;
    materia: Materia;
    day: string;
    schedule: string;
}

// export interface Aula {
//     id: string;
//     name: string;
//     description: string;
//     capacity: number;
//     state: string;
// }

export interface Curso {
    id: string;
    name: string;
    shift: string;
    numberOfStudents: number;
}

export interface Materia {
    id: string;
    name: string;
}

export interface User {
    id: string;
    name: string;
    roles: string[];
    isActive: boolean;
}
