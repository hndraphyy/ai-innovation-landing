<script setup lang="ts">
import type { ArticleCard } from '@/constants/highlight/articleContent'
import Button from '@/components/ui/Button.vue'

defineProps<ArticleCard>()
</script>

<template>
  <div class="rounded-[20px] flex flex-col rounded-7 bg-white">
    <div class="w-full h-full">
      <img :src="thumbnail" :alt="title" class="w-full rounded-t-7" />
    </div>
    <div class="p-8 lg:p-10">
      <span>{{ date }}</span>
      <h1 class="font-primary pt-7 pb-5 text-7">{{ title }}</h1>
      <p class="text-par">{{ desc }}</p>
      <div class="pt-8">
        <Button
          :to="btn.link"
          variant="outline"
          class="!text-[#767676] !border !border-[#767676]"
          >{{ btn.label }}</Button
        >
      </div>
    </div>
  </div>
</template>
