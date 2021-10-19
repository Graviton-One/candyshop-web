<template>
  <footer  style="background: linear-gradient(260.18deg, #FB2EFF 24.15%, #7736FF 59.59%);">
    <div class="container flex">
      <div class="flex mr-[90px]">
        <img alt="CandyShop"
             src="~/assets/img/interface/logo_footer.svg">
      </div>

      <div class="hidden lg:flex py-[50px] text-white leading-[26px] ">
        <div class="flex-col mx-[45px] leading-6">
          <div class="">
            <a class="block font-bold text-sm "
               href="#">Info
            </a>
            <a class="block text-[13px]"
               href="#">About
            </a>
            <a class="block text-[13px]"
               href="#">Analytics charts
            </a>
          </div>
        </div>
        <div class="flex-col mx-[45px] leading-6">
          <p>
            <a class="block font-bold text-sm"
               href="#">Resourses
            </a>
            <a class="block text-[13px]"
               href="#">Docs
            </a>
            <a class="block text-[13px]"
               href="#">FAQ
            </a>
            <a class="block text-[13px]"
               href="#">Blog
            </a>
            <a class="block text-[13px]"
               href="#">Github
            </a>
          </p>
        </div>
        <div class="flex-col mx-[45px] leading-6">
          <p>
            <a class="block font-bold text-sm"
               href="#">Help
            </a>
            <a class="block text-[13px]"
               href="#">Support
            </a>
          </p>
        </div>
      </div>

      <div class="flex items-center mx-[45px] mr-auto">
        <div v-for="(social, socialKey) in socials"
             :key="socialKey"
             class="text-2xl px-5">
          <social-link :href="social.href"
                       :icon="social.icon"
                       class="text-white hover:text-magenta"/>
        </div>
      </div>
      <div class="flex items-center">
        <p class="text-white text-xs font-medium">© 2021 Candy Shop</p>
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
