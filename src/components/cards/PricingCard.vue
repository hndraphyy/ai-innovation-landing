<script setup lang="ts">
import type { PricingCard } from '@/constants/highlight/pricing'
import Button from '@/components/ui/Button.vue'

defineProps<PricingCard>()
</script>

<template>
  <div
    :class="[
      'p-8 lg:p-10 rounded-[20px] flex flex-col gap-8 transition-all duration-300 hover:scale-[1.03]',
      isPopular
        ? 'bg-brand-primary text-white shadow-xl'
        : 'bg-white border border-[#F1F1F1] text-brand-dark',
    ]"
  >
    <div class="flex justify-between items-start">
      <span class="text-lg font-500">{{ membershipName }}</span>
      <span
        v-if="discount"
        class="bg-white text-black px-2 md:px-3 py-1 rounded-full text-lg font-400 text-center"
      >
        {{ discount }}
      </span>
    </div>

    <div class="flex items-end gap-1">
      <span class="text-5xl font-600">${{ price }}</span>
      <span class="pb-2 text-lg">/month</span>
    </div>

    <p class="text-sm leading-relaxed opacity-80">{{ benefitTitle }}</p>

    <ul
      :class="['p-6 rounded-2xl flex flex-col gap-4', isPopular ? 'bg-white/20' : 'bg-[#F6F7FF]']"
    >
      <li v-for="feature in features" :key="feature" class="flex items-center gap-3 text-sm">
        <div :class="['w-1.5 h-1.5 rounded-full', isPopular ? 'bg-white' : 'bg-black']"></div>
        {{ feature }}
      </li>
    </ul>

    <Button
      :variant="isPopular ? 'dark' : 'primary'"
      class="w-full py-4 rounded-full font-600"
      :class="isPopular ? 'bg-black text-white' : 'bg-[#8176E8] text-white'"
    >
      Buy Now
    </Button>
  </div>
</template>
