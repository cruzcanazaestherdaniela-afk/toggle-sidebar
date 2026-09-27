import { create } from 'zustand';

const useSidebarStore = create((set) => ({
    abierto: true,

    toggleSidebar: () => set((state) => ({
        abierto: !state.abierto
    }))
}));

export default useSidebarStore;