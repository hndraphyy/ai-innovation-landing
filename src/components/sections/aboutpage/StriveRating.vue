<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { StriveContent } from '@/constants/aboutpage/striveContent'

gsap.registerPlugin(ScrollTrigger)
const props = defineProps<StriveContent>()
const displayPoints = ref(props.strivePoint.map(() => 0))

onMounted(() => {
  displayPoints.value = props.strivePoint.map(() => 0)

  setTimeout(() => {
    ScrollTrigger.refresh()

    props.strivePoint.forEach((item, index) => {
      gsap.to(displayPoints.value, {
        [index]: item.point,
        duration: 3,
        ease: 'power3.out',
        snap: { [index]: 1 },
        scrollTrigger: {
          trigger: '.text-22',
          start: 'top 95%',
          toggleActions: 'play none none none',
          id: `counter-${index}`,
        },
      })
    })
  }, 100)
})

onUnmounted(() => {
  const allTriggers = ScrollTrigger.getAll()
  allTriggers.forEach((trigger) => trigger.kill())
})
</script>

<template>
  <section class="bg-brand-dark pt-15 md:pt-30 lg:pt-45 xl:pt-60 md:-mt-30 py-20 lg:py-27 xl:py-40">
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
