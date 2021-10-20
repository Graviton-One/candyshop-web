<template>
  <modal name="confirmModal"
  @close="$store.commit('app/CLOSE_MODAL')">
    <div class="relative h-full bg-white rounded-[23px] min-h-[307px]  sm:py-[44px] p-6 sm:px-[40px] sm:min-w-[540px]">

      <button
        class="absolute z-10 right-[12px] top-[12px] bg-ghost-white text-vampire-black hover:text-[#FF00F5]  text-[12px] p-0 rounded-full w-[27px] h-[27px] flex items-center justify-center"
        aria-label="Close the modal window"
        @click="$store.commit('app/CLOSE_MODAL')">
        <icon name="mono/close" class="fill-current stroke-current"/>
      </button>

      <div
        class="mb-6 sm:mb-[33px] text-[26px] text-[#12161D] leading-none text-center font-medium text-center">
        Congratulations!
      </div>
      <div class="flex border-[#B85DFF] border-[1px] rounded-[23px] justify-center w-full lg:w-[520px] h-[184px]">
        <div class="bg-dark-charcoal rounded-[10px]  flex flex-col justify-center items-center">
          <img class="w-[80px] h-[80px] object-center object-contain mb-[25px]" src="~/assets/img/interface/congratulations.svg" :alt="label">
          <div class="text-sm text-[#12161D] text-opacity-50 font-medium">
            Successful purchase
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

  }
})
</script>

