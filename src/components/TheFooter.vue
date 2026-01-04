<script setup lang="ts">
import BrandLogo from '@/assets/icon/logo-brand.svg'

import { navLinks, sosmeds } from '@/constants/navLink'
</script>

<template>
  <footer class="bg-white py-15 md:py-18 lg:rounded-t-[60px] lg:-mt-15">
    <main class="container-center">
      <div>
        <div>
          <div class="flex items-center -ml-3 md:ml-0">
            <img :src="BrandLogo" alt="logo-brand" />
            <span class="font-bold tracking-tight text-brand-dark text-5 md:text-6 2xl:text-7.5"
              >AI Innovation</span
            >
          </div>
        </div>
        <div class="pt-5 md:flex justify-between">
          <p class="text-par max-w-[415px]">
            Our proven methodology ensures that we delive impactful solutions tailored to your
            unique business needs.
          </p>
          <div class="md:flex flex-col justify-between items-end">
            <div class="py-7 md:py-0 flex items-center gap-5 text-par">
              <RouterLink v-for="link in navLinks" :key="link.name" :to="link.path">
                {{ link.name }}
              </RouterLink>
            </div>
            <div class="flex gap-5">
              <RouterLink v-for="sosmed in sosmeds" :key="sosmed.path" :to="sosmed.path">
                <img :src="sosmed.icon" alt="" />
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
      <hr class="border border-[#ddd] my-7 md:my-12" />
      <div class="md:flex justify-between text-par">
        <p class="pb-2 md:pb-0">
          nbase, All Rights Reserved,
          <RouterLink class="text-brand-primary" to="/">Licensing</RouterLink>
        </p>
        <span class="text-brand-primary!">Webflow Templates by 128.digitol Powered by Wenflow</span>
      </div>
    </main>
  </footer>
</template>
