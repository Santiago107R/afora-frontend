import {
    UserPlus,
    Bell,
    School,
    GraduationCap,
    BookOpen,
    BriefcaseBusiness,
    LogOut,
} from "lucide-react"
import { NavLink } from "react-router"
import { useAuthStore } from "@/auth/store/auth.store"

const Sidebar = () => {
    const { logout } = useAuthStore()

    return (
        <aside className="w-[250px] h-full flex flex-col p-3">

            <nav className="flex flex-col gap-3">

                <NavLink
                    to="/admin/usuarios"
                    className={({ isActive }) =>
                        `w-full h-[55px] flex items-center gap-4 px-2 rounded-lg ${isActive
                            ? "bg-[#d9d9d9]"
                            : "hover:bg-[#d9d9d9]"
                        }`
                    }
                >
                    <span className="w-[26px] h-[26px] shrink-0 bg-black rounded-md flex items-center justify-center">
                        <UserPlus size={16} className="text-white" />
                    </span>

                    <span className="text-[14px] font-bold whitespace-nowrap">
                        Personal
                    </span>
                </NavLink>

                <NavLink
                    to="/admin/aulas"
                    className={({ isActive }) =>
                        `w-full h-[55px] flex items-center gap-4 px-2 rounded-lg ${isActive
                            ? "bg-[#d9d9d9]"
                            : "hover:bg-[#d9d9d9]"
                        }`
                    }
                >
                    <span className="w-[26px] h-[26px] shrink-0 bg-black rounded-md flex items-center justify-center">
                        <Bell size={16} className="text-white" />
                    </span>

                    <span className="text-[14px] font-bold whitespace-nowrap">
                        Aulas
                    </span>
                </NavLink>

                <button
                    type="button"
                    className="w-full h-[55px] flex items-center gap-4 px-2 rounded-lg hover:bg-[#d9d9d9]"
                >
                    <span className="w-[26px] h-[26px] shrink-0 bg-black rounded-md flex items-center justify-center">
                        <School size={16} className="text-white" />
                    </span>

                    <span className="text-[14px] font-bold whitespace-nowrap">
                        Materias
                    </span>
                </button>

                <button
                    type="button"
                    className="w-full h-[55px] flex items-center gap-4 px-2 rounded-lg hover:bg-[#d9d9d9]"
                >
                    <span className="w-[26px] h-[26px] shrink-0 bg-black rounded-md flex items-center justify-center">
                        <GraduationCap size={16} className="text-white" />
                    </span>

                    <span className="text-[14px] font-bold whitespace-nowrap">
                        Cursos
                    </span>
                </button>

                <button
                    type="button"
                    className="w-full h-[55px] flex items-center gap-4 px-2 rounded-lg hover:bg-[#d9d9d9]"
                >
                    <span className="w-[26px] h-[26px] shrink-0 bg-black rounded-md flex items-center justify-center">
                        <BookOpen size={16} className="text-white" />
                    </span>

                    <span className="text-[14px] font-bold whitespace-nowrap">
                        Clases
                    </span>
                </button>

                <button
                    type="button"
                    className="w-full h-[55px] flex items-center gap-4 px-2 rounded-lg hover:bg-[#d9d9d9]"
                >
                    <span className="w-[26px] h-[26px] shrink-0 bg-black rounded-md flex items-center justify-center">
                        <BriefcaseBusiness size={16} className="text-white" />
                    </span>

                    <span className="text-[14px] font-bold whitespace-nowrap">
                        Excepciones
                    </span>
                </button>

            </nav>

            <button
                type="button"
                onClick={logout}
                className="mt-auto w-full h-[55px] flex items-center gap-4 px-2 rounded-lg bg-red-500/15 hover:bg-red-500/25"
            >
                <span className="w-[26pxgit status
                ] h-[26px] shrink-0 rounded-md flex items-center justify-center">
                    <LogOut size={16} className="text-white" />
                </span>

                <span className="text-[14px] font-bold whitespace-nowrap">
                    cerrar sesión
                </span>
            </button>

        </aside>
    )
}
// console.log("ESTE COMPONENTE SE ESTA EJECUTANDO")
export default Sidebar