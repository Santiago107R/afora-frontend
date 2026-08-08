import { Outlet } from "react-router"
import CustomHeader from "../../components/CustomHeader"
import { User2 } from "lucide-react"
import { useAuthStore } from "@/auth/store/auth.store"

const AdminLayout = () => {
    const { user, logout } = useAuthStore()

    return (
        <div className="h-screen w-full grid grid-cols-1 grid-rows-[auto_1fr_auto]">

            <div className="h-fit w-full">
                <CustomHeader
                    button={{ onClick: logout, children: "Cerrar Sesión" }}
                    logo={'/favicon.svg'}
                    icon={User2}
                    name={user?.name}
                />
            </div>

            <main className="min-h-0 w-full h-full overflow-y-auto">
                <Outlet />
            </main>
        </div>
    )
}

export default AdminLayout