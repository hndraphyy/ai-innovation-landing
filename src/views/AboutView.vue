<script setup lang="ts">
import HeroSection from '@/components/sections/aboutpage/HeroSection.vue'
import StriveRating from '@/components/sections/aboutpage/StriveRating.vue'

import { HERO_CONTENT } from '@/constants/aboutpage/heroContent'
import { STRIVE_CONTENT } from '@/constants/aboutpage/striveContent'
</script>

<template>
  <HeroSection v-bind="HERO_CONTENT" />
  <StriveRating v-bind="STRIVE_CONTENT" />
</template>
