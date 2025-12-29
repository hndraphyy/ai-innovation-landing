<script setup lang="ts">
import { AI_REVOLUTION_CONTENT } from '@/constants/homepage/aiRevolutionContent'
import type { aiRevolution } from '@/constants/homepage/aiRevolutionContent'

defineProps<aiRevolution>()
</script>

<template>
  <section>
    <main>
      <h1 v-html="AI_REVOLUTION_CONTENT.title"></h1>
    </main>
  </section>
</template>
