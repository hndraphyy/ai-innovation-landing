<script setup lang="ts">
defineProps<{
  title: string
  desc: string
}>()
</script>

<template>
  <div class="p-4 lg:p-8 border-2 border-gray-200 rounded-5 shadow-sm">
    <div class="bg-brand-primary w-6 md:w-12 h-6 md:h-12 rounded-2 md:rounded-3"></div>
    <h1 class="text-xl font-semibold mb-2 py-3 md:py-5 font-primary">{{ title }}</h1>
    <p class="text-par">
      {{ desc }}
    </p>
  </div>
</template>
