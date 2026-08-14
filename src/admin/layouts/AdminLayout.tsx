import { Outlet } from "react-router"
import CustomHeader from "../../components/CustomHeader"
import { User2 } from "lucide-react"
import { useAuthStore } from "@/auth/store/auth.store"
import Sidebar from "../components/Sidebar"

const AdminLayout = () => {
    const { user } = useAuthStore()

    return (
        <div className="h-screen w-full flex flex-col">

            <div className="shrink-0">
                <CustomHeader
                    logo="/logo_negro.png"
                    icon={User2}
                    name={user?.name}
                />
            </div>

            <div className="flex flex-1 min-h-0">

                <Sidebar />

                <main className="flex-1 min-w-0 min-h-0 overflow-y-auto">
                    <Outlet />
                </main>

            </div>

        </div>
    )
}

export default AdminLayout