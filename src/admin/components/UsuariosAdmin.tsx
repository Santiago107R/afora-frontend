import { useState } from "react"

import UsuariosTable from "./UsuariosTable"
import GenericContainer from "./GenericCointainer"

const UsuariosAdmin = () => {

    const [search, setSearch] = useState("")

    const usuarios = [
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
    ]

    const usuariosFiltrados = usuarios.filter((usuario) =>
        usuario.nombre
            .toLowerCase()
            .includes(search.toLowerCase())
    )

    return (
        <div className="w-full h-full p-6">

            <GenericContainer
                title="Todos"
                searchValue={search}
                onSearchChange={setSearch}
                searchPlaceholder="Buscar"
                actions={[
                    {
                        label: "Order by",
                        onClick: () => {
                            console.log("Ordenar")
                        },
                    },
                    {
                        label: "Add",
                        onClick: () => {
                            console.log("Agregar usuario")
                        },
                    },
                ]}
            >

                <UsuariosTable
                    usuarios={usuariosFiltrados}
                    onEdit={(usuario) => {
                        console.log("Editar:", usuario)
                    }}
                />

            </GenericContainer>

        </div>
    )
}

export default UsuariosAdmin