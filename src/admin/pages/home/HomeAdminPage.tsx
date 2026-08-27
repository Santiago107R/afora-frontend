import CardDashboard from "@/admin/components/CardDashboard"
import { BookPlus, CalendarPlus, Presentation, UserRoundSearch, UsersRound } from "lucide-react"

const HomeAdminPage = () => {
    return (
        <div className="h-full min-h-0 p-10 grid grid-cols-1 grid-rows-[auto_minmax(0,1fr)] justify-center">
            <div className="grid grid-cols-6 gap-3 justify-center items-center">

                <div className="col-span-2">
                    <CardDashboard icon={UserRoundSearch} title={"Usuarios"} to={"usuarios"} />
                </div>
                <div className="col-span-2">
                    <CardDashboard icon={Presentation} title={"Aulas"} to={"aulas"} />
                </div>
                <div className="col-span-2">
                    <CardDashboard icon={UsersRound} title={"Cursos"} to={"cursos"} />
                </div>

                <div className="col-span-2 col-start-2">
                    <CardDashboard icon={BookPlus} title={"Materias"} to={"materias"} />
                </div>
                <div className="col-span-2">
                    <CardDashboard icon={CalendarPlus} title={"Excepciones"} to={"excepciones"} />
                </div>

            </div>
        </div>
    )
}

export default HomeAdminPage