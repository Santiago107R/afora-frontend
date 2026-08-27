import CardDashboard from "@/admin/components/CardDashboard"
import { BookPlus, CalendarPlus, Presentation, UserRoundSearch, UsersRound } from "lucide-react"

const HomeAdminPage = () => {
    return (
        <div className="h-full min-h-0 p-10 grid grid-cols-1 grid-rows-[auto_minmax(0,1fr)]">
            <div className="grid grid-cols-3 justify-center items-center">
                <CardDashboard icon={UserRoundSearch} title={"Usuarios"} to={"usuarios"} />
                <CardDashboard icon={Presentation} title={"Aulas"} to={"aulas"} />
                <CardDashboard icon={UsersRound} title={"Cursos"} to={"cursos"} />
                <CardDashboard icon={BookPlus} title={"Materias"} to={"materias"} />
                <CardDashboard icon={CalendarPlus} title={"Excepciones"} to={"excepciones"} />
            </div>
        </div>
    )
}

export default HomeAdminPage