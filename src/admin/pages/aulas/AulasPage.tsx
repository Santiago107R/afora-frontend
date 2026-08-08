import AulasAdminGrid from "@/admin/components/AulasAdminGrid"
import AulaFormModal from "@/admin/components/AulaFormModal"
import GenericCointainer from "@/admin/components/GenericCointainer"
import { useAulas, useEstados } from "@/admin/hook/queries"
import { useSelectedAulaStore } from "@/admin/store/selectedEntityStore"
import type { Aula } from "@/interfaces/aula.response"
import { useEffect, useState, type FormEvent } from "react"
import { toast } from "sonner"

type AulaFormValues = {
    name: string
    description: string
    squareMeters: string
    heightInMeters: string
    classroomType: string
    capacity: string
    deductTeacherSpace: string
    estadoId: string
}

const AulasPage = () => {
    const { data: aulas, mutation } = useAulas()
    const { data: estados } = useEstados()
    const { selectedEntity, isEntitySelected, setEntity, clearEntity } = useSelectedAulaStore()
    const [search, setSearch] = useState('')
    const [isCreating, setIsCreating] = useState(false)
    const [formValues, setFormValues] = useState<AulaFormValues>({
        name: '',
        description: '',
        squareMeters: '',
        heightInMeters: '',
        classroomType: '',
        deductTeacherSpace: '',
        capacity: '',
        estadoId: '',
    })

    useEffect(() => {
        if (selectedEntity) {
            setFormValues({
                name: selectedEntity.name ?? '',
                description: selectedEntity.description ?? '',
                squareMeters: selectedEntity.squareMeters?.toString() ?? '',
                heightInMeters: selectedEntity.heightInMeters?.toString() ?? '',
                classroomType: selectedEntity.classroomType ?? '',
                deductTeacherSpace: selectedEntity.deductTeacherSpace === null || selectedEntity.deductTeacherSpace === undefined ? '' : String(selectedEntity.deductTeacherSpace),
                capacity: selectedEntity.capacity?.toString() ?? '',
                estadoId: selectedEntity.estado?.id?.toString() ?? '',
            })
        }
    }, [selectedEntity])

    const resetForm = () => {
        setFormValues({
            name: '',
            description: '',
            squareMeters: '',
            heightInMeters: '',
            classroomType: '',
            deductTeacherSpace: '',
            capacity: '',
            estadoId: '',
        })
        setIsCreating(false)
    }

    const openCreateModal = () => {
        resetForm()
        setIsCreating(true)
        setEntity({ id: 'new' } as Partial<Aula>)
    }

    const openEditModal = (aula: Partial<Aula>) => {
        setIsCreating(false)
        setEntity(aula)
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const parsedCapacity = Number(formValues.capacity)
        const parsedSquareMeters = Number(formValues.squareMeters)
        const parsedHeightInMeters = Number(formValues.heightInMeters)
        const estadoId = Number(formValues.estadoId)

        if (!formValues.name.trim() || !formValues.description.trim() || !formValues.classroomType || !formValues.estadoId || Number.isNaN(parsedSquareMeters) || Number.isNaN(parsedHeightInMeters)) {
            toast.error('Completa todos los campos obligatorios', {
                position: 'top-right'
            })
            return
        }

        const payload = {
            id: selectedEntity?.id ?? 'new',
            name: formValues.name.trim(),
            description: formValues.description.trim(),
            squareMeters: parsedSquareMeters,
            heightInMeters: parsedHeightInMeters,
            classroomType: formValues.classroomType,
            deductTeacherSpace: null,
            ...(isCreating ? {} : { capacity: parsedCapacity }),
            id_estado: estadoId,
        }

        await mutation.mutateAsync(payload, {
            onSuccess: () => {
                toast.success('Operación exitosa', {
                    position: 'top-right'
                })
                clearEntity()
            },
            onError: (error) => {
                console.error(error)
                toast.error('Operación fallida', {
                    position: 'top-right'
                })
            }
        })
    }

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
                    // { label: 'Ordenar Por', onClick: () => { } },
                    { label: 'Crear', onClick: openCreateModal },
                ]}
                className="h-full min-h-0 bg-(--color-gray-primary) rounded-lg border border-black flex flex-col"
                classNameChildren="flex-1 min-h-0 w-full overflow-y-auto border border-neutral-100 rounded-xl p-4"
            >
                <AulasAdminGrid
                    aulas={aulas?.aulas ?? []}
                    onEditAula={(aula) => openEditModal(aula)}
                />
            </GenericCointainer>

            {isEntitySelected && (
                <AulaFormModal
                    isOpen={isEntitySelected}
                    isCreating={isCreating}
                    formValues={formValues}
                    estados={estados?.estados}
                    onChange={(field, value) => setFormValues((current) => ({ ...current, [field]: value }))}
                    onSubmit={handleSubmit}
                    onClose={() => { clearEntity(); resetForm() }}
                />
            )}
        </div>
    )
}

export default AulasPage