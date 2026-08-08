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
        <div className="h-full p-10 grid grid-cols-1 grid-rows-[auto_1fr]">
            <GenericCointainer
                title="Todos"
                searchValue={search}
                onSearchChange={handleSearchChange}
                actions={[
                    { label: 'Ordenar Por', onClick: () => { } },
                    { label: 'Crear', onClick: () => { } },
                ]}
                classNameChildren="min-h-0 w-full overflow-y-auto border border-neutral-100 rounded-xl p-4"
            >
                <AulasAdminGrid aulas={aulasQuery.data?.aulas ?? []} />
            </GenericCointainer>
        </div>
    )
}

export default AulasPage