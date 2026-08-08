import GenericCard from "@/components/GenericCard";
import { cn } from "@/lib/utils";
import { Edit } from "lucide-react";

interface Props {
    name: string;
    capacity: number;
    estado: string;
    onDetalles?: () => void;
    onEdit?: () => void;
}

const AulaAdminCard = ({ name, capacity, estado, onDetalles, onEdit }: Props) => {
    return (
        <GenericCard
            title={name}
            actions={[
                { label: "Detalles", onClick: onDetalles },
                { icon: <Edit />, onClick: onEdit },
            ]}
        >
            <p>Capacidad: {capacity}</p>
            <p>Estado: <span className={cn(estado == 'Disponible' ? 'text-(--color-green-secondary)' : estado == 'Ocupado' ? 'text-(--color-red-primary)' : 'text-gray-500')}>{estado}</span></p>
        </GenericCard>
    )
}

export default AulaAdminCard