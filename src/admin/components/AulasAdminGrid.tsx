import GenericGrid from "@/components/GenericGrid"
import type { Aula } from "@/user/types/aula.response"
import AulaAdminCard from "./AulaAdminCard"

interface Props {
    aulas: Aula[]
}

const AulasAdminGrid = ({ aulas }: Props) => {
    return (
        <GenericGrid
            items={aulas ?? []}
            keyExtractor={(aula) => aula.name}
            emptyMessage="No hay aulas cargadas"
            renderItem={(aula) => (
                <AulaAdminCard
                    name={aula.name}
                    capacity={aula.capacity}
                    estado={aula.estado.name}
                />
            )}
        />
    )
}

export default AulasAdminGrid