import AulasAdminGrid from "@/admin/components/AulasAdminGrid"
import FormModal from "@/admin/components/FormModal"
import GenericCointainer from "@/admin/components/GenericCointainer"
import { useAulas, useEstados } from "@/admin/hook/queries"
import { useSelectedAulaStore } from "@/admin/store/selectedEntityStore"
import { Button } from "@/components/ui/button"
import type { Aula } from "@/interfaces/aula.response"
import { ChevronDown, Info } from "lucide-react"
import { useEffect, useState, type FormEvent } from "react"
import { toast } from "sonner"

type AulaFormValues = {
    name: string
    description: string
    squareMeters: string
    heightInMeters: string
    classroomType: string
    capacity: string
    estadoId: string
}

const classroomTypeOptions = [
    { value: 'inicial', label: 'Inicial' },
    { value: 'primaria', label: 'Primaria' },
    { value: 'secundaria', label: 'Secundaria' },
    { value: 'taller', label: 'Taller' },
]

const AulasPage = () => {
    const { data: aulas, mutation } = useAulas()
    const { data: estados } = useEstados()
    const { selectedEntity, isEntitySelected, setEntity, clearEntity } = useSelectedAulaStore()
    const [search, setSearch] = useState('')
    const [formValues, setFormValues] = useState<AulaFormValues>({
        name: '',
        description: '',
        squareMeters: '',
        heightInMeters: '',
        classroomType: '',
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
                capacity: selectedEntity.capacity?.toString() ?? '',
                estadoId: selectedEntity.estado?.id?.toString() ?? '',
            })
        }
    }, [selectedEntity])

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const parsedCapacity = Number(formValues.capacity)
        const parsedSquareMeters = Number(formValues.squareMeters)
        const parsedHeightInMeters = Number(formValues.heightInMeters)

        const payload: Partial<Aula> = {
            ...selectedEntity,
            id: selectedEntity?.id,
            name: formValues.name.trim(),
            description: formValues.description.trim(),
            squareMeters: Number.isNaN(parsedSquareMeters) ? selectedEntity?.squareMeters ?? 0 : parsedSquareMeters,
            heightInMeters: Number.isNaN(parsedHeightInMeters) ? selectedEntity?.heightInMeters ?? 0 : parsedHeightInMeters,
            classroomType: formValues.classroomType,
            capacity: Number.isNaN(parsedCapacity) ? selectedEntity?.capacity ?? 0 : parsedCapacity,
            estado: selectedEntity?.estado ?? {
                id: Number(formValues.estadoId),
                name: '',
            },
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
                    { label: 'Ordenar Por', onClick: () => { } },
                    { label: 'Crear', onClick: () => { } },
                ]}
                className="h-full min-h-0 bg-(--color-gray-primary) rounded-lg border border-black flex flex-col"
                classNameChildren="flex-1 min-h-0 w-full overflow-y-auto border border-neutral-100 rounded-xl p-4"
            >
                <AulasAdminGrid
                    aulas={aulas?.aulas ?? []}
                    onEditAula={(aula) => setEntity(aula)}
                />
            </GenericCointainer>

            {isEntitySelected && (
                <FormModal isOpen={isEntitySelected} onClose={() => clearEntity()} title="Editar aula" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <label className="block text-sm font-medium text-white">
                            Nombre <span className="text-(--color-red-primary)">*</span>
                            <input
                                value={formValues.name}
                                onChange={(event) => setFormValues((current) => ({ ...current, name: event.target.value }))}
                                className="mt-1 w-lg rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-gray-500 outline-none transition-colors focus:border-white/30"
                                placeholder="Ej. Aula 101"
                            />
                        </label>

                        <label className="block text-sm font-medium text-white">
                            Descripción <span className="text-(--color-red-primary)">*</span>
                            <textarea
                                value={formValues.description}
                                onChange={(event) => setFormValues((current) => ({ ...current, description: event.target.value }))}
                                rows={3}
                                className="mt-1 w-lg resize-none rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-gray-500 outline-none transition-colors focus:border-white/30"
                                placeholder="Ej. Aula muy espaciosa..."
                            />
                        </label>

                        <div className="flex flex-row gap-4">
                            <label className="block flex-1 text-sm font-medium text-white">
                                <span className="inline-flex items-center gap-1">
                                    M² <span className="text-(--color-red-primary)">*</span>
                                    <Info size={14} className="text-gray-500" />
                                </span>
                                <input
                                    type="number"
                                    value={formValues.squareMeters}
                                    onChange={(event) => setFormValues((current) => ({ ...current, squareMeters: event.target.value }))}
                                    className="mt-1 w-full [appearance:textfield] rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-gray-500 outline-none transition-colors focus:border-white/30 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                    placeholder="20"
                                />
                            </label>

                            <label className="block flex-1 text-sm font-medium text-white">
                                <span className="inline-flex items-center gap-1">
                                    M² descontados <span className="text-(--color-red-primary)">*</span>
                                    <Info size={14} className="text-gray-500" />
                                </span>
                                <input
                                    type="number"
                                    value={formValues.heightInMeters}
                                    onChange={(event) => setFormValues((current) => ({ ...current, heightInMeters: event.target.value }))}
                                    className="mt-1 w-full [appearance:textfield] rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-gray-500 outline-none transition-colors focus:border-white/30 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                    placeholder="20"
                                />
                            </label>

                            <label className="block flex-1 text-sm font-medium text-white">
                                <span className="inline-flex items-center gap-1">
                                    Metros de altura <span className="text-(--color-red-primary)">*</span>
                                    <Info size={14} className="text-gray-500" />
                                </span>
                                <input
                                    type="number"
                                    value={formValues.capacity}
                                    onChange={(event) => setFormValues((current) => ({ ...current, capacity: event.target.value }))}
                                    className="mt-1 w-full [appearance:textfield] rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-gray-500 outline-none transition-colors focus:border-white/30 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                                    placeholder="20"
                                />
                            </label>
                        </div>

                        <label className="block text-sm font-medium text-white">
                            Tipo de aula <span className="text-(--color-red-primary)">*</span>
                            <div className="relative mt-1">
                                <select
                                    value={formValues.classroomType}
                                    onChange={(event) => setFormValues((current) => ({ ...current, classroomType: event.target.value }))}
                                    className="w-lg appearance-none rounded-md border border-white/10 bg-white/5 px-3 py-2 pr-9 text-white outline-none transition-colors focus:border-white/30"
                                >
                                    <option value="" className="bg-[#1a1a1a] text-white">Seleccionar</option>
                                    {classroomTypeOptions.map((option) => (
                                        <option key={option.value} value={option.value} className="bg-[#1a1a1a] text-white">
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>
                        </label>

                        <label className="block text-sm font-medium text-white">
                            Estado <span className="text-(--color-red-primary)">*</span>
                            <div className="relative mt-1">
                                <select
                                    value={formValues.estadoId}
                                    onChange={(event) => setFormValues((current) => ({ ...current, estadoId: event.target.value }))}
                                    className="w-lg appearance-none rounded-md border border-white/10 bg-white/5 px-3 py-2 pr-9 text-white outline-none transition-colors focus:border-white/30"
                                >
                                    <option value="0" className="bg-[#1a1a1a] text-white">Seleccionar</option>
                                    {(estados?.estados ?? []).map((estado) => (
                                        <option key={estado.id} value={estado.id} className="bg-[#1a1a1a] text-white">{estado.name}</option>
                                    ))}
                                </select>
                                <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            </div>
                        </label>

                        <div className="flex justify-end gap-2 pt-2">
                            <Button type="button" variant="outline" onClick={() => clearEntity()}>
                                Cancelar
                            </Button>
                            <Button type="submit">Guardar</Button>
                        </div>
                    </div>
                </FormModal>
            )}
        </div>
    )
}

export default AulasPage