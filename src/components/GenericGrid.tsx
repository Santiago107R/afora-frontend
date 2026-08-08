// components/GenericGrid.tsx
import type { ReactNode } from "react";

interface GenericGridProps<T> {
    items: T[];
    renderItem: (item: T) => ReactNode;
    keyExtractor: (item: T) => string | number;
    emptyMessage?: string;
    className?: string;
}

function GenericGrid<T>({
    items,
    renderItem,
    keyExtractor,
    emptyMessage = "No hay elementos cargados",
    className = "w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-8",
}: GenericGridProps<T>) {

    if (!items || items.length === 0) {
        return (
            <div className="h-full w-full flex justify-center items-center">
                <p className="text-gray-500 font-medium">{emptyMessage}</p>
            </div>
        )
    }

    return (
        <div className={className}>
            {items.map((item) => (
                <div key={keyExtractor(item)}>
                    {renderItem(item)}
                </div>
            ))}
        </div>
    )
}

export default GenericGrid;