<template>
  <modal name="buyLP"
         @close="$store.commit('app/CLOSE_MODAL')">
    <div class="relative h-full bg-white rounded-[23px] min-h-[307px]  sm:py-[44px] p-6 sm:px-[40px] sm:min-w-[610px] max-w-[610px]">

      <button
        aria-label="Close the modal window"
        class="absolute z-10 right-[12px] top-[12px] bg-ghost-white text-vampire-black hover:text-[#FF00F5]  text-[12px] p-0 rounded-full w-[27px] h-[27px] flex items-center justify-center"
        @click="$store.commit('app/CLOSE_MODAL')">
        <icon class="fill-current stroke-current"
              name="mono/close"/>
      </button>

      <div class="flex border-b border-[#D9DCE2] pb-4 sm:pb-[22px]">
        <span class="flex">
          <div class="h-10 w-10 flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-20 bg-white">
            <icon class="text-[22px]"
                  name="mono/gton"/>
          </div>
          <div class="h-10 w-10 flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-10 bg-white ml-[-7px]">
            <icon class="text-[22px]"
                  name="mono/usdc"/>
          </div>
        </span>
        <span class="font-medium text-[26px] pl-2 text-[#12161D]">
          canUSDC
        </span>
      </div>
      <div class="flex flex-wrap mt-5 rounded-[23px]  border-[1px] border-[#B85DFF] px-6 py-5   sm:px-[30px] sm:pt-[30px] ">

        <div class="w-full sm:w-auto">
          <div class="text-[13px] font-medium text-[#12161D]">
            Token
          </div>
          <div class="pt-2 pb-4 sm:py-3 w-full">
            <span class=" relative sm:mr-4 w-full">
              <div class="dropdown rounded-[40px] border-[#D9DCE2] border-[1px] h-[42px] w-full sm:w-[168px] py-[4px] pl-[12px] sm:my-0 hover:cursor-pointer hover:border-magenta"
                   @click="dropdown = !dropdown"
              :class="(dropdown) ? 'border-magenta' : ''">
                <span class="arrow flex items-center text-sm">
                  <div class="h-[30px] w-[30px] mr-1 flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-20 bg-white">
                    <icon class="text-[16px]"
                          name="mono/usdt"/>
                  </div>
                  USDT
                </span>
                <div v-if="dropdown"
                     class="dropdown-content rounded-[11px] border-[#D9DCE2] border-[1px] bg-white ">
                  <div>
                    <div class="flex items-center  h-[42px] p-[10px] hover:cursor-pointer hover:bg-[#D9DCE2] hover:rounded-t-[11px] hover:bg-opacity-50 ">
                      <div class="h-[30px] w-[30px] mr-1 flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-20 bg-white">
                        <icon class="text-[16px]"
                              name="mono/usdt"/>
                      </div>
                      USDT
                    </div>
                    <div class="flex items-center   h-[42px] p-[10px] hover:cursor-pointer hover:bg-[#D9DCE2] hover:bg-opacity-50">
                      <div class="h-[30px] w-[30px] mr-1 flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-20 bg-white  ">
                        <icon class="text-[16px]"
                              name="mono/usdc"/>
                      </div>
                      USDC
                    </div>
                    <div class="flex items-center  h-[42px] p-[10px] hover:cursor-pointer hover:bg-[#D9DCE2] hover:rounded-b-[11px] hover:bg-opacity-50 ">
                      <div class="h-[30px] w-[30px] mr-1 flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-20 bg-white">
                        <icon class="text-[16px]"
                              name="mono/busd"/>
                      </div>
                      BUSD
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>
        <div class="w-full sm:w-auto whitespace-nowrap">
          <div class="flex items-end font-medium text-[#12161D]">
            <div class="text-[13px] mr-auto">Amount</div>
            <div class=" text-[#12161D] text-opacity-50 ml-2 sm:ml-4 mr-1 text-[10px] md:text-[13px]">Candy available:</div>
            <div class="text-[10px] md:text-[13px]">2000 USDT</div>
          </div>
          <div class="pt-2 pb-4 sm:py-3 w-full">
            <input class="w-full sm:w-[268px] rounded-[27px] border-[1px] border-[#b7d2d6] text-[#12161d] text-xs p-3 outline-none font-medium focus:border-[#FF00F5]"
                   type="text">
          </div>
        </div>
        <div class="w-full">
          <div class="flex items-end font-medium text-[#12161D] whitespace-nowrap">
            <div class=" text-[#12161D] text-opacity-50  mr-1 text-[13px]">You will receive: </div>
            <div class="text-[13px]">2000 canUSDC </div>
          </div>

        </div>



      </div>
      <div class="sm:flex mt-4 text-[10px] font-medium">
        <div class="text-[#12161D] text-opacity-50 mr-auto">
          Estemated transaction time:
        </div>
        <div class="">
          ~ 5 minutes
        </div>
      </div>
      <div class="sm:flex mt-2 text-[10px] font-medium">
        <div class="text-[#12161D] text-opacity-50 mr-auto">
          Estemated transaction fee:
        </div>
        <div class="">
          the standard fee of the outbound network
        </div>
      </div>
      <div class="flex mt-[22px] ">
        <btn
          block
          rounded
          variant="gradient"
          @click="confirmBuy">
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
    dropdown: false
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
    confirmBuy() {
      // Deep copy object

      console.log('modal')
      const modal = JSON.parse(JSON.stringify(this.$store.getters["app/exampleModals"].confirmModal));
      this.data.callbackBuy && this.data.callbackBuy()
      console.log(modal)
      this.$store.commit('app/PUSH_MODAL', modal)
    }
  }
})
</script>

