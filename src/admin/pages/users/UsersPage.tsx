import { useState } from "react"
import GenericCointainer from "@/admin/components/GenericCointainer"
import UsuariosTable, {
    type Usuario,
} from "@/admin/components/UsuariosTable"

const UsersPage = () => {
    const [search, setSearch] = useState("")

    const usuarios: Usuario[] = [
        {
            id: 1,
            nombre: "Damian Sosa",
            cargo: "Docente",
            estado: "Activo",
            contacto: "sossa@gmail.com",
        },
        {
            id: 2,
            nombre: "Avilés Gimesa",
            cargo: "Portero",
            estado: "Activo",
            contacto: "Aviles@gmail.com",
        },
        {
            id: 3,
            nombre: "Calbo Carolina",
            cargo: "Portero",
            estado: "Activo",
            contacto: "Calbo@gmail.com",
        },
        {
            id: 4,
            nombre: "Andrada Nicolás",
            cargo: "Docente",
            estado: "Baneado",
            contacto: "Andrada@gmail.com",
        },
        {
            id: 5,
            nombre: "Rodolfo Emanuel",
            cargo: "Docente",
            estado: "Baneado",
            contacto: "Rodolfo@gmail.com",
        },
        {
            id: 6,
            nombre: "Damian Sosa",
            cargo: "Portero",
            estado: "Activo",
            contacto: "sossa@gmail.com",
        },
        {
            id: 7,
            nombre: "Damian Sosa",
            cargo: "Docente",
            estado: "Activo",
            contacto: "sossa@gmail.com",
        },
    ]

    const usuariosFiltrados = usuarios.filter((usuario) =>
        usuario.nombre
            .toLowerCase()
            .includes(search.toLowerCase())
    )

    return (
        <div className="h-full min-h-0 p-10">

            <GenericCointainer
                title="Todos"
                searchValue={search}
                onSearchChange={setSearch}
                searchPlaceholder="Buscar"
                actions={[
                    {
                        label: "Order by",
                        onClick: () => {
                            console.log("Ordenar usuarios")
                        },
                    },
                    {
                        label: "Add",
                        onClick: () => {
                            console.log("Crear usuario")
                        },
                    },
                ]}
                className="h-full min-h-0 bg-(--color-gray-primary) rounded-lg border border-black flex flex-col"
                classNameChildren="flex-1 min-h-0 w-full overflow-y-auto border border-neutral-100 rounded-xl p-4"
            >

                <UsuariosTable
                    usuarios={usuariosFiltrados}
                    onEdit={(usuario) => {
                        console.log("Editar usuario:", usuario)
                    }}
                />

            </GenericCointainer>

        </div>
    )
}

export default UsersPage