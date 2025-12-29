<script setup lang="ts">
import LogoBrand from '@/assets/icon/logo-brand.svg'
</script>

<template>
  <div
    class="bg-brand-dark py-3 lg:py-5 2xl:py-8 overflow-hidden whitespace-nowrap border-y border-white/10"
  >
    <div class="flex items-center gap-5 2xl:gap-8.5 animate-marquee w-max">
      <div v-for="i in 4" :key="i" class="flex items-center gap-1 md:gap-2">
        <img :src="LogoBrand" alt="Logo-Brand" class="w-10 md:w-auto" />
        <h2 class="text-5 lg:text-7 2xl:text-10 text-white tracking-tighter uppercase">
          Be part of a thriving community, contact us!
        </h2>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-marquee {
  display: flex;
  animation: marquee 25s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee:hover {
  animation-play-state: paused;
}
</style>
