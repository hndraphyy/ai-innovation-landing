<script setup lang="ts">
import type { weEmbrace } from '@/constants/highlight/weEmbrace'
import Button from '@/components/ui/Button.vue'

const props = defineProps<weEmbrace>()
</script>

<template>
  <section class="container-center py-20">
    <div class="bg-[#8176E8] rounded-5 p-8 lg:p-16 flex flex-col md:flex-row items-center gap-10">
      <div class="flex-1 text-white">
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
          >
            {{ btn.label }}
          </Button>
        </div>
      </div>

      <div
        class="w-full md:w-[400px] aspect-square bg-white/20 rounded-full flex items-center justify-center flex justify-center items-center"
      >
        <img :src="assets" alt="assets" />
      </div>
    </div>
  </section>
</template>
