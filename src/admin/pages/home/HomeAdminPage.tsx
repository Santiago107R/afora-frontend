import CardDashboard from "@/admin/components/CardDashboard"
import { BookPlus, CalendarPlus, Presentation, UserRoundSearch, UsersRound } from "lucide-react"

const HomeAdminPage = () => {
    return (
        <div className="grid grid-cols-3 justify-center items-center">
            <CardDashboard icon={UserRoundSearch} title={"Usuarios"} to={"usuarios"} />
            <CardDashboard icon={Presentation} title={"Aulas"} to={"aulas"} />
            <CardDashboard icon={UsersRound} title={"Cursos"} to={"cursos"} />
            <CardDashboard icon={BookPlus} title={"Materias"} to={"materias"} />
            <CardDashboard icon={CalendarPlus} title={"Excepciones"} to={"excepciones"} />
        </div>
    )
}

export default HomeAdminPage