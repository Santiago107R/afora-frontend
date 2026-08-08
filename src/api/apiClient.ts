export type RequestConfig = RequestInit & { url: string }

export class apiClient {
    private readonly baseUrl: string
    private defaultHeaders: HeadersInit

    private requestInterceptors: Array<(config: RequestConfig) => Promise<RequestConfig> | RequestConfig> = []
    private responseInterceptors: Array<(response: Response) => Promise<Response> | Response> = []

    constructor(baseUrl: string, defaultHeaders: HeadersInit = {}) {
        this.baseUrl = baseUrl
        this.defaultHeaders = {
            'Content-Type': 'application/json',
            ...defaultHeaders,
        }
    }

    public useRequestInterceptor(interceptor: (config: RequestConfig) => Promise<RequestConfig> | RequestConfig) {
        this.requestInterceptors.push(interceptor)
    }

    public useResponseInterceptor(interceptor: (response: Response) => Promise<Response> | Response) {
        this.responseInterceptors.push(interceptor)
    }

    private async request<T>(endpoint: string, options: RequestInit): Promise<T> {
        let config: RequestConfig = {
            url: this.baseUrl + endpoint,
            ...options,
            headers: {
                ...this.defaultHeaders,
                ...options.headers,
            },
        }

        for (const interceptor of this.requestInterceptors) {
            config = await interceptor(config)
        }

        const { url, ...fetchOptions } = config

        let respuesta = await fetch(url, fetchOptions)

        for (const interceptor of this.responseInterceptors) {
            respuesta = await interceptor(respuesta)
        }

        if (!respuesta.ok) {
            let detalle = ''

            try {
                const texto = await respuesta.text()
                if (texto) {
                    detalle = ` - ${texto}`
                }
            } catch {
                detalle = ''
            }

            throw new Error(`Error en la petición: ${respuesta.status} ${respuesta.statusText}${detalle}`)
        }

        const resultado = (await respuesta.json()) as T
        return resultado
    }

    public async post<T>(url: string, params: object, headers: object = {}): Promise<T> {
        return this.request<T>(url, {
            method: 'POST',
            headers: headers as HeadersInit,
            body: JSON.stringify(params),
            credentials: 'include',
        })
    }

    public async patch<T>(url: string, params: object, headers: object = {}): Promise<T> {
        return this.request<T>(url, {
            method: 'PATCH',
            headers: headers as HeadersInit,
            body: JSON.stringify(params),
            credentials: 'include',
        })
    }

    public async get<T>(url: string, params: Record<string, string | number | boolean> = {}, headers: object = {}): Promise<T> {
        const stringParams: Record<string, string> = {}
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                stringParams[key] = String(value)
            }
        })

        const query = new URLSearchParams(stringParams)
        const queryString = query.toString()

        if (queryString) {
            url += (url.includes('?') ? '&' : '?') + queryString
        }

        return this.request<T>(url, {
            method: 'GET',
            headers: headers as HeadersInit,
            credentials: 'include',
        })
    }
}