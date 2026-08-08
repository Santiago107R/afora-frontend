import GenericGrid from "@/components/GenericGrid"
import type { Aula } from "@/user/types/aula.response"
import AulaAdminCard from "./AulaAdminCard"

interface Props {
    aulas: Aula[]
    onEditAula?: (aula: Aula) => void
}

const AulasAdminGrid = ({ aulas, onEditAula }: Props) => {
    return (
        <GenericGrid
            items={aulas ?? []}
            keyExtractor={(aula) => aula.name}
            emptyMessage="No hay aulas cargadas"
            className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-8"
            renderItem={(aula) => (
                <AulaAdminCard
                    name={aula.name}
                    capacity={aula.capacity}
                    estado={aula.estado.name}
                    onEdit={() => onEditAula?.(aula)}
                />
            )}
        />
    )
}

export default AulasAdminGrid