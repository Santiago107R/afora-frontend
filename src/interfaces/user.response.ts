import type { ClaseResponse } from "./clase.response";

export interface UserResponse {
    total: number;
    pages: number;
    users: User[];
}

export interface User {
    id: string;
    name: string;
    email: null;
    roles: string[];
    isActive: boolean;
    clase: ClaseResponse[];
}
