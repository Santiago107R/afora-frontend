import { cn } from "@/lib/utils";

interface ScheduleEntry {
    day: 'Lunes' | 'Martes' | 'Miércoles' | 'Jueves' | 'Viernes';
    time: string;
    subject: string;
    location: string;
    color?: string;
}

interface Props {
    data: ScheduleEntry[];
}

const ScheduleTable = ({ data }: Props) => {
    const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
    const hours = Array.from(new Set(data.map(item => item.time))).sort((a, b) => {
        return a.localeCompare(b);
    });

    const getEntry = (day: string, hour: string) => {
        const entry = data.find(item => item.day === day && item.time === hour);
        if (entry && entry.color === undefined) {
            entry.color = 'blue';
        }
        return entry;
    };

    return (
        <div className="w-full max-w-5xl mx-auto p-4 md:p-8 bg-[#D9D9D9] rounded-[30px] md:rounded-[40px]  border border-gray-300">

            <h2 className="text-3xl md:text-4xl font-anton mb-6 uppercase text-center text-black">
                Mis horarios
            </h2>

            <div className="w-full overflow-x-auto rounded-xl border border-gray-400">
                <table className="w-full min-w-150 border-collapse bg-[#D1D1D1] text-center font-montserrat">
                    <thead>
                        <tr className="bg-[#BDBDBD] text-black">
                            <th className="border border-gray-400 py-3 font-anton text-xl md:text-2xl px-4">Horario</th>
                            {days.map(day => (
                                <th key={day} className="border border-gray-400 py-3 font-anton text-xl md:text-2xl">
                                    {day}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="text-[10px] md:text-xs font-bold">
                        {hours.map((hour) => (
                            <tr key={hour} className="h-12 md:h-14">
                                <td className="border border-gray-400 bg-[#CFCFCF] px-2 whitespace-nowrap">
                                    {hour}
                                </td>

                                {days.map(day => {
                                    const entry = getEntry(day, hour);
                                    return (
                                        <td
                                            key={`${day}-${hour}`}
                                            className={cn(`border border-gray-400 p-1 transition-colors`, entry && `bg-${entry.color}-200`)}
                                        // style={
                                        //     entry
                                        //         ? { backgroundColor: `color-mix(in srgb, ${entry.color}, white 70%)` }
                                        //         : undefined
                                        // }
                                        >
                                            {entry && (
                                                <div className="flex flex-col justify-center leading-tight">
                                                    <span className="uppercase">{entry.subject}</span>
                                                    <span className="font-normal text-[9px] md:text-[10px] opacity-80">
                                                        ({entry.location})
                                                    </span>
                                                </div>
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <p className="text-center mt-4 text-gray-500 text-xs md:hidden">
                ← Desliza para ver más →
            </p>
        </div>
    );
};

export default ScheduleTable;