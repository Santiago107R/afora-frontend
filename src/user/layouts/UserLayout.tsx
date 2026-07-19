import { Outlet } from "react-router"
import CustomFooter from "../../components/CustomFooter"
import CustomHeader from "../../components/CustomHeader"
import { User2 } from "lucide-react"
import { useAuthStore } from "@/auth/store/auth.store"


const UserLayout = () => {
  const { logout } = useAuthStore()
  return (
    <div className="flex flex-col min-h-screen">
      {/* {name: "Cerrar Sesión", url: '/logout',} */}
      <CustomHeader
        title={"Afora"}
        link={[{ name: "Inicio", url: '/' }, { name: "Lista", url: '/lista' }]}
        button={{ onClick: logout, children: "Cerrar Sesión" }}
        logo={'/favicon.svg'}
        icon={User2}
      />
      <main className="grow">
        <Outlet />
      </main>
      <CustomFooter description="Derechos reservados por Afora" link={[{ name: "Arturitorodriguezvera@gmail.com", url: "#" }, { name: "ezequielnicolasacosta@gmail.com", url: "#" }]} />
    </div>
  )
}

export default UserLayout
