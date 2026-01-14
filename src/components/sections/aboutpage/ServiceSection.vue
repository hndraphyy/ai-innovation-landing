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
          <p class="text-par md:max-w-[507px] lg:max-w-[667px] pt-6">{{ description }}</p>
        </div>
        <div class="pt-10 lg:pt-0">
          <Button :to="btn.link" variant="dark">{{ btn.label }}</Button>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 pt-10 lg:pt-8">
        <div v-for="(service, index) in services" :key="index">
          <div>
            <div class="p-5 lg:p-8 rounded-5 border border-[#DDD] h-full">
              <div class="w-8 h-8 rounded-[12px] bg-[#ddd]"></div>
              <h1 class="text-4 lg:text-6 2xl:text-9 font-primary py-2 md:py-4">
                {{ service.title }}
              </h1>
              <p class="text-par">{{ service.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>
