import { useAuthStore } from "@/auth/store/auth.store"
import { Button } from "@/components/ui/button"

const HomeAdminPage = () => {
    const { logout } = useAuthStore()

    return (
        <div>
            <Button variant={"destructive"} onClick={logout}>Salir</Button>
        </div>
    )
}

export default HomeAdminPage