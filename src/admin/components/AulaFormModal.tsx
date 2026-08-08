import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import type { FormEvent } from 'react'

interface AulaFormValues {
    name: string
    description: string
    squareMeters: string
    heightInMeters: string
    classroomType: string
    capacity: string
    deductTeacherSpace: string
    estadoId: string
}

interface Props {
    isOpen: boolean
    isCreating: boolean
    formValues: AulaFormValues
    estados: Array<{ id: number; name: string }> | undefined
    onChange: (field: keyof AulaFormValues, value: string) => void
    onSubmit: (event: FormEvent<HTMLFormElement>) => void
    onClose: () => void
}

const classroomTypeOptions = [
    { value: 'inicial', label: 'Inicial' },
    { value: 'primaria', label: 'Primaria' },
    { value: 'secundaria', label: 'Secundaria' },
    { value: 'taller', label: 'Taller' },
]

const inputClassName = 'w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-gray-500 outline-none transition-colors focus:border-white/30'
const numberInputClassName = `${inputClassName} [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none`

const AulaFormModal = ({ isOpen, isCreating, formValues, estados, onChange, onSubmit, onClose }: Props) => {
    if (!isOpen) return null

    const renderTextField = (label: string, value: string, field: keyof AulaFormValues, placeholder: string, type: 'text' | 'number' = 'text', multiline = false) => (
        <label className="block w-full text-sm font-medium text-white">
            <span className="mb-1 inline-flex items-center gap-1">
                {label} <span className="text-(--color-red-primary)">*</span>
            </span>
            {multiline ? (
                <textarea
                    value={value}
                    onChange={(event) => onChange(field, event.target.value)}
                    rows={3}
                    className={`${inputClassName} resize-none`}
                    placeholder={placeholder}
                />
            ) : (
                <input
                    type={type}
                    value={value}
                    onChange={(event) => onChange(field, event.target.value)}
                    className={type === 'number' ? numberInputClassName : inputClassName}
                    placeholder={placeholder}
                />
            )}
        </label>
    )

    const renderSelectField = (label: string, value: string, field: keyof AulaFormValues, options: Array<{ value: string; label: string }>) => (
        <label className="block text-sm font-medium text-white">
            <span className="mb-1 inline-flex items-center gap-1">
                {label} <span className="text-(--color-red-primary)">*</span>
            </span>
            <div className="relative mt-1">
                <select
                    value={value}
                    onChange={(event) => onChange(field, event.target.value)}
                    className="w-lg appearance-none rounded-md border border-white/10 bg-white/5 px-3 py-2 pr-9 text-white outline-none transition-colors focus:border-white/30"
                >
                    <option value="" className="bg-[#1a1a1a] text-white">Seleccionar</option>
                    {options.map((option) => (
                        <option key={option.value} value={option.value} className="bg-[#1a1a1a] text-white">
                            {option.label}
                        </option>
                    ))}
                </select>
                <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
        </label>
    )

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm" onClick={onClose}>
            <div className="relative w-full max-w-2xl overflow-hidden rounded-xl bg-[#1a1a1a] text-white shadow-2xl border border-white/10" onClick={(event) => event.stopPropagation()}>
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-6 right-6 z-20 rounded-md p-1 text-gray-400 transition hover:bg-white/10 hover:text-white"
                    aria-label="Cerrar modal"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="relative z-10 px-8 pt-8 pb-4">
                    <h2 className="text-3xl font-bold tracking-tight text-white">{isCreating ? 'Crear aula' : 'Editar aula'}</h2>
                </div>

                <form onSubmit={onSubmit} className="relative z-10 px-8 pb-10">
                    <div className="space-y-4">
                        {renderTextField('Nombre', formValues.name, 'name', 'Ej. Aula 101')}
                        {renderTextField('Descripción', formValues.description, 'description', 'Ej. Aula muy espaciosa...', 'text', true)}

                        <div className="flex flex-row gap-4">
                            {renderTextField('M²', formValues.squareMeters, 'squareMeters', '20', 'number')}
                            {renderTextField('M² descontados', formValues.deductTeacherSpace, 'deductTeacherSpace', '5', 'number')}
                            {renderTextField('Metros de altura', formValues.heightInMeters, 'heightInMeters', '6', 'number')}
                        </div>

                        {!isCreating && renderTextField('Capacidad', formValues.capacity, 'capacity', '6', 'number')}

                        {renderSelectField('Tipo de aula', formValues.classroomType, 'classroomType', classroomTypeOptions)}
                        {renderSelectField('Estado', formValues.estadoId, 'estadoId', (estados ?? []).map((estado) => ({ value: estado.id.toString(), label: estado.name })))}

                        <div className="flex justify-end gap-2 pt-2">
                            <Button type="button" variant="outline" className="text-black" onClick={onClose}>
                                Cancelar
                            </Button>
                            <Button type="submit">Guardar</Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AulaFormModal
