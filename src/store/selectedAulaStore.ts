import { createSelectedEntityStore } from '@/admin/store/selectedEntityStore'
import type { Aula } from '@/interfaces/aula.response'

export const useSelectedAulaStore = createSelectedEntityStore<Partial<Aula>>()
