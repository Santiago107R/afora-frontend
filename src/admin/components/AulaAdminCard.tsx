import { Edit } from "lucide-react";

interface Props {
    name: string;
    capacity: number;
    estado: string;
}

const AulaAdminCard = ({ name, capacity, estado }: Props) => {
    return (
        <div className="bg-(color-white-primary) border border-(--color-black-primary)">
            <h1>{name}</h1>
            <p>Capacidad: {capacity}</p>
            <p>Estado: {estado}</p>

            <div className="flex flex-row gap-10">
                <div className="bg-(--color-primary) py-1 px-2 rounded-sm">
                    <p className="font-bold">Detalles</p>
                </div>

                <div className="bg-(--color-primary) py-1 px-2 rounded-sm">
                    <p><Edit /></p>
                </div>
            </div>
        </div>
    )
}

export default AulaAdminCard