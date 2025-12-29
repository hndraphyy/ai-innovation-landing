<script setup lang="ts">
import HeroSection from '@/components/sections/homepage/HeroSection.vue'
import OurMissionSection from '@/components/sections/homepage/OurMissionSection.vue'
import TextRunning from '@/components/highlight/TextRunning.vue'
import AiRevolutionSection from '@/components/sections/homepage/AiRevolutionSection.vue'

import { HERO_CONTENT } from '@/constants/homepage/heroContent'
import { OUR_MISSIONS_CONTENT } from '@/constants/homepage/ourServices'
import { AI_REVOLUTION_CONTENT } from '@/constants/homepage/aiRevolutionContent'
</script>

<template>
  <HeroSection v-bind="HERO_CONTENT" />
  <OurMissionSection v-bind="OUR_MISSIONS_CONTENT" />
  <TextRunning />
  <AiRevolutionSection v-bind="AI_REVOLUTION_CONTENT" />
</template>
