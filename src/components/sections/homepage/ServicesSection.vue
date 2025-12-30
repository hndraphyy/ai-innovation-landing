<script setup lang="ts">
import { ref, computed } from 'vue'
import type { servicesContent } from '@/constants/homepage/servicesContent'
import ArrowRight from '@/assets/icon/homepage/arrow-right.svg'
import Button from '@/components/ui/Button.vue'

const props = defineProps<{
  services: servicesContent[]
}>()

const currentPage = ref(0)
const itemsPerPage = 4

const displayServices = computed(() => {
  const start = currentPage.value * itemsPerPage
  return props.services.slice(start, start + itemsPerPage)
})

const next = () => {
  if ((currentPage.value + 1) * itemsPerPage < props.services.length) {
    currentPage.value++
  }
}

const prev = () => {
  if (currentPage.value > 0) {
    currentPage.value--
  }
}
</script>

<template>
  <section class="md:py-25 2xl:py-30">
    <main class="container-center">
      <div class="flex justify-between items-center pb-5 md:pb-8 border-b border-[#DDDDDD]">
        <span class="text-brand-gray text-5 font-primary">Service</span>
        <div class="flex items-center gap-10">
          <span class="text-brand-gray text-5 hidden md:block">Overview</span>
          <div class="flex items-center gap-3">
            <Button
              @click="prev"
              :class="{ 'opacity-20 pointer-events-none': currentPage === 0 }"
              variant="none"
              class="px-10 border-1 border-gray-3 relative flex justify-center items-center h-[35px] w-[25px] md:h-[60px] md:w-[60px]"
            >
              <img class="absolute rotate-180" :src="ArrowRight" alt="Arrow-Right" />
            </Button>
            <Button
              @click="next"
              :class="{
                'opacity-20 pointer-events-none':
                  (currentPage + 1) * itemsPerPage >= services.length,
              }"
              variant="none"
              class="px-10 border-1 border-gray-3 relative flex justify-center items-center h-[35px] w-[25px] md:h-[60px] md:w-[60px]"
            >
              <img class="absolute" :src="ArrowRight" alt="Arrow-Right" />
            </Button>
          </div>
        </div>
      </div>
      <div
        v-for="(item, index) in displayServices"
        :key="index"
        class="py-5 md:py-10 lg:py-18 lg:px-12.5 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 border-b border-[#DDDDDD]"
      >
        <h1
          class="text-brand-dark text-xl md:text-7 lg:text-10 font-500 font-primary leading-[24px] md:leading-[45px]"
        >
          {{ item.title }}
        </h1>
        <div class="flex items-center gap-2">
          <p class="font-400 text-brand-gray">{{ item.description }}</p>
          <div class="lg:h-13 lg:w-15 rounded-xl bg-[#F6F7FF]"></div>
        </div>
      </div>
    </main>
  </section>
</template>
