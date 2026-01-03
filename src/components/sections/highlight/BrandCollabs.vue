<script setup lang="ts">
import type { BrandCollab } from '@/constants/highlight/brandCollabs'

defineProps<{
  brands: BrandCollab[]
}>()
</script>

<template>
  <div class="bg-brand-dark">
    <div class="container-center">
      <div class="grid grid-cols-3 lg:grid-cols-6 py-2y md:py-10 border-t border-b border-[#eeee]">
        <div v-for="brand in brands" :key="brand.id" class="w-full h-auto">
          <img
            :src="brand.image"
            :alt="'Brand ' + brand.id"
            class="object-cover hover:scale-[1.05] duration-500 transition-transform"
          />
        </div>
      </div>
    </div>
  </div>
</template>
