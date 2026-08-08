import type { Aula } from "./aula.response";
import type { ClaseResponse } from "./clase.response";
import type { User } from "./user.response";

export interface ExcepcionResponse {
    id: string;
    clase: ClaseResponse;
    date: Date;
    user: User;
    aula: Aula;
}
