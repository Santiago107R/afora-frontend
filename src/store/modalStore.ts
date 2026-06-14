import type { Aula } from '@/user/types/clase.response'
import { create } from 'zustand'

type Store = {
  selectedAula: Partial<Aula> | null
  openModal: (aula: Partial<Aula>) => void
  closeModal: () => void
}

export const useModalStore = create<Store>()((set) => ({
  selectedAula: null,
  openModal: (aula) => set({ selectedAula: aula }),
  closeModal: () => set({ selectedAula: null }),
}))