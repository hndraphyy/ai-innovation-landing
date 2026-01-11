<script setup lang="ts">
import HeroSection from '@/components/sections/aboutpage/HeroSection.vue'
import StriveRating from '@/components/sections/aboutpage/StriveRating.vue'
import WeEmbrace from '@/components/sections/highlight/WeEmbrace.vue'

import { HERO_CONTENT } from '@/constants/aboutpage/heroContent'
import { STRIVE_CONTENT } from '@/constants/aboutpage/striveContent'
import { WE_EMBRACE_CONTENT } from '@/constants/highlight/weEmbrace'
</script>

<template>
  <HeroSection v-bind="HERO_CONTENT" />
  <StriveRating v-bind="STRIVE_CONTENT" />
  <WeEmbrace v-bind="WE_EMBRACE_CONTENT" Class="bg-brand-dark" />
</template>
