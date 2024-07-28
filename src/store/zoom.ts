import { create } from 'zustand';


type ZoomStore = {
  src: string,
  open: (src: string) => void;
  close: () => void
}
const useZoomStore = create<ZoomStore>((set) => ({
  src: '',
  open: (src: string) => set({ src }),
  close: () => set({ src: '' })
}))

export default useZoomStore