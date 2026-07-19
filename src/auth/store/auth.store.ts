import type { User } from "@/user/types/clase.response";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { loginAction } from "../actions/login.action";
import { checkAuthAction } from "../actions/check-auth.action";
import { logoutAction } from "../actions/logout.action";

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

const AUTH_STORAGE_KEY = 'afora-auth'

const normalizeRoles = (roles?: string[] | null) => (roles ?? []).map((role) => role?.toLowerCase?.() ?? role)
const isAdminRole = (roles?: string[] | null) => normalizeRoles(roles).includes('admin')

export const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
            user: null,
            token: null,
            authStatus: 'checking',

            isAdmin: () => {
                if (get().authStatus !== 'authenticated') return false
                return isAdminRole(get().user?.roles)
            },

            login: async (name: string, password: string) => {
                try {
                    const data = await loginAction(name, password)

                    set({ user: data.user ?? null, authStatus: 'authenticated' })

                    return true
                } catch (error) {
                    set({ user: null, authStatus: 'not-authenticated' })
                    return false
                }
            },

            logout: async () => {
                try {
                    await logoutAction()
                } catch (error) {
                    console.error("Error en el backend al hacer logout:", error)
                } finally {
                    set({ user: null, token: null, authStatus: 'not-authenticated' })
                }
            },

            checkAuthStatus: async () => {
                try {
                    const { user } = await checkAuthAction()

                    if (!user) {
                        set({ user: null, authStatus: 'not-authenticated' })
                        return false
                    }

                    set({
                        user: user,
                        authStatus: 'authenticated',
                    })
                    return true
                } catch (error) {
                    set({
                        user: null,
                        authStatus: 'not-authenticated',
                    })
                    return false
                }
            }
        }),
        {
            name: AUTH_STORAGE_KEY,
            storage: createJSONStorage(() => sessionStorage),
            partialize: (state) => ({
                user: state.user,
                authStatus: state.authStatus,
            }),
            merge: (persistedState, currentState) => {
                const merged = {
                    ...currentState,
                    ...(persistedState as Partial<AuthState>),
                } as AuthState

                if (merged.authStatus !== 'authenticated') {
                    merged.user = null
                }

                return merged
            },
        }
    )
)