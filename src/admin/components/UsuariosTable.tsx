import { User2 } from "lucide-react"

export interface Usuario {
    id: number
    nombre: string
    cargo: string
    estado: string
    contacto: string
}

interface Props {
    usuarios: Usuario[]
    onEdit?: (usuario: Usuario) => void
}

const UsuariosTable = ({ usuarios, onEdit }: Props) => {
    return (
        <div className="w-full">

            <table className="w-full border-collapse">

                <thead>
                    <tr className="border-b border-gray-300">

                        <th className="w-12"></th>

                        <th className="text-left py-2 px-2">
                            Nombre
                        </th>

                        <th className="text-left py-2 px-2">
                            Cargo
                        </th>

                        <th className="text-left py-2 px-2">
                            Estado
                        </th>

                        <th className="text-left py-2 px-2">
                            
                        </th>

                        <th className="w-20"></th>

                    </tr>
                </thead>

                <tbody>
                    {usuarios.map((usuario) => (
                        <tr
                            key={usuario.id}
                            className="border-b border-gray-300"
                        >

                            <td className="py-2">
                                <div className="w-8 h-8 border border-black rounded-full flex items-center justify-center">
                                    <User2 size={20} />
                                </div>
                            </td>

                            <td className="px-2 py-2">
                                {usuario.nombre}
                            </td>

                            <td className="px-2 py-2">
                                {usuario.cargo}
                            </td>

                            <td className="px-2 py-2">
                                <span
                                    className={
                                        usuario.estado === "Activo"
                                            ? "text-green-500"
                                            : "text-red-500"
                                    }
                                >
                                    {usuario.estado}
                                </span>
                            </td>

                            <td className="px-2 py-2">
                                <a
                                    href={`mailto:${usuario.contacto}`}
                                    className="underline"
                                >
                                    {usuario.contacto}
                                </a>
                            </td>

                            <td className="px-2 py-2">
                                <button
                                    type="button"
                                    onClick={() => onEdit?.(usuario)}
                                    className="bg-(--color-primary) px-3 py-1 rounded-sm font-bold cursor-pointer"
                                >
                                    Edit
                                </button>
                            </td>

                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
    )
}

export default UsuariosTable