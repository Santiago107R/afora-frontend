import type { ReactNode } from "react"

interface Action {
    label?: string
    onClick?: () => void
}

interface Props {
    children?: ReactNode
    title?: string
    search?: boolean
    actions?: Action[]
}

const GenericCointainer = ({ children, title, search = false, actions }: Props) => {
    return (
        <div className="bg-(--color-gray-primary) rounded-lg border border-black">
            <div className="border border-b-black">
                {title}

                {search && (
                    <input type="search" name="search" id="search" />
                )}

                {actions && actions.length > 0 && (
                    <div className="flex flex-row gap-5 mt-2">
                        {actions.map((action, i) => (
                            <button
                                key={i}
                                onClick={action.onClick}
                                className="bg-(--color-primary) p-1 rounded-sm"
                            >
                                {action.label && (
                                    <span className="font-bold text-(--color-black-fourth)">
                                        {action.label}
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {children}
        </div>
    )
}

export default GenericCointainer