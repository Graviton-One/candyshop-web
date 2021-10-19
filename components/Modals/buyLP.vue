<template>
  <modal name="buyLP"
         @close="$store.commit('app/CLOSE_MODAL')">
    <div class="relative h-full bg-white rounded-[8px] min-h-[307px] py-[44px] px-[40px] min-w-[540px]">

      <button
        class="absolute z-10 right-[12px] top-[12px] bg-ghost-white text-vampire-black hover:text-white hover:bg-candy-apple-red text-[12px] p-0 rounded-full w-[27px] h-[27px] flex items-center justify-center"
        aria-label="Close the modal window"
        @click="$store.commit('app/CLOSE_MODAL')">
        <icon name="mono/close" class="fill-current stroke-current"/>
      </button>

     <div class="flex border-b border-[#D9DCE2] pb-5">
       <span class="flex px-1 pl-4">
         <p class="h-10 w-10 flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-20 bg-white">
           <icon class="text-[22px] fill-current stroke-current text-black "
                 name="mono/gton"/>
         </p>
         <p class="h-10 w-10 flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-10 bg-white ml-[-7px]">
           <icon class="text-[22px]  fill-current stroke-current text-blue-900 "
                 name="mono/gton"/>
         </p>
       </span>
       <span class="font-medium text-[26px] pl-2 text-[#12161D]">
         canUSDC
       </span>
     </div>
    <div class="flex flex-wrap mt-5 rounded-[23px] rainbow p-8">
      <div class="">
        <div class="text-[13px] font-medium text-[#12161D]">
          Token
        </div>
        <div class="py-4">
          <span class="arrow relative mr-4">
          <select
            class="rounded-[27px] border-[1px] border-[#b7d2d6] text-[#12161d] text-xs p-3 w-[140px] appearance-none outline-none font-medium">
            <option value="USDT">
              <icon name="mono/poligon" class="fill-current stroke-current"/>
              USDT
            </option>
          </select>
          </span>
        </div>
      </div>
      <div class="">
        <div class="flex text-[13px] font-medium text-[#12161D]">
          <div class="">Amount</div>
          <div class=" text-[#12161D] text-opacity-50 ml-4 mr-1">Candy available:  </div>
          <div class="">2000 USDT</div>
        </div>
        <div class="py-4">
          <input type="text" class="w-full rounded-[27px] border-[1px] border-[#b7d2d6] text-[#12161d] text-xs p-3 appearance-none outline-none font-medium">
        </div>
      </div>
    </div>
      <div class="flex mt-4 text-[10px]">
        <div class="text-[#12161D] text-opacity-50 mr-auto">
          Estemated transaction time:
        </div>
        <div class="">
          ~ 5 minutes
        </div>
      </div>
      <div class="flex mt-4 text-[10px]">
        <div class="text-[#12161D] text-opacity-50 mr-auto">
          Estemated transaction fee:
        </div>
        <div class="">
          the standard fee of the outbound network
        </div>
      </div>
      <div class="flex mt-4 ">
        <btn
        rounded
        block
        variant="gradient">
          Buy NOW
        </btn>
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

