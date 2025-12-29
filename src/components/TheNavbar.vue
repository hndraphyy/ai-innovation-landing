<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
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
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 8
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 h-20 2xl:h-25 flex items-center font-display z-100 transition-all duration-100"
    :class="[isScrolled || isOpen ? 'bg-brand-dark' : 'bg-transparent']"
  >
    <div class="container-center flex justify-between items-center w-full">
      <RouterLink
        to="/"
        class="flex items-center text-white decoration-none text-5 md:text-6 2xl:text-7.5 gap-2 md:gap-3"
      >
        <img :src="logoBrand" alt="Logo" class="w-10 md:w-12" />
        <span class="font-bold tracking-tight">AI Innovation</span>
      </RouterLink>

      <div class="hidden md:flex items-center gap-9">
        <RouterLink
          v-for="link in navLinks"
          :key="link.name"
          :to="link.path"
          class="text-white/80 hover:text-white decoration-none text-4 transition-colors font-medium"
        >
          {{ link.name }}
        </RouterLink>
      </div>

      <div class="flex items-center gap-4">
        <Button to="/contact" class="!hidden md:!flex"> Contact Us </Button>

        <button
          @click="isOpen = !isOpen"
          class="md:hidden cursor-pointer bg-transparent border-none flex items-center p-2"
        >
          <img :src="isOpen ? iconX : iconMenu" alt="Menu" class="w-6 h-6" />
        </button>
      </div>
    </div>

    <Transition name="fade">
      <div
        v-if="isOpen"
        class="fixed top-20 inset-0 z-90 px-5 pt-6 flex flex-col space-y-7 bg-brand-dark h-screen"
      >
        <RouterLink
          v-for="link in navLinks"
          :key="link.name"
          :to="link.path"
          @click="isOpen = false"
          class="text-white decoration-none text-xl font-medium"
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
  transform: translateY(-20px);
}
</style>
