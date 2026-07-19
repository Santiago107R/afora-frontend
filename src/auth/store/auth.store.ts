import type { User } from "@/user/types/clase.response";
import { create } from "zustand";
import { loginAction } from "../actions/login.action";
import { checkAuthAction } from "../actions/check-auth.action";

type AuthStatus = 'authenticated' | 'not-authenticated' | 'checking'

type AuthState = {
    user: User | null
    token: string | null
    authStatus: AuthStatus

    isAdmin: () => boolean

    login: (name: string, password: string) => Promise<boolean>
    logout: () => void
    checkAuthStatus: () => Promise<boolean>
}

export const useAuthStore = create<AuthState>()((set, get) => ({
    user: null,
    token: null,
    authStatus: "checking",

    isAdmin: () => {
        const roles = get().user?.roles || []
        return roles.includes('admin')
    },

    login: async (name: string, password: string) => {
        try {
            const data = await loginAction(name, password)

            set({ user: data.user, authStatus: 'authenticated' })

            return true
        } catch (error) {
            set({ user: null, authStatus: 'not-authenticated' })
            return false
        }
    },

    logout: () => {
        set({ user: null, authStatus: 'not-authenticated' })
    },

    checkAuthStatus: async () => {
        try {
            const { user } = await checkAuthAction()
            set({
                user: user,
                authStatus: 'authenticated',
            })

            return true
        } catch (error) {
            set({
                user: undefined,
                authStatus: 'not-authenticated',
            })

            return false
        }
    }
}))