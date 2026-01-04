<script setup lang="ts">
import BrandLogo from '@/assets/icon/logo-brand.svg'
import FacebookIcon from '@/assets/icon/footer/facebook.svg'
import InstagramIcon from '@/assets/icon/footer/instagram.svg'
import PinterestIcon from '@/assets/icon/footer/pinterest.svg'
import DribbbleIcon from '@/assets/icon/footer/dribbble.svg'
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
        <div class="pt-5">
          <p class="text-par max-w-[415px]">
            Our proven methodology ensures that we delive impactful solutions tailored to your
            unique business needs.
          </p>
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
