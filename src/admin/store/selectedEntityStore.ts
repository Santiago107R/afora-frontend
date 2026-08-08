import type { Aula } from '@/user/types/aula.response'
import { create } from 'zustand'

export type SelectedEntityStore<T> = {
  selectedEntity: T | null
  isEntitySelected: boolean
  setEntity: (entity?: T | null) => void
  clearEntity: () => void
}

export const createSelectedEntityStore = <T>() =>
  create<SelectedEntityStore<T>>()((set) => ({
    selectedEntity: null,
    isEntitySelected: false,
    setEntity: (entity = null) => set({ selectedEntity: entity, isEntitySelected: true }),
    clearEntity: () => set({ selectedEntity: null, isEntitySelected: false }),
  }))

export const useSelectedAulaStore = createSelectedEntityStore<Partial<Aula>>()