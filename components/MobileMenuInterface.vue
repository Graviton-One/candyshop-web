<template>
  <div
    :class="{
      '-translate-x-full invisible delay-150': !open,
      'delay-0': open,
    }"
    class="
      fixed
      inset-0
      w-full
      h-full
      z-40
      xl:hidden
      transition-visibility-and-transform
      duration-0
    "
  >
    <button
      :class="{
        'opacity-0': !open,
        'bg-solana2': !isLanding,
      }"
      aria-label="Close"
      class="
        mobile-menu__backdrop
        rotate-180
        z-[-1]
        absolute
        inset-0
        w-full
        h-full
        border-none
        text-white
        transition-all
      "
      type="button"
      @click="toggleMenu"
    />

    <nav
      :class="{
        '-translate-x-full': !open,
      }"
      class="
        mobile-menu__nav
        flex flex-col
        absolute
        left-0
        top-0
        bottom-0
        h-full
        bg-white

        pt-4
        transition-transform
      "
    >
      <div class="container">
        <div class="flex-shrink-0 flex justify-between items-center">
          <nuxt-link class="text-[46px]"
                     to="/"
                     @click.native="toggleMenu">
            <img
              alt="Susy"
              class="w-[97px] h-[56px]"
              height="56"
              src="~/assets/img/logo.svg"
              width="97"
            />
          </nuxt-link>
          <div class="flex px-10">

            <!--          Место для выпадающего списка-->

          </div>
          <button
            class="
            mobile-menu__close
            bg-transparent
            border-none
            w-[52px]
            h-[52px]
            flex
            justify-center
            items-center
            -my-1
          "
            type="button"
            @click="toggleMenu"
          >
            <icon
              class="text-[18px] fill-current stroke-current"
              name="mono/close2"
            />
          </button>
        </div>

        <div
          :class="{
          'bg-solana2': !isLanding,
          'bg-[#8C50C9]': isLanding,
        }"
          class="flex-shrink-0 h-[1px] w-full my-[13px]"
        ></div>

        <div class="flex-grow flex flex-col overflow-auto">
          <div class="mb-auto w-full pt-[40px]">
            <div
              v-for="(item, key) in navigation"
              :key="key"
              class="block mb-[23px]"
            >
              <component-link
                :class="{
                'no-underline hover:underline': $route.name !== item.route,
                'text-opacity-50 text-[16px]': !item.main,
              }"
                :disabled="item.disabled"
                :disabled-title="item.disabledTitle"
                :href="item.href"
                :route="item.route"
                class="font-semibold text-[#12161D] text-[22px]"
              >
                {{ item.label }}
              </component-link>
            </div>
          </div>

        </div>
      </div>
      <div class="h-full w-full text-[13px] font-sans text-sm pt-10 pl-6 mt-[50px]"
           style="background: linear-gradient(260.18deg, #FB2EFF 24.15%, #7736FF 59.59%);">
        <div class="flex w-full items-center">
          <div v-for="(social, socialKey) in socials"
               :key="socialKey"
               class="text-2xl px-5">
            <social-link :href="social.href"
                         :icon="social.icon"
                         class="text-white hover:text-magenta"/>
          </div>
        </div>
        <div class=" items-center">
          <p class="text-white text-xs font-medium p-5">© 2021 Candy Shop</p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    isLanding: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    open() {
      // @ts-ignore
      return this.$store.getters['app/menuInterface'].open
    },
    navigation() {
      // @ts-ignore
      return this.$store.getters['app/menuInterface'].landingNavigation
    },
    partners() {
      // @ts-ignore
      return this.$store.getters['app/menuInterface'].partners
    },
    socials() {
      // @ts-ignore
      return this.$store.getters['app/menuInterface'].socials
    },
  },
  watch: {
    open() {
      if (typeof window !== 'undefined') {
        const html = document.querySelector('html')
        if (html) {
          if (this.open) {
            html.classList.add('overflow-hidden')
            html.classList.add('sm:overflow-auto')
          } else {
            html.classList.remove('overflow-hidden')
            html.classList.remove('sm:overflow-auto')
          }
        }
      }
    },
  },
  methods: {
    toggleMenu() {
      this.$store.commit('app/TOGGLE_MENU_INTERFACE')
    },
  },
})
</script>

<style lang="postcss">
.mobile-menu__nav {
  @apply w-full;
}

.mobile-menu__close {
  @apply text-black top-[1.3rem] hover:text-magenta;
}

@media (min-width: 500px) {
  .mobile-menu__nav {
    @apply w-[400px];
  }

  .mobile-menu__close {
    @apply text-white fixed top-[1.3rem] right-6;
  }
}


</style>
