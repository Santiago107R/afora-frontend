import { cn } from "@/lib/utils";
import { useSelectedAulaStore } from "@/store/selectedAulaStore";

interface Props {
    shadow?: boolean;
    name: string;
    capacity: number;
    estado: string;
    clase: any[]

}

const AulaCard = ({ shadow, name, capacity, estado }: Props) => {
    const { setSelectedAula: openModal } = useSelectedAulaStore()

    // const statusColors = {
    //     available: "text-green-500",
    //     busy: "text-red-500",
    //     maintenance: "text-gray-500",
    // }

    return (
        <>
            <div
                onClick={() => openModal({ name })}
                className={` flex flex-col py-5 px-1 bg-[#D9D9D9] rounded-2xl w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-lg cursor-pointer transition hover:scale-105 border-[#D9D9D9] hover:border-[#3B78B3] border-2 ${shadow && 'shadow-[10px_10px_7px_rgba(0,0,0,0.25)]'} `}
            >

                <div className="flex gap-6 sm:gap-8 md:gap-4 lg:gap-10 ml-8 pb-1">

                    {/* 
                        <img
                            src="/favicon.svg"
                            alt="Imagen"
                            className="shrink-0 object-cover mt-1 rounded-sm bg-black w-19 h-15 sm:w-22 sm:h-17 md:w-22 md:h-16"
                        /> 
                    */}

                    <h2 className="text-2xl sm:text-2xl md:text-2xl lg:text-4xl font-anton  ">
                        {name}
                    </h2>

                </div>

                <div className="w-lg border-b-2 border-gray-400 pb-4"></div>

                <div className="flex flex-col font-anybody ml-10 mt-4">
                    <ul className="text-sm sm:text-md md:text-lg">
                        <li>
                            <span className="font-bold">
                                capacidad:&nbsp;
                            </span>

                            {capacity}
                        </li>

                        <li>
                            <span className="font-bold">curso:&nbsp;</span>
                            <span className="text-gray-700">
                                {"Sin curso en este momento"}
                            </span>
                        </li>

                        <li>
                            <p className="font-bold">
                                <span>
                                    Estado:&nbsp;
                                </span>

                                {/* <span className={statusColors[estado]}> */}
                                <span className={cn(estado === 'available' ? "text-green-500" : estado === 'busy' ? "text-red-500" : "text-gray-500")}>
                                    {estado === 'available' ? 'Disponible' : estado === 'maintenance' ? 'Mantenimiento' : 'Ocupado'}
                                </span>
                            </p>
                        </li>


                    </ul>
                </div>
            </div>
        </>
    )
}

export default AulaCard