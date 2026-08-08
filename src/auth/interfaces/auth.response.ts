
import type { User } from "@/interfaces/user.response";


export interface AuthResponse {
    user: User;
    token: string;
}
