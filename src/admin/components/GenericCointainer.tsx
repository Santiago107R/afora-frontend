// components/GenericContainer.tsx
import type { ReactNode } from "react"

interface ActionItem {
    label?: string
    icon?: ReactNode
    onClick?: () => void
}

interface GenericContainerProps {
    children?: ReactNode
    title?: ReactNode
    actions?: ActionItem[]
    searchValue?: string
    onSearchChange?: (value: string) => void
    searchPlaceholder?: string
    className?: string
    classNameChildren?: string
}

const GenericContainer = ({
    children,
    title,
    actions,
    searchValue = "",
    onSearchChange,
    searchPlaceholder = "Buscar",
    className = "bg-(--color-gray-primary) rounded-lg border border-black flex flex-col min-h-0 h-full",
    classNameChildren = "p-4 flex-1 min-h-0 overflow-y-auto"
}: GenericContainerProps) => {
    return (
        <div className={className}>
            <div className="flex flex-wrap items-center gap-4 gap-y-2 p-4 border-b border-black">
                {title && <div className="shrink-0 font-medium">{title}</div>}

                {onSearchChange && (
                    <div role="search" className="flex-1 flex justify-center">
                        <input
                            type="search"
                            value={searchValue}
                            onChange={(e) => onSearchChange(e.target.value)}
                            placeholder={searchPlaceholder}
                            aria-label={searchPlaceholder}
                            className="w-full max-w-xs rounded-md border border-black px-3 py-1 bg-white"
                        />
                    </div>
                )}

                {actions && actions.length > 0 && (
                    <div className="shrink-0 flex flex-row gap-2">
                        {actions.map((action, i) => (
                            <button
                                key={i}
                                type="button"
                                onClick={action.onClick}
                                className="bg-(--color-primary) px-3 py-1 rounded-sm flex items-center gap-1"
                            >
                                {action.label && (
                                    <span className="font-bold text-(--color-black-fourth)">
                                        {action.label}
                                    </span>
                                )}
                                {action.icon && (
                                    <span className="text-(--color-black-fourth)">
                                        {action.icon}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className={classNameChildren}>
                {children}
            </div>
        </div>
    )
}

export default GenericContainer