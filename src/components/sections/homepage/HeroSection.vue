<script setup lang="ts">
import { HERO_CONTENT } from '@/constants/homepage/heroContent'
import BgShadowTop from '@/assets/images/homepage/bg-shadow-top.webp'
import BgShadowBottom from '@/assets/images/homepage/bg-shadow-bottom.webp'
import bgCorner1 from '@/assets/images/homepage/bg-corner-1.webp'
import bgCorner2 from '@/assets/images/homepage/bg-corner-2.webp'
import Button from '@/components/ui/Button.vue'

const getImageSizeClass = (index: number) => {
  if (index === 2) return 'w-16 md:w-35 lg:w-60 2xl:w-77'
  if (index === 1 || index === 3) return 'w-12.5 md:w-25 lg:w-40 2xl:w-55'
  return 'w-8.5 md:w-15 lg:w-28 2xl:w-35'
}
</script>

<template>
  <section
    class="bg-brand-dark relative pt-20 pb-15 md:pb-40 lg:pb-50 bg-no-repeat bg-bottom z-1"
    :style="{
      backgroundImage: `url(${BgShadowBottom})`,
      backgroundSize: '100% auto',
      backgroundPosition: 'center bottom -800px',
    }"
  >
    <div class="relative">
      <div class="flex justify-center items-center">
        <img :src="BgShadowTop" alt="bg-shadow-top" class="absolute -top-30 z-0" />
      </div>
      <img
        :src="bgCorner1"
        alt="bg-corner-1"
        class="absolute -top-10 w-40 md:w-90 2xl:w-125 z-0 left-0"
      />
      <img
        :src="bgCorner2"
        alt="bg-corner-2"
        class="absolute -top-10 w-40 md:w-90 2xl:w-125 z-0 right-0"
      />
    </div>
    <main class="container-center pt-14 2xl:pt-20 text-center relative z-1">
      <div>
        <h1
          v-html="HERO_CONTENT.title"
          class="text-white text-xl md:text-4xl lg:text-6xl 2xl:text-[80px] font-500 leading-[24px] md:leading-[50px] lg:leading-[80px] 2xl:leading-[107px]"
        ></h1>
        <p
          class="text-white text-[15px] md:text-[17px] 2xl:text-xl px-5 md:px-0 md:w-160 2xl:w-200 m-auto font-400 pb-8 pt-3"
        >
          {{ HERO_CONTENT.description }}
        </p>
      </div>
      <div class="flex justify-center items-center gap-3">
        <Button>{{ HERO_CONTENT.buttons.primary }}</Button>
        <Button variant="outline">{{ HERO_CONTENT.buttons.secondary }}</Button>
      </div>
    </main>
    <div class="relative z-2 flex justify-around items-end pt-9.5 md:pt-13 2xl:pt-15">
      <div
        v-for="(img, index) in HERO_CONTENT.images"
        :key="index"
        class="transition-all duration-500 ease-in-out"
        :class="getImageSizeClass(index)"
      >
        <div class="rounded-full overflow-hidden aspect-square border-2 border-white/10 shadow-2xl">
          <img :src="img" :alt="`hero-img-${index}`" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>
</template>
