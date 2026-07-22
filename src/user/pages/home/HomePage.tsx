import ScheduleTable from "@/user/components/ScheduleTable"
import SectionCard from "@/user/components/SectionCard"

const HomePage = () => {
    return (
        <div className="h-full p-10 grid grid-cols-1 grid-rows-[auto_1fr] gap-6">

            <div className="flex lg:flex-row justify-between items-center flex-col sm:justify-center gap-10 lg:gap-20">
                <SectionCard title="Título de la tarjeta de ejemplo" description="Esta es una descripción de ejemplo para la tarjeta." textButton="Ver horarios" img={'/favicon.svg'} url="/example" shadow />
                <SectionCard title="Otra tarjeta de ejemplo" description="Esta es otra descripción de ejemplo para la tarjeta." textButton="Ver más" img={'/favicon.svg'} url="/example2" shadow />
            </div>

            <div className="min-h-0 w-full rounded-xl">
                <ScheduleTable data={[
                    { day: 'Martes', time: '12:10-13:10', location: 'Sala Grande', subject: 'Programación' },
                    { day: 'Lunes', time: '16:45-17:45', location: 'cocina', subject: 'modelos y sistemas' },
                    { day: 'Jueves', location: 'Aula 1', subject: 'Matematica', time: '17:45-20:45', color: 'red' }
                ]} />
            </div>

        </div>
    )
}

export default HomePage