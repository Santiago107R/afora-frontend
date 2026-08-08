import { createSelectedEntityStore } from '@/admin/store/selectedEntityStore'
import type { Aula } from '@/user/types/aula.response'

export const useSelectedAulaStore = createSelectedEntityStore<Partial<Aula>>()
