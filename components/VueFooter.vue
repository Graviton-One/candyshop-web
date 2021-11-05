<template>
  <footer  style="background: linear-gradient(260.18deg, #FB2EFF 24.15%, #7736FF 59.59%);">
    <div class="container flex flex-wrap md:flex-nowrap justify-center">
      <div class="flex mt-[30px]">
        <img alt="CandyShop"
             class="w-[160px] h-[106px]"
             src="~/assets/img/icons/logo.png">
      </div>

      <div class="hidden lg:flex py-[50px] text-white leading-[26px] ">
        <div class="flex-col mx-[45px] leading-6">
          <div class="">
            <a class="block no-underline hover:underline font-bold text-sm "
               href="#">Info
            </a>
            <a class="block no-underline hover:underline text-[13px]"
               href="#">About
            </a>
            <a class="block no-underline hover:underline text-[13px]"
               href="#">Analytics charts
            </a>
          </div>
        </div>
        <div class="flex-col mx-[45px] leading-6">
          <div>
            <a class="block no-underline hover:underline font-bold text-sm"
               href="#">Resourсes
            </a>
            <a class="block no-underline hover:underline text-[13px]"
               href="#">Docs
            </a>
            <a class="block no-underline hover:underline text-[13px]"
               href="#">FAQ
            </a>
            <a class="block no-underline hover:underline text-[13px]"
               href="#">Blog
            </a>
            <a class="block no-underline hover:underline text-[13px]"
               href="#">Github
            </a>
          </div>
        </div>
        <div class="flex-col md:mx-[45px] leading-6">
          <div>
            <a class="block no-underline hover:underline font-bold text-sm"
               href="#">Help
            </a>
            <a class="block no-underline hover:underline text-[13px]"
               href="#">Support
            </a>
          </div>
        </div>
      </div>

      <div class="flex items-center my-5 md:my-0 md:mx-[45px] md:mr-auto justify-center">
        <div v-for="(social, socialKey) in socials"
             :key="socialKey"
             class="text-2xl px-5">
          <social-link :href="social.href"
                       :icon="social.icon"
                       class="text-white hover:opacity-50"/>
        </div>
      </div>
      <div class="flex items-center">
        <div class="text-white text-xs font-medium">© 2021 Candy Shop | info@candydapp.com</div>
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
