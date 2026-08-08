import AulasAdminGrid from "@/admin/components/AulasAdminGrid"
import { useAulas } from "@/admin/hook/queries"

const AulasPage = () => {
    const aulasQuery = useAulas()

    return (
        <div>
            <AulasAdminGrid aulas={aulasQuery.data?.aulas ?? []} />
        </div>
    )
}

export default AulasPage