// components/GenericCard.tsx
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
    className = "bg-(--color-white-primary) border border-(--color-black-primary) rounded-md p-3 space-y-4",
}: GenericCardProps) => {
    return (
        <div className={className}>
            {title && <h2 className="text-2xl text-center">{title}</h2>}

            {children}

            {actions && actions.length > 0 && (
                <div className="flex flex-row gap-5">
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