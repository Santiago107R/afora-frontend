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
        <aside className="w-[220px] shrink-0 h-full bg-[#eeeeee] border-r border-gray-300">
            <nav className="flex flex-col gap-3 p-3">

                
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
                        Crear usuarios
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
                        Crear aulas
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
                        Clases excepción
                    </span>
                </button>

                
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