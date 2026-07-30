import type { Aula } from "../types/aula.response"
import AulaCard from "./AulaCard";

interface Props {
    aulas: Aula[];
}

const AulaGrid = ({ aulas }: Props) => {

    if (!aulas || aulas.length == 0) {
        return (
            <div className="h-full w-full flex justify-center items-center">
                <p className="text-gray-500 font-medium">No hay aulas cargadas</p>
            </div>
        )
    }

    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 pb-8">
            {aulas.map((aula) => (
                <AulaCard key={aula.name} name={aula.name} capacity={aula.capacity} estado={aula.estado.name} clase={aula.clase} />
            ))}
        </div>
    )
}

export default AulaGrid