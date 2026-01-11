<script setup lang="ts">
import type { StriveContent } from '@/constants/aboutpage/striveContent'

defineProps<StriveContent>()
</script>

<template>
  <section class="bg-brand-dark pt-15 md:pt-30 lg:pt-45 xl:pt-60 md:-mt-30 lg:py-27 xl:py-40">
    <main class="container-center text-center">
      <h1 class="text-heading !text-white font-primary max-w-[767px] m-auto">{{ title }}</h1>
      <p class="text-par !text-white pt-4 pb-15">{{ description }}</p>
      <div class="flex justify-center items-center gap-15">
        <div v-for="(rate, index) in strivePoint" :key="index">
          <div class="!text-white">
            <h1 class="text-22 flex items-start gap-2">
              {{ rate.point }}<span class="text-10 text-brand-primary pt-3 font-bold">+</span>
            </h1>
            <span class="text-4">{{ rate.label }}</span>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>
