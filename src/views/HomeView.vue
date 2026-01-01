<script setup lang="ts">
import HeroSection from '@/components/sections/homepage/HeroSection.vue'
import OurMissionSection from '@/components/sections/homepage/OurMissionSection.vue'
import TextRunning from '@/components/sections/highlight/TextRunning.vue'
import AiRevolutionSection from '@/components/sections/homepage/AiRevolutionSection.vue'
import ServicesSection from '@/components/sections/homepage/ServicesSection.vue'
import WeEmbrace from '@/components/sections/highlight/WeEmbrace.vue'
import PricingSection from '@/components/sections/highlight/PricingSection.vue'
import OurSolutions from '@/components/sections/highlight/OurSolutions.vue'

import { HERO_CONTENT } from '@/constants/homepage/heroContent'
import { OUR_MISSIONS_CONTENT } from '@/constants/homepage/ourServices'
import { AI_REVOLUTION_CONTENT } from '@/constants/homepage/aiRevolutionContent'
import { SERVICES_CONENT } from '@/constants/homepage/servicesContent'
import { WE_EMBRACE_CONTENT } from '@/constants/highlight/weEmbrace'
import { PRICING_CONTENT } from '@/constants/highlight/pricing'
import { OUR_SOLUTIONS_CONTENT } from '@/constants/highlight/ourSolutions'
</script>

<template>
  <HeroSection v-bind="HERO_CONTENT" />
  <OurMissionSection v-bind="OUR_MISSIONS_CONTENT" />
  <TextRunning />
  <AiRevolutionSection v-bind="AI_REVOLUTION_CONTENT" />
  <ServicesSection :services="SERVICES_CONENT" />
  <WeEmbrace v-bind="WE_EMBRACE_CONTENT" />
  <PricingSection v-bind="PRICING_CONTENT" />
  <OurSolutions v-bind="OUR_SOLUTIONS_CONTENT" />
</template>
