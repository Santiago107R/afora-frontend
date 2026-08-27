import {
    BookOpen,
    LogOut,
    Home,
    BookPlus,
    UserRoundSearch,
    Presentation,
    UsersRound,
    CalendarPlus,
    CircleArrowLeft,
} from "lucide-react"
import { NavLink } from "react-router"
import { useAuthStore } from "@/auth/store/auth.store"
import { useState } from "react"
import { cn } from "@/lib/utils"

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true)
    const { logout } = useAuthStore()

    const openedSidebarStyle = "w-[250px]"
    const closedSidebarStyle = "w-[66px]" // Ajustado para que el icono encaje perfecto sin desbordar

    const toggleIsSidebarOpen = (e: React.MouseEvent) => {
        e.stopPropagation() // Evita que se dispare el evento del aside
        setIsSidebarOpen(prev => !prev)
    }

    const openSidebar = () => {
        if (!isSidebarOpen) {
            setIsSidebarOpen(true)
        }
    }

    return (
        <aside
            className={cn(
                "h-full flex flex-col p-3 bg-(--color-gray-thirty) transition-all duration-300 ease-in-out overflow-hidden",
                isSidebarOpen ? openedSidebarStyle : closedSidebarStyle
            )}
            onClick={openSidebar}
            style={{ cursor: !isSidebarOpen ? "pointer" : "default" }}
        >
            <div
                className={cn(
                    "flex w-full mb-4 transition-all duration-300",
                    isSidebarOpen ? "justify-end" : "justify-center"
                )}
            >
                <button
                    onClick={toggleIsSidebarOpen}
                    className="p-1 hover:bg-[#d9d9d9] rounded-md transition-colors shrink-0"
                >
                    <CircleArrowLeft
                        size={20}
                        className={cn(
                            "transition-transform duration-300",
                            !isSidebarOpen && "rotate-180"
                        )}
                    />
                </button>
            </div>

            <nav
                className="flex flex-col gap-3"
                onClick={(e) => e.stopPropagation()}
                style={{ cursor: "default" }}
            >
                <NavLink
                    to="/admin"
                    end
                    className={({ isActive }) =>
                        `w-full h-[55px] flex items-center gap-4 px-2 rounded-lg ${isActive
                            ? "bg-[#d9d9d9]"
                            : "hover:bg-[#d9d9d9]"
                        }`
                    }
                >
                    <span className="w-[26px] h-[26px] shrink-0 bg-black rounded-md flex items-center justify-center">
                        <Home size={16} className="text-white" />
                    </span>

                    <span className={cn("text-[14px] whitespace-nowrap", !isSidebarOpen && "hidden")}>
                        Inicio
                    </span>
                </NavLink>

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
                        <UserRoundSearch size={16} className="text-white" />
                    </span>

                    <span className={cn("text-[14px] whitespace-nowrap", !isSidebarOpen && "hidden")}>
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
                        <Presentation size={16} className="text-white" />
                    </span>

                    <span className={cn("text-[14px] whitespace-nowrap", !isSidebarOpen && "hidden")}>
                        Aulas
                    </span>
                </NavLink>

                <button
                    type="button"
                    className="w-full h-[55px] flex items-center gap-4 px-2 rounded-lg hover:bg-[#d9d9d9]"
                >
                    <span className="w-[26px] h-[26px] shrink-0 bg-black rounded-md flex items-center justify-center">
                        <BookPlus size={16} className="text-white" />
                    </span>

                    <span className={cn("text-[14px] whitespace-nowrap", !isSidebarOpen && "hidden")}>
                        Materias
                    </span>
                </button>

                <button
                    type="button"
                    className="w-full h-[55px] flex items-center gap-4 px-2 rounded-lg hover:bg-[#d9d9d9]"
                >
                    <span className="w-[26px] h-[26px] shrink-0 bg-black rounded-md flex items-center justify-center">
                        <UsersRound size={16} className="text-white" />
                    </span>

                    <span className={cn("text-[14px] whitespace-nowrap", !isSidebarOpen && "hidden")}>
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

                    <span className={cn("text-[14px] whitespace-nowrap", !isSidebarOpen && "hidden")}>
                        Clases
                    </span>
                </button>

                <button
                    type="button"
                    className="w-full h-[55px] flex items-center gap-4 px-2 rounded-lg hover:bg-[#d9d9d9]"
                >
                    <span className="w-[26px] h-[26px] shrink-0 bg-black rounded-md flex items-center justify-center">
                        <CalendarPlus size={16} className="text-white" />
                    </span>

                    <span className={cn("text-[14px] whitespace-nowrap", !isSidebarOpen && "hidden")}>
                        Excepciones
                    </span>
                </button>
            </nav>

            <button
                type="button"
                onClick={(e) => {
                    e.stopPropagation();
                    logout();
                }}
                style={{ cursor: "pointer" }}
                className="mt-auto w-full h-[55px] flex items-center gap-4 px-2 rounded-lg bg-red-500/15 hover:bg-red-500/25"
            >
                <span className="w-[26px] h-[26px] shrink-0 rounded-md flex items-center justify-center">
                    <LogOut size={16} className="text-black" />
                </span>

                <span className={cn("text-[14px] whitespace-nowrap text-black", !isSidebarOpen && "hidden")}>
                    Cerrar Sesión
                </span>
            </button>
        </aside>
    )
}

export default Sidebar