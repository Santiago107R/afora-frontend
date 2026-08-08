import { Edit } from "lucide-react";

interface Props {
    name: string;
    capacity: number;
    estado: string;
}

const AulaAdminCard = ({ name, capacity, estado }: Props) => {
    return (
        <div className="bg-(color-white-primary) border border-(--color-black-primary) rounded-md p-3">
            <h2 className="text-2xl text-center ">{name}</h2>
            <p>Capacidad: {capacity}</p>
            <p>Estado: {estado}</p>

            <div className="flex flex-row gap-5 mt-2">
                <div className="bg-(--color-primary) p-1 rounded-sm">
                    <p className="font-bold text-(--color-black-fourth)">Detalles</p>
                </div>

                <div className="bg-(--color-primary) p-1 rounded-sm">
                    <p className="text-(--color-black-fourth)"><Edit /></p>
                </div>
            </div>
        </div>
    )
}

export default AulaAdminCard