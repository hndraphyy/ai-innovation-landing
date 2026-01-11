<script setup lang="ts">
import type { HeroContent } from '@/constants/aboutpage/heroContent'
import logoBrand from '@/assets/icon/logo-brand.svg'
import ArrowRight from '@/assets/icon/arrow-right-dark.svg'
import Button from '@/components/ui/Button.vue'

defineProps<HeroContent>()
</script>

<template>
  <section
    class="bg-white relative my-15 2xl:mt-20 md:py-10 lg:py-16 2xl:py-28 bg-no-repeat bg-bottom z-1 font-display"
  >
    <main class="container-center flex justify-center items-center">
      <div class="flex justify-center items-center gap-24">
        <div
          class="font-primary text-[27px] md:text-[50px] lg:text-[70px] 2xl:text-[88px] flex flex-col"
        >
          <span class="flex gap-3 md:gap-5">
            WE PUSH <img class="w-7 md:w-10 lg:w-auto" :src="ArrowRight" alt="arrow-right" />
          </span>
          <span class="flex justify-center rounded-30 border-2 border-[#ddd] px-2 my-2 md:my-0">
            THE <img class="w-7 md:w-auto" :src="logoBrand" alt="logo-brand" /> BOUNDARIES
          </span>
          <span>OF WHAT'S POSSIBLE</span>
        </div>
        <div class="bg-brand-primary rounded-5 p-7 text-white max-w-[372px]">
          <h2 class="text-[32px] pt-28">{{ title }}</h2>
          <p class="text-xl pt-5 pb-12">{{ description }}</p>
          <Button variant="dark" :to="buttons.link">{{ buttons.label }}</Button>
        </div>
      </div>
    </main>
  </section>
</template>
