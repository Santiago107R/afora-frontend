import type { Aula, AulaResponse } from "@/user/types/aula.response";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";

const useAulaSocket = () => {
    const [aulas, setAulas] = useState<Aula[]>([]);

    useEffect(() => {
        const socket = io(import.meta.env.VITE_API_SOCKET_URL, {
            transports: ['websocket'],
        });

        socket.on('connect', () => {
            const paginationDto = { limit: 10, offset: 0 };

            socket.emit('findAllAulaSocket', paginationDto);
        });

        socket.on('aulasUpdated', (data: AulaResponse) => {
            setAulas(data.aulas ?? data);
        });

        socket.on('connect_error', (err) => {
            console.error('Error socket', err);
        });

        return () => {
            socket.off('connect');
            socket.off('aulasUpdated');
            socket.off('connect_error');
            socket.disconnect();
        };
    }, []);

    return {
        aulas,
    }
}

export default useAulaSocket
