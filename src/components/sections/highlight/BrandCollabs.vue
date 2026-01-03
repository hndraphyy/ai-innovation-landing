<script setup lang="ts">
import { BRAND_COLLABS, type BrandCollab } from '@/constants/highlight/brandCollabs'
</script>

<template>
  <div>
    <div v-for="brand in BRAND_COLLABS" :key="brand.id">
      <img :src="brand.image" :alt="brand.title" />
    </div>
  </div>
</template>
