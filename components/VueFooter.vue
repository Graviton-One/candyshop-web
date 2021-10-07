<template>
  <footer class="flex-shrink-0 relative py-[28px] bg-[#E7FCFF] h-[210px]">
    <div class="container flex">
      <div class="hidden lg:flex mr-[90px]">
        <img src="~/assets/img/interface/logo_footer.svg" alt="CandyShop">
      </div>

      <div class="flex">
        <div class="flex-col mx-[45px] leading-6">
          <div>
            <div class="block font-medium text-sm">Info</div>
            <a href="#" class="block text-[#7B999D] text-[13px] no-underline hover:underline">About</a>
            <a href="#" class="block text-[#7B999D] text-[13px] no-underline hover:underline">Analytics charts</a>
          </div>
        </div>
        <div class="flex-col mx-[45px] leading-6">
          <div>
            <div class="block font-medium text-sm">Resourses</div>
            <a href="#" class="block text-[#7B999D] text-[13px] no-underline hover:underline">Docs</a>
            <a href="#" class="block text-[#7B999D] text-[13px] no-underline hover:underline">FAQ</a>
            <a href="#" class="block text-[#7B999D] text-[13px] no-underline hover:underline">Blog</a>
            <a href="#" class="block text-[#7B999D] text-[13px] no-underline hover:underline">Github</a>
          </div>
        </div>
        <div class="flex-col mx-[45px] leading-6">
          <div>
            <div class="block font-medium text-sm">Help</div>
            <a href="#" class="block text-[#7B999D] text-[13px] no-underline hover:underline">Support</a>
          </div>
        </div>
      </div>

      <div class="flex  mx-[45px] mr-auto">
        <div v-for="(social, socialKey) in socials" :key="socialKey" class="text-2xl px-5">
          <social-link :href="social.href" :icon="social.icon" class="text-[#2400FF] hover:text-magenta" />
        </div>
      </div>
      <div class="flex">
        <div class="text-[#7B999D] text-xs font-medium">© 2021 Candy Shop</div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    socials() {
      return this.$store.getters["app/menu"].socials;
    }
  }
})
</script>
