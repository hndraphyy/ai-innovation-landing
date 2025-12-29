<script setup lang="ts">
import { OUR_MISSIONS_CONTENT } from '@/constants/homepage/ourServices'
import CardOurMission from '@/components/cards/CardOurMission.vue'
</script>

<template>
  <section class="relative md:rounded-t-15 md:-mt-15 z-10 bg-white font-display">
    <main class="container-center py-17 md:py-30 lg:py-36 2xl:mb-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mb-13">
        <h1 class="text-heading text-center md:text-start" v-html="OUR_MISSIONS_CONTENT.title"></h1>
        <p class="text-par text-center md:text-start">{{ OUR_MISSIONS_CONTENT.description }}</p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <CardOurMission
          v-for="(item, index) in OUR_MISSIONS_CONTENT.cardContent"
          :key="index"
          :title="item.title"
          :desc="item.desc"
        />
      </div>
    </main>
  </section>
</template>
