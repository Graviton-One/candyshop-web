<template>
  <modal name="select-network"
  @close="$store.commit('app/CLOSE_MODAL')">
    <div class="relative h-full bg-white rounded-[8px]  py-[44px] px-[40px] sm:w-[610px]">

      <button
        class="absolute z-10 right-[12px] top-[12px] bg-ghost-white text-vampire-black hover:text-white hover:bg-candy-apple-red text-[12px] p-0 rounded-full w-[27px] h-[27px] flex items-center justify-center"
        aria-label="Close the modal window"
        @click="$store.commit('app/CLOSE_MODAL')">
        <icon name="mono/close" class="fill-current stroke-current"/>
      </button>

      <div
        class="mb-[18px] text-[26px] text-[#12161D] leading-none text-center font-medium text-center">
        Select a Network
      </div>
      <div
        class="mb-[18px] text-[13px] text-[#12161D] text-opacity-50 leading-none text-center font-medium text-center">
        You are in a polygon network
      </div>
      <div class="flex rainbow rounded-[23px] justify-center">
        <div class="flex flex-wrap bg-dark-charcoal rounded-[10px] flex justify-center items-center p-[30px]">
          <div class="flex items-center rounded-[40px] border-gray-300 border-[1px] px-4 py-3 hover:cursor-pointer"
               :class="(network === 'polygon') ?  'border-[#FF00F5]' : ''"
               @click="selectNetwork('poligon')">
            <img src="~/assets/img/interface/poligon.svg" width="100" height="25"
                 alt="poligon">
          </div>
          <div class="flex items-center rounded-[40px] border-gray-300 border-[1px] px-4 py-3 mx-5 my-4 sm:my-0 hover:cursor-pointer"
               :class="(network === 'etherium') ?  'border-[#FF00F5]' : ''"
               @click="selectNetwork('etherium')">
            <img src="~/assets/img/interface/etherium.svg" width="100" height="25"
                 alt="etherium">
          </div>
          <div class="flex items-center rounded-[40px] border-gray-300 border-[1px] px-4 py-3 hover:cursor-pointer"
               :class="(network === 'fantom') ?  'border-[#FF00F5]' : ''"
               @click="selectNetwork('fantom')">
            <img src="~/assets/img/interface/fantom.svg" width="100" height="25"
                 alt="fantom">
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    connected: false,
    network: 'polygon'
  }),
  computed: {
    modals() {
      return this.$store.getters['app/modals'];
    },
    modal() {
      return this.modals[this.modals.length - 1];
    },
    data() {
      return this.modal?.data;
    },
    label() {
      return this.data?.label;
    },
    img() {
      return this.data?.img;
    }
  },
  methods: {
    selectNetwork(network) {
      this.network = network

    }
  }
})
</script>

