import { X } from "lucide-react"
import type { FormEventHandler, ReactNode } from "react"

interface Props {
    isOpen: boolean
    onClose: () => void
    title?: string
    subtitle?: string
    children: ReactNode
    onSubmit?: FormEventHandler<HTMLFormElement>
}

const FormModal = ({ isOpen, onClose, title = "crear nuevo espacio", subtitle, children, onSubmit }: Props) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm" onClick={onClose}>
            <div
                className="relative w-full max-w-2xl overflow-hidden rounded-xl bg-[#1a1a1a] text-white shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={onClose}
                    className="absolute top-6 right-6 z-20 rounded-md p-1 text-gray-400 transition hover:bg-white/10 hover:text-white"
                    aria-label="Cerrar modal"
                >
                    <X />
                </button>

                <div className="relative z-10 px-8 pt-8 pb-4">
                    <h2 className="text-3xl text-white">{title}</h2>
                    {subtitle && (
                        <p className="mt-1 text-sm font-medium text-gray-500">
                            {subtitle}
                        </p>
                    )}
                </div>

                <div className="relative z-10 px-8 pb-10">
                    {onSubmit ? <form onSubmit={onSubmit}>{children}</form> : children}
                </div>

                <img
                    src="/logo_blanco.png"
                    alt="Decoración de fondo"
                    className="pointer-events-none absolute bottom-[-10%] right-[-5%] w-64 opacity-90 select-none z-0"
                />
            </div>
        </div>
    )
}

export default FormModal