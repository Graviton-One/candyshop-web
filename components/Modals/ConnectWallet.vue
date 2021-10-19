<template>
  <modal name="connect-wallet"
  @close="$store.commit('app/CLOSE_MODAL')">
    <div class="relative h-full bg-white rounded-[8px] min-h-[307px] py-[44px] px-[40px] w-[540px]">

      <button
        class="absolute z-10 right-[12px] top-[12px] bg-ghost-white text-vampire-black hover:text-white hover:bg-candy-apple-red text-[12px] p-0 rounded-full w-[27px] h-[27px] flex items-center justify-center"
        aria-label="Close the modal window"
        @click="$store.commit('app/CLOSE_MODAL')">
        <icon name="mono/close" class="fill-current stroke-current"/>
      </button>

      <div
        class="mb-[18px] text-[26px] text-[#12161D] leading-none text-center font-medium text-center">
        Connect to {{ label }}
      </div>
      <div class="flex rainbow rounded-[23px] justify-center">
        <div class="bg-dark-charcoal rounded-[10px] min-h-[215px] flex flex-col justify-center items-center">
          <img class="w-[80px] h-[80px] object-center object-contain mb-[30px]" :src="img" :alt="label">
          <btn v-show="!connected" variant="gradient" rounded  class="w-[150px]"
               @click="handleConnectWallet">
            Connect
          </btn>
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
    handleConnectWallet() {
      this.data.callbackConnect && this.data.callbackConnect()
      this.connected = false
    }
  }
})
</script>

