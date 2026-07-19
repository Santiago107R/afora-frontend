import type { Aula } from '@/user/types/aula.response'
import { create } from 'zustand'

type Store = {
  selectedAula: Partial<Aula> | null
  setSelectedAula: (aula: Partial<Aula>) => void
  clearSelectedAula: () => void
}

export const useSelectedAulaStore = create<Store>()((set) => ({
  selectedAula: null,
  setSelectedAula: (aula) => set({ selectedAula: aula }),
  clearSelectedAula: () => set({ selectedAula: null }),
}))