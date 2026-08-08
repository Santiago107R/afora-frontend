import AulasAdminGrid from "@/admin/components/AulasAdminGrid"
import GenericCointainer from "@/admin/components/GenericCointainer"
import { useAulas } from "@/admin/hook/queries"
import { useState } from "react"

const AulasPage = () => {
    const aulasQuery = useAulas()
    const [search, setSearch] = useState('')

    const handleSearchChange = (value: string) => {
        setSearch(value)
    }

    return (
        <div className="h-full min-h-0 p-10 grid grid-cols-1 grid-rows-[auto_minmax(0,1fr)]">
            <GenericCointainer
                title="Todos"
                searchValue={search}
                onSearchChange={handleSearchChange}
                actions={[
                    { label: 'Ordenar Por', onClick: () => { } },
                    { label: 'Crear', onClick: () => { } },
                ]}
                className="h-full min-h-0 bg-(--color-gray-primary) rounded-lg border border-black flex flex-col"
                classNameChildren="flex-1 min-h-0 w-full overflow-y-auto border border-neutral-100 rounded-xl p-4"
            >
                <AulasAdminGrid aulas={aulasQuery.data?.aulas ?? []} />
            </GenericCointainer>
        </div>
    )
}

export default AulasPage