import { useAuthStore } from "@/auth/store/auth.store"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router"

const HomeAdminPage = () => {
    const { logout } = useAuthStore()
    const navigate = useNavigate()

    return (
        <div>
            <Button variant={"destructive"} onClick={logout}>Salir</Button>
            <Button variant={"default"} onClick={() => navigate('/aulas')}>Salir</Button>
        </div>
    )
}

export default HomeAdminPage