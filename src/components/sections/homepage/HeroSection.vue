<script setup lang="ts">
import BgShadowTop from '@/assets/images/homepage/bg-shadow-top.webp'
import BgShadowBottom from '@/assets/images/homepage/bg-shadow-bottom.webp'
import bgCorner1 from '@/assets/images/homepage/bg-corner-1.webp'
import bgCorner2 from '@/assets/images/homepage/bg-corner-2.webp'
import Img1 from '@/assets/images/homepage/img-1.webp'
import Img2 from '@/assets/images/homepage/img-2.webp'
import Img3 from '@/assets/images/homepage/img-3.webp'
import Img4 from '@/assets/images/homepage/img-4.webp'
import Img5 from '@/assets/images/homepage/img-5.webp'
import Button from '@/components/ui/Button.vue'

const heroImages = [Img1, Img2, Img3, Img4, Img5]
const getImageSizeClass = (index: number) => {
  if (index === 2) return 'w-60 2xl:w-77'
  if (index === 1 || index === 3) return 'w-40 2xl:w-55'
  return 'w-28 2xl:w-35'
}
</script>

<template>
  <section
    class="bg-brand-dark relative pt-20 bg-no-repeat bg-bottom h-10000"
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
          class="text-white text-xl md:text-6xl 2xl:text-[80px] font-500 leading-[24px] md:leading-[80px] 2xl:leading-[107px]"
        >
          EMPOWERING <br />
          INNOVATION THROUGH AI
        </h1>
        <p
          class="text-white text-[15px] md:text-[17px] 2xl:text-xl md:w-160 2xl:w-200 m-auto font-400 pb-8 pt-3"
        >
          Transforming industries by delivering innovative Al solutions that drive success and
          create value for businesses of all sizes.
        </p>
      </div>
      <div class="flex justify-center items-center gap-3">
        <Button>Contact Us</Button>
        <Button variant="outline">Explore Details</Button>
      </div>
    </main>
    <div class="relative z-2 flex justify-around items-end pt-13 2xl:pt-15 pb-30">
      <div
        v-for="(img, index) in heroImages"
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
