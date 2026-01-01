<script setup lang="ts">
import type { PricingType } from '@/constants/highlight/pricing'
import PricingCardComponent from '@/components/cards/PricingCard.vue'

defineProps<PricingType>()
</script>

<template>
  <section class="relative py-20 lg:py-30 md:!pb-42 md:rounded-b-[60px] md:-mb-15 bg-white">
    <main class="container-center">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-0 lg:gap-10 mb-20 items-center">
        <h2 class="text-heading max-w-lg text-center md:text-start pb-4 md:pb-0">{{ title }}</h2>
        <p class="text-par text-center md:text-start">{{ description }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PricingCardComponent v-for="(card, index) in cards" :key="index" v-bind="card" />
      </div>
    </main>
  </section>
</template>
