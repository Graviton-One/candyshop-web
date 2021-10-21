<template>
  <header class="flex-shrink-0">
    <div class="w-full h-full"
         style="background: linear-gradient(267.77deg, #2CCBFF 23.15%, #FB2EFF 79.13%);">
      <div class="container flex flex-wrap justify-center text-white text-xs whitespace-nowrap">
        <div class="flex mx-1 md:mx-5 lg:mx-10 py-[10px] items-end">10 Farms
          <img src="~/assets/img/icons/tractor.png"
               class="mx-[6px]"
               width="20"
               height="20"
               alt="">
        </div>
        <div class="flex mx-1 md:mx-5 lg:mx-10 py-[10px] items-end">20 LP Candies
          <img src="~/assets/img/icons/candy.png"
               class="mx-[6px]"
               width="20"
               height="20"
               alt=""></div>
        <div class="flex mx-1 md:mx-5 lg:mx-10 py-[10px] items-end">5 Chains
          <img src="~/assets/img/icons/pipe.png"
               class="mx-[6px]"
               width="20"
               height="20"
               alt=""></div>
        <div class="flex mx-1 md:mx-5 lg:mx-10 py-[10px] items-end">200 Addresses in farming
          <img src="~/assets/img/icons/factory.png"
               class="mx-[6px]"
               width="20"
               height="20"
               alt=""></div>
      </div>
    </div>
    <div class="block shadow-lg">
      <div class="container flex items-center">
        <div class="py-3 mr-auto lg:mr-0 order-1">
          <img src="~/assets/img/icons/logo.png"
               alt=""
               class="md:mx-10 w-[98px] h-[57px]">
        </div>

        <div class="flex font-semibold lg:mr-auto lg:order-2 order-3 lg:ml-0 ml-2">
          <button
            :class="{ 'opacity-0': open }"
            class="flex ml-auto text-black lg:hidden"
            type="button"
            @click="toggleMenu"
          >
            <icon
              class="w-[42px] h-[30px] fill-current stroke-current"
              custom-size
              name="mono/menu2"
            />
          </button>

          <nav class="hidden lg:flex lg:flex-wrap">
            <component-link
              v-for="(item, key) in navigation"
              :key="key"
              :class="{
                'no-underline hover:underline ': $route.name !== item.route,
              }"
              :href="item.href"
              :route="item.route"
              :disabled="item.disabled"
              :disabledTitle="item.disabledTitle"
              :interface="item.interface"
              class="px-5 text-[14px]">
              <span class=""
                   :class="{
                'text-magenta active-menu': $route.name === item.route,
              }">
                {{ item.label }}
              </span>
            </component-link>
          </nav>
        </div>

        <div v-if="connected"
             class="hidden sm:flex lg:order-3 order-2 items-center">
          <div class="flex flex-wrap lg:flex-nowrap items-center whitespace-nowrap text-xs ">
            <div class="lg:p-2 text-[#12161D] md:w-full lg:w-auto ">Balance:</div>
            <div class="font-semibold text-[#12161D]">10 LPs</div>
            <div class="font-semibold text-[#12161D] text-opacity-50"> | $186,0000</div>
          </div>

          <div :class="(network === 'etherium') ?  'border-[#FF00F5]' : ''"
               class="flex items-center rounded-[40px] border-[#D9DCE2] border-[1px] px-2 w-[118px] h-[42px] mx-5 my-4 sm:my-0 hover:cursor-pointer hover:border-magenta"
               @click="openSelectNetwork"
          >
            <img alt="etherium"
                 height="25"
                 src="~/assets/img/interface/etherium.svg"
                 width="100">
          </div>
          <div class="flex items-center h-[42px] rounded-[40px] border-[#D9DCE2] border-[1px] px-[10px] my-4">
            <div class="flex w-[22px]">
              <img alt=""
                   width="22"
                   height="22"
                   src="~/assets/img/interface/fox.svg">
            </div>
            <div class="flex-col px-[11px]">
              <div class="block font-semibold text-xs">0xced4...sdf01a</div>
            </div>
            <div class="flex border-[1px] border-[#D9DCE2] rounded-full p-2">
              <icon class="text-[12px] fill-current stroke-current"
                    name="mono/logout"/>
            </div>
          </div>
        </div>
        <div v-else
             class="flex lg:order-3 order-2 items-center">
          <btn block
               class="px-[20px] sm:px-[56px] font-bold text-[13px] whitespace-nowrap"
               rounded
               size="medium"
               variant="gradient"
               @click="connected ? false : handleConnectWallet()">
            Connect wallet
          </btn>
        </div>
      </div>

    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    address: '',
    amount: '0',
    connected: false,
  }),
  computed: {
    open() {
      return this.$store.getters["app/menuInterface"].open;
    },
    navigation() {
      return this.$store.getters["app/menuInterface"].navigation;
    }
  },
  methods: {
    toggleMenu() {
      this.$store.commit('app/TOGGLE_MENU_INTERFACE');
    },
    handleConnectWallet() {
      // Deep copy object
      const modal = JSON.parse(JSON.stringify(this.$store.getters["app/exampleModals"].connectWallet));

      modal.data.callbackConnect = () => {
        this.connected = true
        this.$store.commit('app/CLOSE_MODAL')
      }
      this.$store.commit('app/PUSH_MODAL', modal)
    },
    openSelectNetwork() {
      // Deep copy object
      const modal = JSON.parse(JSON.stringify(this.$store.getters["app/exampleModals"].selectNetwork));

      modal.data.callbackConnect = () => {
        this.connected = true
        this.$store.commit('app/CLOSE_MODAL')
      }
      this.$store.commit('app/PUSH_MODAL', modal)
    }
  }
})
</script>
