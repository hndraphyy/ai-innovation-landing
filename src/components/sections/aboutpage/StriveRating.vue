<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import type { StriveContent } from '@/constants/aboutpage/striveContent'

const props = defineProps<StriveContent>()

const displayPoints = ref(props.strivePoint.map(() => 0))

onMounted(() => {
  props.strivePoint.forEach((item, index) => {
    gsap.to(displayPoints.value, {
      [index]: item.point,
      duration: 3,
      ease: 'power3.out',
      snap: { [index]: 1 },
    })
  })
})
</script>

<template>
  <section class="bg-brand-dark pt-15 md:pt-30 lg:pt-45 xl:pt-60 md:-mt-30 lg:py-27 xl:py-40">
    <main class="container-center text-center">
      <h1 class="text-heading !text-white font-primary max-w-[767px] m-auto">{{ title }}</h1>
      <p class="text-par !text-white pt-4 pb-15 max-w-[971px] m-auto">{{ description }}</p>
      <div class="flex flex-wrap justify-center items-center gap-15">
        <div v-for="(rate, index) in strivePoint" :key="index">
          <div class="!text-white">
            <h1 class="text-22 flex items-start gap-2">
              {{ displayPoints[index] }}
              <span class="text-10 text-brand-primary pt-3 font-bold">+</span>
            </h1>
            <span class="text-4">{{ rate.label }}</span>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>
