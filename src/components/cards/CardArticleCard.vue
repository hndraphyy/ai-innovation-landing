<script setup lang="ts">
import type { ArticleCard } from '@/constants/highlight/articleContent'
import Button from '@/components/ui/Button.vue'

defineProps<ArticleCard>()
</script>

<template>
  <div
    :class="[
      'p-8 lg:p-10 rounded-[20px] flex flex-col gap-8 transition-all duration-300 hover:scale-[1.03]',
    ]"
  >
    <Button> Buy Now </Button>
  </div>
</template>
