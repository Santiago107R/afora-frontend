import AulasAdminGrid from "@/admin/components/AulasAdminGrid"
import FormModal from "@/admin/components/FormModal"
import GenericCointainer from "@/admin/components/GenericCointainer"
import { useAulas, useEstados } from "@/admin/hook/queries"
import { useSelectedAulaStore } from "@/admin/store/selectedEntityStore"
import { Button } from "@/components/ui/button"
import type { Aula } from "@/interfaces/aula.response"
import { CircleAlert } from "lucide-react"
import { useEffect, useState, type FormEvent } from "react"
import { toast } from "sonner"

const AulasPage = () => {
    const { data: aulas, mutation } = useAulas()
    const { data: estados } = useEstados()
    const { selectedEntity, isEntitySelected, setEntity, clearEntity } = useSelectedAulaStore()
    const [search, setSearch] = useState('')
    const [formValues, setFormValues] = useState({ name: '', capacity: '' })

    useEffect(() => {
        if (selectedEntity) {
            setFormValues({
                name: selectedEntity.name ?? '',
                capacity: selectedEntity.capacity?.toString() ?? '',
            })
        }
    }, [selectedEntity])

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const parsedCapacity = Number(formValues.capacity)

        const payload: Partial<Aula> = {
            ...selectedEntity,
            id: selectedEntity?.id,
            name: formValues.name.trim(),
            capacity: Number.isNaN(parsedCapacity) ? selectedEntity?.capacity ?? 0 : parsedCapacity,
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
                <FormModal isOpen={isEntitySelected} onClose={() => clearEntity} title="Editar aula" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <label className="block text-sm font-medium text-white">
                            Nombre <span className="text-(--color-red-primary)">*</span>
                            <input
                                value={formValues.name}
                                onChange={(event) => setFormValues((current) => ({ ...current, name: event.target.value }))}
                                className="mt-1 w-lg rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-primary"
                                placeholder="Ej. Aula 101"
                            />
                        </label>

                        <label className="block text-sm font-medium text-white">
                            Descripción <span className="text-(--color-red-primary)">*</span>
                            <input
                                value={formValues.name}
                                onChange={(event) => setFormValues((current) => ({ ...current, name: event.target.value }))}
                                className="mt-1 w-lg rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-primary"
                                placeholder="Ej. Aula 101"
                            />
                        </label>

                        <div className="flex flex-row gap-4">

                            <label className="block text-sm font-medium text-white">
                                M² <span className="text-(--color-red-primary)">*</span> <CircleAlert />
                                <input
                                    type="number"
                                    value={formValues.capacity}
                                    onChange={(event) => setFormValues((current) => ({ ...current, capacity: event.target.value }))}
                                    className="mt-1 rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-primary"
                                    placeholder="20"
                                />
                            </label>

                            <label className="block text-sm font-medium text-white">
                                M² descontados <span className="text-(--color-red-primary)">*</span> <CircleAlert />
                                <input
                                    type="number"
                                    value={formValues.capacity}
                                    onChange={(event) => setFormValues((current) => ({ ...current, capacity: event.target.value }))}
                                    className="mt-1 rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-primary"
                                    placeholder="20"
                                />
                            </label>

                            <label className="block text-sm font-medium text-white">
                                Metros de altura <span className="text-(--color-red-primary)">*</span> <CircleAlert />
                                <input
                                    type="number"
                                    value={formValues.capacity}
                                    onChange={(event) => setFormValues((current) => ({ ...current, capacity: event.target.value }))}
                                    className="mt-1 rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-primary"
                                    placeholder="20"
                                />
                            </label>
                        </div>

                        <label className="block text-sm font-medium text-white">
                            Tipo de aula <span className="text-(--color-red-primary)">*</span>
                            <select
                                value={formValues.name}
                                onChange={(event) => setFormValues((current) => ({ ...current, name: event.target.value }))}
                                className="mt-1 w-lg rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-primary"
                            >
                                <option value="0">Seleccionar</option>
                            </select>
                        </label>

                        <label className="block text-sm font-medium text-white">
                            Estado <span className="text-(--color-red-primary)">*</span>
                            <select
                                value={formValues.name}
                                onChange={(event) => setFormValues((current) => ({ ...current, name: event.target.value }))}
                                className="mt-1 w-lg rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:border-primary"
                            >
                                <option value="0">Seleccionar</option>
                                {(estados?.estados ?? []).map((estado) => (
                                    <option key={estado.id} value={estado.id}>{estado.name}</option>
                                ))}
                            </select>
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