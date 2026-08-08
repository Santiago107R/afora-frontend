import GenericCard from "@/components/GenericCard";
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
            <p>Estado: {estado}</p>
        </GenericCard>
    )
}

export default AulaAdminCard