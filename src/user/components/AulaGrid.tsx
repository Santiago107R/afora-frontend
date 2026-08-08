// components/AulaGrid.tsx
import GenericGrid from "@/components/GenericGrid";
import type { Aula } from "../types/aula.response"
import AulaCard from "./AulaCard";

interface Props {
    aulas: Aula[];
}

const AulaGrid = ({ aulas }: Props) => {
    return (
        <GenericGrid
            items={aulas}
            keyExtractor={(aula) => aula.name}
            emptyMessage="No hay aulas cargadas"
            renderItem={(aula) => (
                <AulaCard
                    name={aula.name}
                    capacity={aula.capacity}
                    estado={aula.estado.name}
                    clase={aula.clase}
                />
            )}
        />
    )
}

export default AulaGrid