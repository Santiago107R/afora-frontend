import type { ReactNode } from "react";

interface CardAction {
    label?: string;
    icon?: ReactNode;
    onClick?: () => void;
}

interface GenericCardProps {
    title?: ReactNode;
    children?: ReactNode;
    actions?: CardAction[];
    className?: string;
}

const GenericCard = ({
    title,
    children,
    actions,
    className = "w-full max-w-[280px] mx-auto h-full flex flex-col bg-(--color-white-primary) border border-(--color-black-primary) rounded-md p-2.5 shadow-sm",
}: GenericCardProps) => {
    return (
        <div className={className}>
            {title && <h2 className="text-lg font-semibold text-center">{title}</h2>}

            <div className="flex-1 mt-2 space-y-1 text-sm">
                {children}
            </div>

            {actions && actions.length > 0 && (
                <div className="flex flex-row justify-between gap-1 mt-2">
                    {actions.map((action, i) => (
                        <button
                            key={i}
                            type="button"
                            onClick={action.onClick}
                            className="bg-(--color-primary) px-2 py-1 rounded-sm"
                        >
                            {action.label && (
                                <span className="font-bold text-(--color-black-fourth) text-sm">
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
    )
}

export default GenericCard;