import type { ClaseResponse } from "../../interfaces/clase.response";

interface Props {
    name: string;
    description?: string;
    capacity: number;
    estado: string;
    clase: ClaseResponse[];
    onClose?: () => void;
}
// { name, capacity, estado, description, clase = [], onClose }: Props
const AulaModal = ({ name }: Props) => {

    // const statusStyles = {
    //     available: { bg: "bg-green-300", text: "text-green-700" },
    //     busy: { bg: "bg-red-300", text: "text-red-700" },
    //     maintenance: { bg: "bg-gray-300", text: "text-gray-700" }
    // };

    // const esHorarioActual = (diaClase: string, rangoHorario: string): boolean => {
    //     if (!diaClase || !rangoHorario) return false;

    //     const diasSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"];
    //     const ahora = new Date();

    //     const diaActual = diasSemana[ahora.getDay()];
    //     if (diaActual.toLowerCase() !== diaClase.toLowerCase()) return false;

    //     try {
    //         const [inicio, fin] = rangoHorario.split("-");
    //         const [horaInicio, minInicio] = inicio.split(":").map(Number);
    //         const [horaFin, minFin] = fin.split(":").map(Number);

    //         const horaActual = ahora.getHours();
    //         const minActual = ahora.getMinutes();

    //         const minutosActual = horaActual * 60 + minActual;
    //         const minutosInicio = horaInicio * 60 + minInicio;
    //         const minutosFin = horaFin * 60 + minFin;

    //         return minutosActual >= minutosInicio && minutosActual <= minutosFin;
    //     } catch (error) {
    //         return false;
    //     }
    // };

    // const claseActual = clase.find(item => esHorarioActual(item.day, item.schedule));

    // return (
    //     <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={onClose}>
    //         <div className="bg-[#E7E7E7] w-full max-w-md rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
    //             <div className="bg-[#D9D9D9] px-6 py-4 flex justify-between items-start">
    //                 <h1 className="text-3xl font-bold font-anton leading-tight">
    //                     {name}
    //                 </h1>
    //                 <button onClick={onClose} className="text-2xl text-gray-500 hover:text-black cursor-pointer">
    //                     ×
    //                 </button>
    //             </div>

    //             <div className="p-6 flex flex-col gap-6">
    //                 <div className={`rounded-full py-3 text-center ${statusStyles[estado].bg}`}>
    //                     <p className={`text-3xl font-bold font-anton ${statusStyles[estado].text}`} >
    //                         {estado === 'available' ? 'Disponible' : estado === 'maintenance' ? 'Mantenimiento' : 'Ocupado'}
    //                     </p>
    //                 </div>

    //                 <div className="flex flex-col gap-5 text-2xl max-h-80 overflow-y-auto pr-1">

    //                     {!claseActual ? (
    //                         <p className="text-gray-500 text-xl italic my-2">Sin clase en este momento</p>
    //                     ) : (
    //                         <div className="flex flex-col gap-5">
    //                             <p>
    //                                 <span className="font-bold">Profe a cargo:&nbsp;</span>
    //                                 <span className="text-gray-700">{claseActual.user.name}</span>
    //                             </p>
    //                             <p>
    //                                 <span className="font-bold">Materia:&nbsp;</span>
    //                                 <span className="text-gray-700">{claseActual.materia.name}</span>
    //                             </p>
    //                             <p>
    //                                 <span className="font-bold">Curso:&nbsp;</span>
    //                                 <span className="text-gray-700">{claseActual.curso.name}</span>
    //                             </p>
    //                             <p>
    //                                 <span className="font-bold">Horario:&nbsp;</span>
    //                                 <span className="text-gray-700">{claseActual.day} de {claseActual.schedule}</span>
    //                             </p>
    //                         </div>
    //                     )}

    //                     <hr className="border-gray-300 my-1" />

    //                     <p className="text-2xl">
    //                         <span className="font-bold">Capacidad:&nbsp;</span>
    //                         <span className="text-gray-700">{capacity} alumnos</span>
    //                     </p>
    //                 </div>

    //                 <div>
    //                     <p className="text-2xl font-bold">
    //                         Descripción:&nbsp;
    //                         <span className="font-normal text-gray-700">{description || "Sin descripción"}</span>
    //                     </p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
    return (
        <div>
            <p>Hola {name} soy una modal</p>
        </div>
    )
};

export default AulaModal;