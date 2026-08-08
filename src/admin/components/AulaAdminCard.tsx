import { Edit } from "lucide-react";

interface Props {
    name: string;
    capacity: number;
    estado: string;
}

const AulaAdminCard = ({ name, capacity, estado }: Props) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>Capacidad: {capacity}</p>
            <p>Estado: {estado}</p>

            <div className="flex flex-row gap-10">
                <div className="bg-(--color-primary) p-3">
                    <p>Detalles</p>
                </div>

                <div className="bg-(--color-primary) p-3">
                    <p><Edit /></p>
                </div>
            </div>
        </div>
    )
}

export default AulaAdminCard