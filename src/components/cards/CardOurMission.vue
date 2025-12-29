<script setup lang="ts">
defineProps<{
  title: string
  desc: string
}>()

import ActionIcon from '@/assets/icon/homepage/action-icon.svg'
</script>

<template>
  <div
    class="p-4 lg:p-8 border-2 border-gray-200 rounded-5 shadow-sm transition-all duration-500 cursor-pointer hover:bg-brand-primary hover:border-brand-primary group md:hover:translate-y-5"
  >
    <div class="flex justify-between items-start">
      <div
        class="bg-brand-primary group-hover:bg-white w-6 md:w-12 h-6 md:h-12 rounded-2 md:rounded-3 transition-colors"
      ></div>

      <img
        :src="ActionIcon"
        alt="action"
        class="opacity-0 group-hover:opacity-100 transition-opacity w-6 h-6"
      />
    </div>

    <h1
      class="md:text-6 font-semibold mb-2 py-3 md:py-5 font-primary transition-colors group-hover:text-white"
    >
      {{ title }}
    </h1>
    <p class="text-par transition-colors group-hover:text-white/90">
      {{ desc }}
    </p>
  </div>
</template>
