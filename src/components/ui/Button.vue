<script setup lang="ts">
import type { btnProps } from '@/types/btnType'

const props = withDefaults(defineProps<btnProps>(), {
  label: 'Button',
  variant: 'primary',
})

const variantClasses = {
  primary: 'bg-brand-primary text-white flex justify-center items-center',
  outline: '',
  dark: 'bg-green',
}

const baseClass = 'font-primary decoration-none px-6 py-3 2xl:px-8 2xl:py-4 text-4 rounded-[30px]'
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
