import { Home, type LucideIcon } from "lucide-react";
import { useNavigate } from "react-router";

interface Props {
    icon: LucideIcon
    title: string;
    to: string;
}


const CardDashboard = ({ icon: Icon = Home, title, to }: Props) => {
    const navigate = useNavigate()
    const handleClickNavigate = (to: string) => {
        navigate(to)
    }
    return (
        <div
            className="flex flex-col justify-center items-center mx-auto bg-(--color-gray-secondary) border border-neutral-500 rounded-lg p-4 space-y-4"
            onClick={() => handleClickNavigate(to)}
        >
            <div className="bg-(--color-white-primary) rounded-full p-2">
                <Icon className="size-15" />
            </div>

            <h2 className="text-2xl">{title}</h2>
        </div>
    )
}

export default CardDashboard