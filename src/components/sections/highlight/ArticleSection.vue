<script setup lang="ts">
import type { ArticleType } from '@/constants/highlight/articleContent'
import Button from '@/components/ui/Button.vue'
import CardArticleCard from '@/components/cards/CardArticleCard.vue'

defineProps<ArticleType>()
</script>

<template>
  <section class="pb-10 md:pb-45 2xl:pb-50 pt-10 md:pt-45 2xl:pt-50 bg-brand-dark">
    <main class="container-center">
      <div class="flex justify-between items-center flex-col md:flex-row">
        <div class="text-center md:text-start">
          <h1 class="text-heading !text-white font-primary">{{ title }}</h1>
          <p class="text-par !text-white md:max-w-[507px] lg:max-w-[667px] pt-6">
            {{ description }}
          </p>
        </div>
        <div class="pt-10 lg:pt-0">
          <Button :to="btn.link" variant="primary">{{ btn.label }}</Button>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-5 pt-20">
        <CardArticleCard v-for="(card, index) in cards" :key="index" v-bind="card" />
      </div>
    </main>
  </section>
</template>
