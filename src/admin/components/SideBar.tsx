import {
    UserPlus,
    Bell,
    School,
    GraduationCap,
    BookOpen,
    BriefcaseBusiness,
} from "lucide-react"

const Sidebar = () => {
    return (
        <aside className="w-[245px] h-full bg-[#eeeeee] border border-gray-300 rounded-r-lg p-2 shrink-0">
            <nav className="flex flex-col gap-3">

                <button className="w-full h-[55px] flex items-center gap-6 rounded-lg px-2 bg-[#d9d9d9]">
                    <span className="w-[36px] h-[36px] bg-black rounded-md flex items-center justify-center">
                        <UserPlus size={22} className="text-white" />
                    </span>

                    <span className="text-[18px] font-bold text-black">
                        Crear usuarios
                    </span>
                </button>

                <button className="w-full h-[55px] flex items-center gap-6 rounded-lg px-2 hover:bg-[#d9d9d9]">
                    <span className="w-[36px] h-[36px] bg-black rounded-md flex items-center justify-center">
                        <Bell size={22} className="text-white" />
                    </span>

                    <span className="text-[18px] font-bold text-black">
                        Crear aulas
                    </span>
                </button>

                <button className="w-full h-[55px] flex items-center gap-6 rounded-lg px-2 hover:bg-[#d9d9d9]">
                    <span className="w-[36px] h-[36px] bg-black rounded-md flex items-center justify-center">
                        <School size={22} className="text-white" />
                    </span>

                    <span className="text-[18px] font-bold text-black">
                        Materias
                    </span>
                </button>

                <button className="w-full h-[55px] flex items-center gap-6 rounded-lg px-2 hover:bg-[#d9d9d9]">
                    <span className="w-[36px] h-[36px] bg-black rounded-md flex items-center justify-center">
                        <GraduationCap size={22} className="text-white" />
                    </span>

                    <span className="text-[18px] font-bold text-black">
                        Cursos
                    </span>
                </button>

                <button className="w-full h-[55px] flex items-center gap-6 rounded-lg px-2 hover:bg-[#d9d9d9]">
                    <span className="w-[36px] h-[36px] bg-black rounded-md flex items-center justify-center">
                        <BookOpen size={22} className="text-white" />
                    </span>

                    <span className="text-[18px] font-bold text-black">
                        Clases excepción
                    </span>
                </button>

                <button className="w-full h-[55px] flex items-center gap-6 rounded-lg px-2 hover:bg-[#d9d9d9]">
                    <span className="w-[36px] h-[36px] bg-black rounded-md flex items-center justify-center">
                        <BriefcaseBusiness size={22} className="text-white" />
                    </span>
                </button>

            </nav>
        </aside>
    )
}

export default Sidebar