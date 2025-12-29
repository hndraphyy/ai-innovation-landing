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
    // container
    'container-center': 'max-w-7xl 2xl:max-w-[1590px] m-auto w-full px-4 md:px-10',
    // link
    'logo-link': 'flex justify-start items-center color-white decoration-none gap-3 font-bold',
    'nav-link':
      'text-white/80 hover:text-brand-primary decoration-none text-4 transition-colors font-medium',
    // text
    'text-heading':
      'text-brand-dark font-500 leading-[24px] md:leading-[64px] text-lg md:text-[48px] -mt-3',
    'text-par': 'text-brand-gray font-400 leading-[15px] md:leading-[28px] text-3 md:text-lg',
  },
  transformers: [transformerDirectives()],
  theme: {
    colors: {
      brand: {
        primary: '#9588E8',
        dark: '#111111',
        gray: '#767676',
      },
    },
  },
})
