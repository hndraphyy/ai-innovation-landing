<script setup lang="ts">
import HeroSection from '@/components/sections/aboutpage/HeroSection.vue'
import StriveRating from '@/components/sections/aboutpage/StriveRating.vue'
import WeEmbrace from '@/components/sections/highlight/WeEmbrace.vue'
import BrandCollabs from '@/components/sections/highlight/BrandCollabs.vue'
import ServiceSection from '@/components/sections/aboutpage/ServiceSection.vue'
import TextRunning from '@/components/sections/highlight/TextRunning.vue'
import OurTeamSection from '@/components/sections/aboutpage/OurTeamSection.vue'

import { HERO_CONTENT } from '@/constants/aboutpage/heroContent'
import { STRIVE_CONTENT } from '@/constants/aboutpage/striveContent'
import { WE_EMBRACE_CONTENT } from '@/constants/highlight/weEmbrace'
import { BRAND_COLLABS } from '@/constants/highlight/brandCollabs'
import { SERVICES_CONTENT } from '@/constants/aboutpage/serviceContent'
import { OUR_TEAM_CONTENT } from '@/constants/aboutpage/ourTeamContent'
</script>

<template>
  <HeroSection v-bind="HERO_CONTENT" />
  <StriveRating v-bind="STRIVE_CONTENT" />
  <WeEmbrace v-bind="WE_EMBRACE_CONTENT" Class="bg-brand-dark" />
  <BrandCollabs :brands="BRAND_COLLABS" />
  <ServiceSection v-bind="SERVICES_CONTENT" />
  <TextRunning />
  <OurTeamSection v-bind="OUR_TEAM_CONTENT" />
</template>
