import AulasAdminGrid from "@/admin/components/AulasAdminGrid"
import GenericCointainer from "@/admin/components/GenericCointainer"
import { useAulas } from "@/admin/hook/queries"

const AulasPage = () => {
    const aulasQuery = useAulas()

    return (
        <div className="h-full p-10 grid grid-cols-1 grid-rows-[auto_1fr]">
            <GenericCointainer
                title="Todos"
                search
                actions={[
                    { label: 'Order By', onClick: () => { } },
                    { label: 'Add', onClick: () => { } },
                ]}
            >
                <AulasAdminGrid aulas={aulasQuery.data?.aulas ?? []} />
            </GenericCointainer>
        </div>
    )
}

export default AulasPage