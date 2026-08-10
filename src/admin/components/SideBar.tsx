import {
    UserPlus,
    Bell,
    School,
    GraduationCap,
    BookOpen,
    BriefcaseBusiness,
} from "lucide-react"
import { NavLink } from "react-router"

const Sidebar = () => {
    return (
        <aside className="w-[173px] h-full bg-[#eeeeee] border-r border-gray-300 shrink-0">
            <nav className="flex flex-col gap-3 p-3">

                {/* USUARIOS */}
                <NavLink
                    to="/admin/usuarios"
                    className={({ isActive }) =>
                        `w-full h-[55px] flex items-center gap-4 px-2 rounded-lg ${
                            isActive
                                ? "bg-[#d9d9d9]"
                                : "hover:bg-[#d9d9d9]"
                        }`
                    }
                >
                    <span className="w-[26px] h-[26px] shrink-0 bg-black rounded-md flex items-center justify-center">
                        <UserPlus size={16} className="text-white" />
                    </span>

                    <span className="text-[14px] font-bold whitespace-nowrap">
                        Crear usuarios
                    </span>
                </NavLink>

                {/* AULAS */}
                <NavLink
                    to="/admin/aulas"
                    className={({ isActive }) =>
                        `w-full h-[55px] flex items-center gap-4 px-2 rounded-lg ${
                            isActive
                                ? "bg-[#d9d9d9]"
                                : "hover:bg-[#d9d9d9]"
                        }`
                    }
                >
                    <span className="w-[26px] h-[26px] shrink-0 bg-black rounded-md flex items-center justify-center">
                        <Bell size={16} className="text-white" />
                    </span>

                    <span className="text-[14px] font-bold whitespace-nowrap">
                        Crear aulas
                    </span>
                </NavLink>

                {/* MATERIAS */}
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

                {/* CURSOS */}
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

                {/* CLASES EXCEPCIÓN */}
                <button
                    type="button"
                    className="w-full h-[55px] flex items-center gap-4 px-2 rounded-lg hover:bg-[#d9d9d9]"
                >
                    <span className="w-[26px] h-[26px] shrink-0 bg-black rounded-md flex items-center justify-center">
                        <BookOpen size={16} className="text-white" />
                    </span>

                    <span className="text-[14px] font-bold whitespace-nowrap">
                        Clases excepción
                    </span>
                </button>

                {/* OTRO */}
                <button
                    type="button"
                    className="w-full h-[55px] flex items-center px-2 rounded-lg hover:bg-[#d9d9d9]"
                >
                    <span className="w-[26px] h-[26px] shrink-0 bg-black rounded-md flex items-center justify-center">
                        <BriefcaseBusiness size={16} className="text-white" />
                    </span>
                </button>

            </nav>
        </aside>
    )
}

export default Sidebar