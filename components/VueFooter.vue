<template>
  <footer class="flex-shrink-0 relative py-4 bg-[#E7FCFF] h-[210px]">
    <div class="container flex">
      <div class="hidden lg:flex mr-[90px]">
        <img src="~/assets/img/interface/logo_footer.svg" alt="">
      </div>

      <div class="flex">
        <div class="flex-col mx-[45px] leading-6">
          <p>
            <a href="#" class="block font-medium text-sm">Info</a>
            <a href="#" class="block text-[#7B999D] text-[13px]">About</a>
            <a href="#" class="block text-[#7B999D] text-[13px]">Analytics charts</a>
          </p>
        </div>
        <div class="flex-col mx-[45px] leading-6">
          <p>
            <a href="#" class="block font-medium text-sm">Resourses</a>
            <a href="#" class="block text-[#7B999D] text-[13px]">Docs</a>
            <a href="#" class="block text-[#7B999D] text-[13px]">FAQ</a>
            <a href="#" class="block text-[#7B999D] text-[13px]">Blog</a>
            <a href="#" class="block text-[#7B999D] text-[13px]">Github</a>
          </p>
        </div>
        <div class="flex-col mx-[45px] leading-6">
          <p>
            <a href="#" class="block font-medium text-sm">Help</a>
            <a href="#" class="block text-[#7B999D] text-[13px]">Support</a>
          </p>
        </div>
      </div>

      <div class="flex  mx-[45px] mr-auto">
        <div v-for="(social, socialKey) in socials" :key="socialKey" class="text-2xl px-5">
          <social-link :href="social.href" :icon="social.icon" class="text-[#2400FF] hover:text-magenta" />
        </div>
      </div>
      <div class="flex">
        <p class="text-[#7B999D] text-xs font-medium">© 2021 Candy Shop</p>
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
