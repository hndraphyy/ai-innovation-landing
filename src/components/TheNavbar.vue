<script setup lang="ts">
import { ref } from 'vue'

import logoBrand from '@/assets/icon/logo-brand.svg'
import iconMenu from '@/assets/icon/navbar/menu-white.svg'
import iconX from '@/assets/icon/navbar/icon-x.svg'
import Button from '@/components/ui/Button.vue'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
]

const isOpen = ref(false)
</script>

<template>
  <nav
    class="fixed z-99 top-0 left-0 right-0 h-20 2xl:h-25 flex items-center bg-brand-dark backdrop-blur-md font-display z-100 border-b border-white/5"
  >
    <div class="container-center flex justify-between items-center bg-transparent">
      <RouterLink
        to="/"
        class="flex items-center color-white decoration-none text-6 2xl:text-7.5 gap-1 lg:gap-3"
      >
        <img :src="logoBrand" alt="Logo" />
        <span class="font-bold tracking-tight">AI Innovation</span>
      </RouterLink>

      <div class="hidden md:flex items-center gap-9">
        <RouterLink
          v-for="link in navLinks"
          :key="link.name"
          :to="link.path"
          class="text-white/80 hover:text-brand-primary decoration-none text-4 transition-colors font-medium"
        >
          {{ link.name }}
        </RouterLink>
      </div>

      <div class="flex items-center gap-4">
        <Button to="/contact" class="!hidden md:!flex"> Contact Us </Button>

        <button
          @click="isOpen = !isOpen"
          class="md:hidden cursor-pointer bg-transparent border-none flex items-center p-0 transition-transform active:scale-90"
        >
          <img :src="isOpen ? iconX : iconMenu" alt="Menu" class="w-6 h-6 object-contain" />
        </button>
      </div>
    </div>

    <Transition name="fade">
      <div
        v-if="isOpen"
        class="fixed top-20 inset-0 z-100 px-10 pt-6 flex flex-col h-dvh space-y-7 bg-brand-dark"
      >
        <RouterLink
          v-for="link in navLinks"
          :key="link.name"
          :to="link.path"
          @click="isOpen = false"
          class="text-white decoration-none text-5 font-medium hover:text-brand-primary"
        >
          {{ link.name }}
        </RouterLink>

        <Button to="/contact" @click="isOpen = false"> Contact Us </Button>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
