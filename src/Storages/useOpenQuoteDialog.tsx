import { create } from 'zustand'

interface IStoreState {
    openQuoteDialog: boolean,
    setOpenQuoteDialog: (value: boolean) => void
}

export const useOpenQuoteDialog = create<IStoreState>((set) => ({
    openQuoteDialog: false,
    setOpenQuoteDialog: (value: boolean) => set({ openQuoteDialog: value })
}))