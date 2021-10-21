<template>
  <div class="container">
    <div class="flex pt-8 pb-4">
      <span class="text-2xl font-bold mr-auto">
        Explore ⚡️
      </span>
      <div class="select-none">
        <span class="">
          <div :class="(dropdown) ? 'border-magenta' : ''"
               class="dropdown rounded-[40px] border-[#D9DCE2] border-[1px] h-[38px] w-[143px] py-[7px] pl-[12px] sm:my-0 hover:cursor-pointer hover:border-magenta"
               @click="dropdown = !dropdown">
            <span class="arrow text-sm">All chains</span>
            <div v-if="dropdown"
                 class="dropdown-content rounded-[11px] border-[#D9DCE2] border-[1px] ">
              <div>
                <div class="flex text-magenta text-sm px-4 pt-3">
                  All chains
                </div>
                <div class="flex items-center rounded-[40px] border-gray-300 border-[1px] px-[15px] h-[42px] m-[10px] hover:cursor-pointer hover:border-magenta ">
                  <img alt="poligon"
                       height="25"
                       src="~/assets/img/interface/poligon.svg"
                       width="100">
                </div>
                <div class="flex items-center rounded-[40px] border-gray-300 border-[1px] px-[15px] h-[42px] m-[10px] hover:cursor-pointer hover:border-magenta">
                  <img alt="etherium"
                       height="25"
                       src="~/assets/img/interface/etherium.svg"
                       width="100">
                </div>
                <div class="flex items-center rounded-[40px] border-gray-300 border-[1px] px-[15px] h-[42px] m-[10px] hover:cursor-pointer hover:border-magenta">
                  <img alt="fantom"
                       height="25"
                       src="~/assets/img/interface/fantom.svg"
                       width="100">
                </div>
              </div>
            </div>
          </div>
        </span>
        <span class="text-[#12161d] text-xs font-medium">
          <button
            @click="changeAPY">
            APY
            <icon v-if="apy === 0"
                  class="text-base "
                  name="apy"/>
            <icon v-if="apy === 1"
                  class="text-base "
                  name="apyUp"/>
            <icon v-if="apy === 2"
                  class="text-base "
                  name="apyDown"/>
          </button>

        </span>
      </div>
    </div>
    <div class="flex flex-wrap justify-center md:justify-start">
      <div class="flex m-[1rem] rounded-[23px] border-[1px] border-[#B85DFF] ">
        <div class="flex-col pt-6 pb-10 px-8 candy-bg-first">
          <div class="flex items-center  h-[46px] w-[236px] border-[1px] border-[#D9DCE2] rounded-[23px] bg-white mb-3 hover:border-[#FF00F5] hover:cursor-pointer">
            <span class="flex px-1 pl-4">
              <div class="h-[30px] w-[30px] flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-20 bg-white">
                <icon class="text-base"
                      name="mono/gton"/>
              </div>
              <div class="h-[30px] w-[30px] flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-10 bg-white ml-[-7px]">
                <icon class="text-base"
                      name="mono/usdc"/>
              </div>
            </span>
            <span class="font-medium text-xl pl-2 text-[#FF00F5]">
              canUSDC
            </span>
          </div>
          <div class="flex">
            <div class="flex-col w-full h-full border-[1px] border-[#D9DCE2] rounded-[23px] p-4"
                 style="backdrop-filter: blur(42px); ">

              <div class="flex bg-white rounded-[23px] items-center justify-center py-10 mb-3">
                <div class="flex items-center font-medium ">
                  <div class="text-xs text-[#12161D] mr-[10px] text-opacity-50">
                    APY:
                  </div>
                  <div class=" text-[#12161D] text-[32px]">
                    120.30%
                  </div>
                </div>
              </div>

              <div class="flex">
                <btn block
                     rounded
                     variant="gradient"
                     @click="openBuyLP">
                  Buy NOW
                </btn>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex m-[1rem] rounded-[23px] border-[1px] border-[#40DDFF] ">
        <div class="flex-col pt-6 pb-10 px-8 candy-bg-second">
          <div class="flex items-center  h-[46px] w-[236px] border-[1px] border-[#D9DCE2] rounded-[23px] bg-white mb-3 hover:border-[#FF00F5] hover:cursor-pointer">
            <span class="flex px-1 pl-4">
              <div class="h-[30px] w-[30px] flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-20 bg-white">
                <icon class="text-base"
                      name="mono/step"/>
              </div>
            </span>
            <span class="font-medium text-xl pl-2 text-[#FF00F5]">
              canSTEP
            </span>
          </div>
          <div class="flex">
            <div class="flex-col w-full h-full border-[1px] border-[#D9DCE2] rounded-[23px] p-4"
                 style="backdrop-filter: blur(42px); ">

              <div class="flex bg-white rounded-[23px] items-center justify-center py-10 mb-3">
                <div class="flex items-center font-medium ">
                  <div class="text-xs text-[#12161D] mr-[10px] text-opacity-50">
                    APY:
                  </div>
                  <div class=" text-[#12161D] text-[32px]">
                    39.30%
                  </div>
                </div>
              </div>

              <div class="flex">
                <btn block
                     rounded
                     variant="gradient"
                     @click="openBuyLP">
                  Buy NOW
                </btn>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex m-[1rem] rounded-[23px] border-[1px] border-[#32FF6B] ">
        <div class="flex-col pt-6 pb-10 px-8 candy-bg-third">
          <div class="flex items-center  h-[46px] w-[236px] border-[1px] border-[#D9DCE2] rounded-[23px] bg-white mb-3 hover:border-[#FF00F5] hover:cursor-pointer">
            <span class="flex px-1 pl-4">
              <div class="h-[30px] w-[30px] flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-20 bg-white">
                <icon class="text-base"
                      name="mono/gton"/>
              </div>
              <div class="h-[30px] w-[30px] flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-10 bg-white ml-[-7px]">
                <icon class="text-base"
                      name="mono/spirit"/>
              </div>
            </span>
            <span class="font-medium text-xl pl-2 text-[#FF00F5]">
              canSPIRIT
            </span>
          </div>
          <div class="flex">
            <div class="flex-col w-full h-full border-[1px] border-[#D9DCE2] rounded-[23px] p-4"
                 style="backdrop-filter: blur(42px); ">

              <div class="flex bg-white rounded-[23px] items-center justify-center py-10 mb-3">
                <div class="flex items-center font-medium ">
                  <div class="text-xs text-[#12161D] mr-[10px] text-opacity-50">
                    APY:
                  </div>
                  <div class=" text-[#12161D] text-[32px]">
                    48.30%
                  </div>
                </div>
              </div>

              <div class="flex">
                <btn block
                     rounded
                     variant="gradient"
                     @click="openBuyLP">
                  Buy NOW
                </btn>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex m-[1rem] rounded-[23px] border-[1px] border-[#FFE600] ">
        <div class="flex-col pt-6 pb-10 px-8 candy-bg-fourth">
          <div class="flex items-center  h-[46px] w-[236px] border-[1px] border-[#D9DCE2] rounded-[23px] bg-white mb-3 hover:border-[#FF00F5] hover:cursor-pointer">
            <span class="flex px-1 pl-4">
              <div class="h-[30px] w-[30px] flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-20 bg-white">
                <icon class="text-base"
                      name="mono/gton"/>
              </div>
              <div class="h-[30px] w-[30px] flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-10 bg-white ml-[-7px]">
                <icon class="text-base"
                      name="mono/luna"/>
              </div>
            </span>
            <span class="font-medium text-xl pl-2 text-[#FF00F5]">
              canLUNA
            </span>
          </div>
          <div class="flex">
            <div class="flex-col w-full h-full border-[1px] border-[#D9DCE2] rounded-[23px] p-4"
                 style="backdrop-filter: blur(42px); ">

              <div class="flex bg-white rounded-[23px] items-center justify-center py-10 mb-3">
                <div class="flex items-center font-medium ">
                  <div class="text-xs text-[#12161D] mr-[10px] text-opacity-50">
                    APY:
                  </div>
                  <div class=" text-[#12161D] text-[32px]">
                    36.30%
                  </div>
                </div>
              </div>

              <div class="flex">
                <btn block
                     rounded
                     variant="gradient"
                     @click="openBuyLP">
                  Buy NOW
                </btn>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex m-[1rem] rounded-[23px] border-[1px] border-[#B85DFF] ">
        <div class="flex-col pt-6 pb-10 px-8 candy-bg-first">
          <div class="flex items-center  h-[46px] w-[236px] border-[1px] border-[#D9DCE2] rounded-[23px] bg-white mb-3 hover:border-[#FF00F5] hover:cursor-pointer">
            <span class="flex px-1 pl-4">
              <div class="h-[30px] w-[30px] flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-20 bg-white">
                <icon class="text-base"
                      name="mono/gton"/>
              </div>
              <div class="h-[30px] w-[30px] flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-10 bg-white ml-[-7px]">
                <icon class="text-base"
                      name="mono/uni"/>
              </div>
            </span>
            <span class="font-medium text-xl pl-2 text-[#FF00F5]">
              canUNI
            </span>
          </div>
          <div class="flex">
            <div class="flex-col w-full h-full border-[1px] border-[#D9DCE2] rounded-[23px] p-4"
                 style="backdrop-filter: blur(42px); ">

              <div class="flex bg-white rounded-[23px] items-center justify-center py-10 mb-3">
                <div class="flex items-center font-medium ">
                  <div class="text-xs text-[#12161D] mr-[10px] text-opacity-50">
                    APY:
                  </div>
                  <div class=" text-[#12161D] text-[32px]">
                    120.30%
                  </div>
                </div>
              </div>

              <div class="flex">
                <btn block
                     rounded
                     variant="gradient"
                     @click="openBuyLP">
                  Buy NOW
                </btn>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex m-[1rem] rounded-[23px] border-[1px] border-[#40DDFF] ">
        <div class="flex-col pt-6 pb-10 px-8 candy-bg-second">
          <div class="flex items-center  h-[46px] w-[236px] border-[1px] border-[#D9DCE2] rounded-[23px] bg-white mb-3 hover:border-[#FF00F5] hover:cursor-pointer">
            <span class="flex px-1 pl-4">
              <div class="h-[30px] w-[30px] flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-20 bg-white">
                <img alt=""
                     height="16"
                     src="~/assets/img/icons/aave.png"
                     width="16">
              </div>
            </span>
            <span class="font-medium text-xl pl-2 text-[#FF00F5]">
              canAAVE
            </span>
          </div>
          <div class="flex">
            <div class="flex-col w-full h-full border-[1px] border-[#D9DCE2] rounded-[23px] p-4"
                 style="backdrop-filter: blur(42px); ">

              <div class="flex bg-white rounded-[23px] items-center justify-center py-10 mb-3">
                <div class="flex items-center font-medium ">
                  <div class="text-xs text-[#12161D] mr-[10px] text-opacity-50">
                    APY:
                  </div>
                  <div class=" text-[#12161D] text-[32px]">
                    39.30%
                  </div>
                </div>
              </div>

              <div class="flex">
                <btn block
                     rounded
                     variant="gradient"
                     @click="openBuyLP">
                  Buy NOW
                </btn>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex m-[1rem] rounded-[23px] border-[1px] border-[#32FF6B] ">
        <div class="flex-col pt-6 pb-10 px-8 candy-bg-third">
          <div class="flex items-center  h-[46px] w-[236px] border-[1px] border-[#D9DCE2] rounded-[23px] bg-white mb-3 hover:border-[#FF00F5] hover:cursor-pointer">
            <span class="flex px-1 pl-4">
              <div class="h-[30px] w-[30px] flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-20 bg-white">
                <icon class="text-base"
                      name="mono/gton"/>
              </div>
              <div class="h-[30px] w-[30px] flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-10 bg-white ml-[-7px]">
                <icon class="text-base"
                      name="mono/yfi"/>
              </div>
            </span>
            <span class="font-medium text-xl pl-2 text-[#FF00F5]">
              canYFI
            </span>
          </div>
          <div class="flex">
            <div class="flex-col w-full h-full border-[1px] border-[#D9DCE2] rounded-[23px] p-4"
                 style="backdrop-filter: blur(42px); ">

              <div class="flex bg-white rounded-[23px] items-center justify-center py-10 mb-3">
                <div class="flex items-center font-medium ">
                  <div class="text-xs text-[#12161D] mr-[10px] text-opacity-50">
                    APY:
                  </div>
                  <div class=" text-[#12161D] text-[32px]">
                    48.30%
                  </div>
                </div>
              </div>

              <div class="flex">
                <btn block
                     rounded
                     variant="gradient"
                     @click="openBuyLP">
                  Buy NOW
                </btn>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex m-[1rem] rounded-[23px] border-[1px] border-[#FFE600] ">
        <div class="flex-col pt-6 pb-10 px-8 candy-bg-fourth">
          <div class="flex items-center  h-[46px] w-[236px] border-[1px] border-[#D9DCE2] rounded-[23px] bg-white mb-3 hover:border-[#FF00F5] hover:cursor-pointer">
            <span class="flex px-1 pl-4">
              <div class="h-[30px] w-[30px] flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-20 bg-white">
                <icon class="text-base"
                      name="mono/gton"/>
              </div>
              <div class="h-[30px] w-[30px] flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-10 bg-white ml-[-7px]">
                <icon class="text-base"
                      name="mono/banana"/>
              </div>
            </span>
            <span class="font-medium text-xl pl-2 text-[#FF00F5]">
              canBANANA
            </span>
          </div>
          <div class="flex">
            <div class="flex-col w-full h-full border-[1px] border-[#D9DCE2] rounded-[23px] p-4"
                 style="backdrop-filter: blur(42px); ">

              <div class="flex bg-white rounded-[23px] items-center justify-center py-10 mb-3">
                <div class="flex items-center font-medium ">
                  <div class="text-xs text-[#12161D] mr-[10px] text-opacity-50">
                    APY:
                  </div>
                  <div class=" text-[#12161D] text-[32px]">
                    36.30%
                  </div>
                </div>
              </div>

              <div class="flex">
                <btn block
                     rounded
                     variant="gradient"
                     @click="openBuyLP">
                  Buy NOW
                </btn>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="flex justify-center mt-[50px] mb-[30px]">
      <div class="loader-2 center"><span></span></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    apy: 0,
    dropdown: false
  }),
  methods: {
    openBuyLP() {
      // Deep copy object
      console.log('modal')
      const modal = JSON.parse(JSON.stringify(this.$store.getters["app/exampleModals"].buy));
      console.log(modal)
      modal.data.callbackBuy = () => {
        this.$store.commit('app/CLOSE_MODAL')
      }
      this.$store.commit('app/PUSH_MODAL', modal)
    },
    changeAPY() {
      this.apy += 1
      if (this.apy === 3) {
        this.apy = 0
      }
    }
  }
})
</script>
