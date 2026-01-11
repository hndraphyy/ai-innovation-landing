<script setup lang="ts">
import type { HeroContent } from '@/constants/aboutpage/heroContent'
import logoBrand from '@/assets/icon/logo-brand.svg'
import ArrowRight from '@/assets/icon/arrow-right-dark.svg'
import Button from '@/components/ui/Button.vue'

defineProps<HeroContent>()
</script>

<template>
  <section
    class="bg-white relative my-15 2xl:mt-20 lg:py-10 lg:py-12 xl:py-20 2xl:py-28 pt-10 md:!pb-20 lg:!pb-30 2xl:!pb-60 bg-no-repeat bg-bottom z-1 font-display md:rounded-b-[60px]"
  >
    <main class="container-center flex justify-center items-center">
      <div class="flex justify-center items-center gap-18 2xl:gap-25 flex-col lg:flex-row">
        <div
          class="font-primary text-[27px] md:text-[50px] lg:text-[60px] 2xl:text-[88px] flex flex-col"
        >
          <span class="flex gap-3 lg:gap-5">
            WE PUSH <img class="w-7 lg:w-10 lg:w-auto" :src="ArrowRight" alt="arrow-right" />
          </span>
          <span
            class="flex justify-center rounded-30 px-5 border-2 border-[#ddd] my-2 lg:my-0 !px-11"
          >
            THE <img class="w-7 md:w-auto" :src="logoBrand" alt="logo-brand" /> BOUNDARIES
          </span>
          <span>OF WHAT'S POSSIBLE</span>
          <hr class="border border-[#ddd] mt-7 lg:mt-15 mb-7 lg:mb-8" />
          <div class="flex flex-wrap gap-5 justify-center">
            <div v-for="(labelName, index) in capabilities" :key="index" class="font-primary">
              <div
                class="flex items-center gap-3 border-1.5 border-[#bbb] px-3 2xl:px-4 py-2 2xl:py-3 rounded-[60px]"
              >
                <div class="bg-brand-primary rounded-[6px] w-5 h-5"></div>
                <span class="text-[15px] lg:text-[18px]">{{ labelName.title }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-brand-primary rounded-5 p-7 text-white lg:max-w-[372px]">
          <h2 class="text-[20px] md:text-[25px] lg:text-[32px] lg:pt-28">{{ title }}</h2>
          <p class="text-[12px] md:text-[15px] lg:text-xl pt-5 pb-12">{{ description }}</p>
          <Button variant="dark" :to="buttons.link">{{ buttons.label }}</Button>
        </div>
      </div>
    </main>
  </section>
</template>
