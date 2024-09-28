import { create } from 'zustand'

interface IStoreState {
    visibleService: number,
    setVisibleService: (newId: number) => void
}

export const useSerivcePageDataStorage = create<IStoreState>((set) => ({
    visibleService: 0,
    setVisibleService: (newId: number) => set({ visibleService: newId })
}))

// interface IAdvantageItem {
//     id: number,
//     title: string,
//     about: string,
//     icon: string
// }

// interface IGalleryItem {
//     id: number,
//     photo: string
// }

// interface StoreState {
//     title: string,
//     subTitle: string,
//     about: string,
//     advantages: IAdvantageItem[],
//     gallery: IGalleryItem[],
//     setTitle: (title: string) => void,
//     setSubTitle: (subTitle: string) => void,
//     setAbout: (about: string) => void,
//     setAdvantages: (advantages: IAdvantageItem[]) => void,
//     setGallery: (gallery: IGalleryItem[]) => void,
//     clearState: () => void
// }

// export const useSerivcePageDataStorage = create<StoreState>((set) => ({
//     title: '',
//     subTitle: '',
//     about: '',
//     advantages: [],
//     gallery: [],
//     setTitle: (title: string) => set({ title: title }),
//     setSubTitle: (subTitle: string) => set({ subTitle: subTitle }),
//     setAbout: (about: string) => set({ about: about }),
//     setAdvantages: (advantages: IAdvantageItem[]) => set({ advantages: advantages }),
//     setGallery: (gallery: IGalleryItem[]) => set({ gallery: gallery }),
//     clearState: () => set({
//         title: '',
//         subTitle: '',
//         about: '',
//         advantages: [],
//         gallery: [],
//     })
// }))