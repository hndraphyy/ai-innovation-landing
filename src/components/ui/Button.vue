<script setup lang="ts">
import type { btnProps } from '@/types/btnType'

const props = withDefaults(defineProps<btnProps>(), {
  label: 'Button',
  variant: 'primary',
})

const variantClasses = {
  primary:
    'bg-brand-primary text-white flex justify-center items-center border-2 border-brand-primary hover:border-brand-primaryHover hover:bg-brand-primaryHover',
  outline: 'border-2 border-white text-white',
  dark: 'bg-dark',
  none: '',
}

const baseClass =
  'font-primary decoration-none py-2.5 px-4 md:px-6 md:py-2 2xl:px-8 2xl:py-4 text-3 md:text-4 rounded-[30px] cursor-pointer relative z-2 transition-500'
</script>

<template>
  <component
    :is="to ? 'RouterLink' : 'button'"
    :to="to"
    :class="[baseClass, variantClasses[variant]]"
  >
    <slot>{{ label }}</slot>
  </component>
</template>
