<script setup lang="ts">
import type { aiRevolution } from '@/constants/homepage/aiRevolutionContent'

defineProps<aiRevolution>()
</script>

<template>
  <section>
    <main class="container-center text-center py-20 md:py-30 lg:py-40">
      <div>
        <h1 class="text-heading m-auto leading-[30px] md:leading-[64px] lg:w-200">
          {{ title }}
          <span
            class="px-5 border border-brand-dark rounded-full bg-gradient-to-b from-[#F0EEFB] from-30% to-[#FFFFFF] to-61% text-brand-dark font-medium inline-block"
          >
            {{ spanTitle }}
          </span>
        </h1>
        <p class="text-par m-auto lg:w-200 pt-5 pb-8 md:pb-15">{{ description }}</p>
      </div>
      <div class="w-full">
        <img :src="image" alt="Ai-Revolution-Image" />
      </div>
    </main>
  </section>
</template>
