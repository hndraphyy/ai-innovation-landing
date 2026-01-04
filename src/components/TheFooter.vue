<script setup lang="ts">
import BrandLogo from '@/assets/icon/logo-brand.svg'

import { navLinks } from '@/constants/navLink'
</script>

<template>
  <footer class="bg-white py-18 rounded-t-[60px] -mt-15">
    <main class="container-center">
      <div>
        <div>
          <div class="flex items-center">
            <img :src="BrandLogo" alt="logo-brand" />
            <span class="font-bold tracking-tight text-brand-dark text-5 md:text-6 2xl:text-7.5"
              >AI Innovation</span
            >
          </div>
        </div>
        <div class="pt-5 flex justify-between">
          <p class="text-par max-w-[415px]">
            Our proven methodology ensures that we delive impactful solutions tailored to your
            unique business needs.
          </p>
          <div class="flex flex-col justify-between items-end">
            <div class="flex items-center gap-5">
              <RouterLink v-for="link in navLinks" :key="link.name" :to="link.path">{{
                link.name
              }}</RouterLink>
            </div>
            <div class="flex gap-5">
              <div>
                <img :src="FacebookIcon" alt="" />
              </div>
              <div>
                <img :src="InstagramIcon" alt="" />
              </div>
              <div>
                <img :src="PinterestIcon" alt="" />
              </div>
              <div>
                <img :src="DribbbleIcon" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="border border-[#ddd] my-12" />
      <div class="flex justify-between text-par">
        <p>
          nbase, All Rights Reserved,
          <RouterLink class="text-brand-primary" to="/">Licensing</RouterLink>
        </p>
        <span class="text-brand-primary!">Webflow Templates by 128.digitol Powered by Wenflow</span>
      </div>
    </main>
  </footer>
</template>
