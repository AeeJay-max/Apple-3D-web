import { create } from 'zustand';

const useiPadStore = create((set) => ({
    color: '#2e2c2e',
    setColor: (color) => set({ color }),

    scale: 0.08,
    setScale: (scale) => set({ scale }),

    texture: '/assets/mac_Assets/videos/feature-1.mp4',
    setTexture: (texture) => set({ texture }),

    reset: () =>
        set({
            color: '2e2c2e',
            scale: 0.08,
            texture: '/assets/mac_Assets/videos/feature-1.mp4',
        }),

    colorName: 'Silver',
    setColorName: (colorName) => set({ colorName }),
}));

export default useiPadStore;
