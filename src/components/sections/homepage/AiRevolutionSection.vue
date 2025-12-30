<script setup lang="ts">
import type { aiRevolution } from '@/constants/homepage/aiRevolutionContent'

defineProps<aiRevolution>()

const getImgStyle = (index: number) => {
  const common = 'transition-all duration-500 ease-in-out'
  const styles = [
    `${common} -mr-1.5 md:-mr-4 z-2 hover:z-4 hover:scale-[1.08] hover:-rotate-13`,
    `${common} -mx-1.5 md:-mx-6 z-1 hover:z-4 hover:scale-[1.08] hover:-rotate-13`,
    `${common} -mx-2 md:-mx-8 z-2 hover:z-4 hover:scale-[1.08] hover:-rotate-13`,
    `${common} -mx-1.5 md:-mx-6 z-3 hover:z-5 hover:scale-[1.08] hover:rotate-13`,
    `${common} -ml-1.5 md:-ml-4 z-4 hover:z-4 hover:scale-[1.08] hover:rotate-13`,
  ]
  return styles[index] || ''
}
</script>

<template>
  <section>
    <main class="container-center text-center py-25 md:py-30 lg:py-40">
      <div>
        <h1 class="text-heading m-auto leading-[30px] md:leading-[64px] lg:w-200">
          {{ title }}
          <span
            class="text-heading px-2 md:px-5 border border-brand-dark rounded-full bg-gradient-to-b from-[#F0EEFB] from-30% to-[#FFFFFF] to-61% text-brand-dark font-medium inline-block"
          >
            {{ spanTitle }}
          </span>
        </h1>
        <p class="text-par m-auto lg:w-200 pt-5 lg:pb-15">{{ description }}</p>
      </div>
      <div
        class="flex justify-center items-end gap-2 md:gap-4 overflow-hidden py-10 md:px-10 transition-transform duration-500"
      >
        <div v-for="(img, index) in images" :key="index" class="" :class="getImgStyle(index)">
          <div class="overflow-hidden">
            <img :src="img" :alt="`ai-img-${index}`" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </main>
  </section>
</template>
