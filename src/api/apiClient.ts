export class apiClient {
    private readonly baseUrl: string
    private defaultHeaders: HeadersInit

    constructor(baseUrl: string, defaultHeaders: HeadersInit = {}) {
        this.baseUrl = baseUrl
        this.defaultHeaders = {
            'Content-Type': 'application/json',
            ...defaultHeaders
        }
    }

    public async post<T>(url: string, params: object, headers: object = {}): Promise<T> {
        const respuesta = await fetch(this.baseUrl + url, {
            method: 'POST',
            headers: {
                ...this.defaultHeaders,
                ...headers
            },
            body: JSON.stringify(params)
        });

        if (!respuesta.ok) {
            throw new Error(`Error en la petición: ${respuesta.status} ${respuesta.statusText}`)
        }

        const resultado = await respuesta.json() as T
        return resultado
    }

    public async get<T>(url: string, params: string[][], headers: object = {}): Promise<T> {
        const query = new URLSearchParams(params)
        url += query

        const respuesta = await fetch(this.baseUrl + url, {
            method: 'GET',
            headers: {
                ...this.defaultHeaders,
                ...headers,
            },
        })

        if (!respuesta.ok) {
            throw new Error(`Error en la petición: ${respuesta.status} ${respuesta.statusText}`);
        }

        const resultado = await respuesta.json() as T
        return resultado
    }

}