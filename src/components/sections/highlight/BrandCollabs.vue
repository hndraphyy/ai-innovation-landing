<script setup lang="ts">
import { BRAND_COLLABS, type BrandCollab } from '@/constants/highlight/brandCollabs'
</script>

<template>
  <div class="bg-brand-dark">
    <div class="container-center flex py-10 border-t border-b border-[#eeee]">
      <div v-for="brand in BRAND_COLLABS" :key="brand.id" class="w-full h-auto">
        <img :src="brand.image" :alt="brand.title" class="object-cover" />
      </div>
    </div>
  </div>
</template>
