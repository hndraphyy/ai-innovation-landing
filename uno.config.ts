import {
  defineConfig,
  presetWind3,
  presetAttributify,
  presetIcons,
  transformerDirectives,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    presetAttributify(),
    presetIcons(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        display: [
          {
            name: 'Inter',
            weights: ['400', '500', '600', '700'],
          },
        ],
        primary: [
          {
            name: 'Poppins',
            weights: ['400', '500', '600', '700', '800'],
          },
        ],
      },
    }),
  ],
  shortcuts: {
    'container-center': 'max-w-7xl 2xl:max-w-[1590px] m-auto w-full px-6',
    'nav-link':
      'text-white/80 hover:text-brand-primary decoration-none text-4 transition-colors font-medium',
    'logo-link': 'flex justify-start items-center color-white decoration-none gap-3 font-bold',
  },
  transformers: [transformerDirectives()],
  theme: {
    colors: {
      brand: {
        primary: '#9588E8',
        dark: '#111111',
      },
    },
  },
})
