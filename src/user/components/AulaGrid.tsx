import type { Aula } from "../types/aula.response"
import AulaCard from "./AulaCard";

interface Props {
    aulas: Aula[];
}

const AulaGrid = ({ aulas }: Props) => {

    if (!aulas || aulas.length == 0) {
        return (
            <div className="flex justify-center items-center">
                <p>No hay aulas cargadas</p>
            </div>
        )
    }

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">

            {aulas.map((aula) => (
                <AulaCard key={aula.name} name={aula.name} capacity={aula.capacity} state={aula.state} clase={aula.clase} shadow />
            ))}

        </div>
    )
}

export default AulaGrid
