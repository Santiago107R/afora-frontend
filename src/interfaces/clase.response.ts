
import type { Aula } from "./aula.response";
import type { Curso } from "./curso.response";
import type { Materia } from "./materia.response";
import type { User } from "./user.response";

export interface ClaseResponse {
    id: string;
    user: User;
    aula: Aula;
    curso: Curso;
    materia: Materia;
    day: string;
    startTime: string;
    endTime: string;
}
