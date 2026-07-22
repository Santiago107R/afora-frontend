import { Outlet } from "react-router"
import CustomFooter from "../../components/CustomFooter"
import CustomHeader from "../../components/CustomHeader"
import { User2 } from "lucide-react"
import { useAuthStore } from "@/auth/store/auth.store"

const UserLayout = () => {
  const { logout } = useAuthStore()

  return (
    <div className="h-screen w-full grid grid-cols-1 grid-rows-[auto_1fr_auto]">

      <div className="h-fit w-full">
        <CustomHeader
          title={"Afora"}
          link={[{ name: "Inicio", url: '/' }, { name: "Lista", url: '/user/lista' }]}
          button={{ onClick: logout, children: "Cerrar Sesión" }}
          logo={'/favicon.svg'}
          icon={User2}
        />
      </div>

      <main className="min-h-0 w-full h-full overflow-y-auto">
        <Outlet />
      </main>

      <div className="h-fit w-full">
        <CustomFooter
          description="Derechos reservados por Afora"
          link={[{ name: "Arturitorodriguezvera@gmail.com", url: "#" }, { name: "ezequielnicolasacosta@gmail.com", url: "#" }]}
        />
      </div>

    </div>
  )
}

export default UserLayout