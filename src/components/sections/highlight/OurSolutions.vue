<script setup lang="ts">
import type { ourSolutions } from '@/constants/highlight/ourSolutions'
import Button from '@/components/ui/Button.vue'

const props = withDefaults(defineProps<ourSolutions>(), {
  Class: 'bg-brand-primary',
})
</script>

<template>
  <section class="pb-20 md:pb-35 lg:pb-50 pt-20 md:pt-55 lg:pt-65" :class="[Class]">
    <main class="container-center">
      <div
        class="bg-brand-primary rounded-5 p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-10 flex justify-between items-center"
      >
        <div class="text-white lg:max-w-[458px] 2xl:max-w-full">
          <h1
            class="text-center md:text-start text-white font-500 leading-[24px] md:leading-[48px] lg:leading-[64px] text-xl md:text-8 lg:text-[48px]"
          >
            {{ title }}
          </h1>
          <p
            class="text-center md:text-start text-white font-400 leading-[15px] md:leading-[21px] lg:leading-[28px] text-3 md:text-3.5 lg:text-lg max-w-2xl py-8"
          >
            {{ description }}
          </p>

          <div class="flex gap-4 justify-center md:justify-start">
            <Button
              v-for="(btn, index) in buttons"
              :key="index"
              :variant="index === 0 ? 'dark' : 'outline'"
              :to="btn.link"
              class="w-full md:w-[inherit]"
            >
              {{ btn.label }}
            </Button>
          </div>
        </div>

        <div class="text-brand-dark lg:max-w-[480px] p-5 lg:p-8 bg-white rounded-5">
          <p class="text-[16px] lg:text-[28px] pb-12.5">{{ solution }}</p>
          <div class="flex items-center gap-5">
            <div class="w-[32px] h-[32px] md:w-[64px] md:h-[64px]">
              <img :src="profile" :alt="nameUser" class="" />
            </div>
            <div>
              <p class="text-[12px] md:text-5 font-500">{{ nameUser }}</p>
              <span class="text-sm md:text-sm font-400">{{ titleUser }}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>
