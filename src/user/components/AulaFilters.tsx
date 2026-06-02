import { useState } from "react"
import type { LucideIcon } from "lucide-react"
import {
    ChevronDown,
    Check
} from "lucide-react"
import type { Aula } from "../types/aula.response"

interface Props {
    placeholder?: string
    icon: LucideIcon

    aulas: Aula[]

    search: string
    setSearch: (value: string) => void

    selectedState: string | null
    setSelectedState: (value: string | null) => void

    selectedTeacher: string | null
    setSelectedTeacher: (value: string | null) => void

    selectedCourse: string | null
    setSelectedCourse: (value: string | null) => void
}

function AulaFilters({ placeholder, icon: Icon, aulas, search, setSearch, selectedState, setSelectedState, selectedTeacher, setSelectedTeacher, selectedCourse, setSelectedCourse }: Props) {

    const [open, setOpen] = useState(false)

    const [openTeachers, setOpenTeachers] = useState(false)

    const [openCourses, setOpenCourses] = useState(false)

    const options = [
        {
            label: "Mantenimiento",
            color: "bg-gray-500"
        },
        {
            label: "Ocupado",
            color: "bg-red-500"
        },
        {
            label: "Disponible",
            color: "bg-green-500"
        }
    ]

    const teachers = [ ...new Set( aulas.flatMap(aula => aula.docenteAula?.map(d => d.user.name) || [] ) ) ]

    const courses = [ ...new Set( aulas.flatMap(aula => aula.docenteAula?.map(d => d.curso.name) || [] ) ) ]

    return (
        <div>

            <div className="w-full flex flex-col gap-6">

                <div className="w-full flex flex-col  items-center gap-4">

                    <div className="w-full sm:w-2/5   flex items-center border-2 border-[#444444] bg-[#D9D9D9] rounded-4xl transition-all duration-200 focus-within:border-[#5693cf] focus-within:shadow-[0_0_12px_rgba(86,147,207,0.35)] ">

                        <Icon className="w-5 h-5 mx-3 my-3 md:mx-3 md:my-3 text-[#3B78B3]" />

                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder={placeholder}
                            className="w-full bg-transparent outline-none border-none text-black mr-5 placeholder:text-gray-500"
                        />
                    </div>

                    <div className="grid grid-cols-2 lg:flex lg:w-5/10  gap-4 ">

                        <div className="relative w-full ">

                            <button
                                onClick={() => setOpen(!open)}

                                className={` w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 bg-[#D9D9D9] text-black font-medium transition-all duration-200 ${open ? "border-blue-400 shadow-[0_0_12px_rgba(86,147,207,0.35)]" : "border-[#444444]"}`}>

                                <div className="flex items-center gap-2">

                                    {selectedState && (
                                        <div className={`w-3 h-3 rounded-full ${options.find(o => o.label === selectedState)?.color}`} />
                                    )}

                                    <span className={"text-sm"}>
                                        {selectedState || "Disponibilidad"}
                                    </span>

                                </div>

                                <ChevronDown className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`}/>

                            </button>

                            {open && (
                                <div className="absolute mt-2 w-full bg-[#D9D9D9] rounded-xl shadow-lg  overflow-hidden z-50 max-h-72 overflow-y-auto">

                                    {options.map((option) => (
                                        <button key={option.label} onClick={() => { setSelectedState(selectedState === option.label ? null : option.label), setOpen(false) }} className="w-full flex items-center justify-between px-4 py-3 hover:bg-[#cfcfcf] transition-all" >

                                            <div className="flex items-center gap-3">

                                                <div
                                                    className={`w-3 h-3 rounded-full ${option.color}`}
                                                />

                                                <span className="text-black">
                                                    {option.label}
                                                </span>

                                            </div>

                                            {selectedState === option.label && (
                                                <Check className="w-5 h-5 text-[#3B78B3]" />
                                            )}

                                        </button>
                                    ))}

                                </div>
                            )}

                        </div>

                        

                        <div className="relative w-full ">

                            <button
                                onClick={() => setOpenCourses(!openCourses)}
                                className={` w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 bg-[#D9D9D9] text-black font-medium transition-all duration-200 ${openCourses ? "border-blue-400 shadow-[0_0_12px_rgba(86,147,207,0.35)]" : "border-[#444444]"}`}>

                                <span className="text-sm">
                                    {selectedCourse || "Cursos"}
                                </span>

                                <ChevronDown className={`w-5 h-5 transition-transform ${openCourses ? "rotate-180" : ""}`} />

                            </button>

                            {openCourses && (
                                <div className="absolute mt-2 w-full bg-[#D9D9D9] rounded-xl shadow-lg  overflow-hidden z-50 max-h-72 overflow-y-auto">

                                    {courses.map((course) => (
                                        <button
                                            key={course}
                                            onClick={() => { setSelectedCourse( selectedCourse === course ? null : course), setOpenCourses(false) }}
                                            className="w-full flex items-center justify-between px-4 py-3 hover:bg-[#cfcfcf] transition-all"
                                        >

                                            <div className="flex items-center gap-3">

                                                <div
                                                    className={`w-5 h-5  rounded-md border-2 flex items-center justify-center ${selectedCourse === course ? "bg-[#3B78B3] border-[#3B78B3]" : "border-[#444444]"}`}>

                                                    {selectedCourse === course && (
                                                        <Check className="w-5 h-5 text-white" />
                                                    )}

                                                </div>

                                                <span className="text-black">
                                                    {course}
                                                </span>

                                            </div>

                                        </button>
                                    ))}

                                </div>
                            )}

                        </div>
                        <div className="relative w-full col-span-2 lg:col-span-1 ">

                            <button
                                onClick={() => setOpenTeachers(!openTeachers)}
                                className={` w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 bg-[#D9D9D9] text-black font-medium transition-all duration-200 ${openTeachers ? "border-blue-400 shadow-[0_0_12px_rgba(86,147,207,0.35)]" : "border-[#444444]"}`}>

                                <span className="text-sm">
                                    {selectedTeacher || "Docentes"}
                                </span>

                                <ChevronDown className={`w-5 h-5 transition-transform ${openTeachers ? "rotate-180" : ""}`} />

                            </button>

                            {openTeachers && (
                                <div className="absolute mt-2 w-full bg-[#D9D9D9] rounded-xl shadow-lg overflow-hidden z-50 max-h-72 overflow-y-auto">

                                    {teachers.map((teacher) => (
                                        <button
                                            key={teacher}
                                            onClick={() => { setSelectedTeacher( selectedTeacher === teacher ? null : teacher), setOpenTeachers(false) }}
                                            className="w-full flex items-center justify-between px-4 py-3 hover:bg-[#cfcfcf] transition-all"
                                        >

                                            <div className="flex items-center gap-3">

                                                <div
                                                    className={`w-5 h-5 rounded-md border-2 flex items-center justify-center ${selectedTeacher === teacher ? "bg-[#3B78B3] border-[#3B78B3]" : "border-[#444444]"}`}>

                                                    {selectedTeacher === teacher && (
                                                        <Check className="w-4 h-4 text-white" />
                                                    )}

                                                </div>

                                                <span className="text-black">
                                                    {teacher}
                                                </span>

                                            </div>

                                        </button>
                                    ))}

                                </div>
                            )}

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default AulaFilters