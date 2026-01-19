<script setup lang="ts">
import type { ArticleType } from '@/constants/highlight/articleContent'
import Button from '@/components/ui/Button.vue'

defineProps<ArticleType>()
</script>

<template>
  <section class="relative pb-10 md:pb-35 lg:pb-30 2xl:pb-40 pt-10 lg:pt-25 bg-white">
    <main class="container-center">
      <div class="flex justify-between items-center flex-col md:flex-row">
        <div class="text-center md:text-start">
          <h1 class="text-heading font-primary">{{ title }}</h1>
          <p class="text-par md:max-w-[507px] lg:max-w-[667px] pt-6">{{ description }}</p>
        </div>
        <div class="pt-10 lg:pt-0">
          <Button :to="btn.link" variant="dark">{{ btn.label }}</Button>
        </div>
      </div>
    </main>
  </section>
</template>
