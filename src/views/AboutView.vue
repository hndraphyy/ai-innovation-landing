<script setup lang="ts">
import HeroSection from '@/components/sections/aboutpage/HeroSection.vue'

import { HERO_CONTENT } from '@/constants/aboutpage/heroContent'
</script>

<template>
  <HeroSection v-bind="HERO_CONTENT" />
</template>
