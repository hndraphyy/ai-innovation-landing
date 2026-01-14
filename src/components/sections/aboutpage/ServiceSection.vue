<script setup lang="ts">
import type { ServiceContent } from '@/constants/aboutpage/serviceContent'
import Button from '@/components/ui/Button.vue'

defineProps<ServiceContent>()
</script>

<template>
  <section class="relative py-20 lg:py-30 md:rounded-t-15 md:-mt-15 z-10 bg-white font-display">
    <main class="container-center">
      <div class="flex justify-between items-center flex-col md:flex-row">
        <div class="text-center md:text-start">
          <h1 class="text-heading">{{ title }}</h1>
          <p class="text-par max-w-[667px] pt-6">{{ description }}</p>
        </div>
        <div class="pt-10 md:pt-0">
          <Button :to="btn.link" variant="dark">{{ btn.label }}</Button>
        </div>
      </div>
      <div>
        
      </div>
    </main>
  </section>
</template>
