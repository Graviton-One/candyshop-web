<template>
  <div class="container">
    <div class="flex pt-8 pb-4">
      <span  class="text-2xl font-bold mr-auto">
        Explore ⚡️
      </span>
      <div class="select-none">
        <div class="inline-flex">

          <div class="dropdown " :class="dropdown ? 'active' : ''"
               v-click-outside="onClickOutside" >
            <button class="arrow dropdown-title flex items-center text-sm  rounded-[40px] border-[#D9DCE2] border-[1px] h-[38px] w-full w-[143px] py-[4px] pl-[12px] sm:my-0
                hover:cursor-pointer hover:border-magenta"
            @click="dropdown = !dropdown">
              All chains
            </button>
            <div
              class="dropdown-content overflow-hidden rounded-[11px] border-[#D9DCE2] border-[1px] w-[143px]" tabindex="0">
              <div>
                <div class="flex text-magenta text-sm px-4 pt-3">
                  All chains
                </div>
                <button class="flex items-center justify-center rounded-[40px] border-gray-300 border-[1px] w-[111px] h-[33px] m-[10px] hover:cursor-pointer hover:border-magenta "
                        @click="closeDropMenu">
                  <img alt="poligon"
                       height="23"
                       src="~/assets/img/interface/poligon.svg"
                       width="90">
                </button>
                <button class="flex items-center justify-center rounded-[40px] border-gray-300 border-[1px] w-[111px] h-[33px] m-[10px] hover:cursor-pointer hover:border-magenta "
                     @click="closeDropMenu">
                  <img alt="etherium"
                       height="23"
                       src="~/assets/img/interface/etherium.svg"
                       width="90">
                </button>
                <button class="flex items-center justify-center rounded-[40px] border-gray-300 border-[1px] w-[111px] h-[33px] m-[10px] hover:cursor-pointer hover:border-magenta "
                     @click="closeDropMenu">
                  <img alt="fantom"
                       height="23"
                       src="~/assets/img/interface/fantom.svg"
                       width="90">
                </button>
              </div>
            </div>
          </div>
        </div>
        <span class="text-[#12161d] text-xs font-medium">
          <button
            class="items-center"
            @click="changeAPY">
            APY
            <svg width="18" height="18" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 0L23 12.8571L6 12.8571L14.5 0Z"
                    :fill="(apy === 'asc') ? '#FB2EFF' : '#12161D'"
                    :fill-opacity="(apy === 'asc') ? '1' : '0.5'"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 30L23 17.1429L6 17.1429L14.5 30Z"
                    :fill="(apy === 'desc') ? '#FB2EFF' : '#12161D'"
                    :fill-opacity="(apy === 'desc') ? '1' : '0.5'"/>
            </svg>
          </button>

        </span>
      </div>
    </div>
    <div class="flex flex-wrap justify-center md:justify-start">
      <div class="flex m-[1rem] rounded-[23px] border-[1px] border-[#B85DFF] ">
        <div class="flex-col pt-6 pb-10 px-8 candy-bg-first">
          <div class="flex items-center  h-[46px] w-[236px] border-[1px] border-[#D9DCE2] rounded-[23px] bg-white mb-3 hover:border-[#FF00F5] hover:cursor-pointer">
            <div class="flex px-1 pl-4">
              <div class="h-[30px] w-[30px] flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-20 bg-white">
                <icon class="text-base"
                      name="mono/gton"/>
              </div>
              <div class="h-[30px] w-[30px] flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-10 bg-white ml-[-7px]">
                <icon class="text-base"
                      name="mono/usdc"/>
              </div>
            </div>
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
            <div class="flex px-1 pl-4">
              <div class="h-[30px] w-[30px] flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-20 bg-white">
                <icon class="text-base"
                      name="mono/step"/>
              </div>
            </div>
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
            <div class="flex px-1 pl-4">
              <div class="h-[30px] w-[30px] flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-20 bg-white">
                <icon class="text-base"
                      name="mono/gton"/>
              </div>
              <div class="h-[30px] w-[30px] flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-10 bg-white ml-[-7px]">
                <icon class="text-base"
                      name="mono/spirit"/>
              </div>
            </div>
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
            <div class="flex px-1 pl-4">
              <div class="h-[30px] w-[30px] flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-20 bg-white">
                <icon class="text-base"
                      name="mono/gton"/>
              </div>
              <div class="h-[30px] w-[30px] flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-10 bg-white ml-[-7px]">
                <icon class="text-base"
                      name="mono/luna"/>
              </div>
            </div>
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
            <div class="flex px-1 pl-4">
              <div class="h-[30px] w-[30px] flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-20 bg-white">
                <icon class="text-base"
                      name="mono/gton"/>
              </div>
              <div class="h-[30px] w-[30px] flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-10 bg-white ml-[-7px]">
                <icon class="text-base"
                      name="mono/uni"/>
              </div>
            </div>
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
            <div class="flex px-1 pl-4">
              <div class="h-[30px] w-[30px] flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-20 bg-white">
                <img alt=""
                     height="16"
                     src="~/assets/img/icons/aave.png"
                     width="16">
              </div>
            </div>
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
            <div class="flex px-1 pl-4">
              <div class="h-[30px] w-[30px] flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-20 bg-white">
                <icon class="text-base"
                      name="mono/gton"/>
              </div>
              <div class="h-[30px] w-[30px] flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-10 bg-white ml-[-7px]">
                <icon class="text-base"
                      name="mono/yfi"/>
              </div>
            </div>
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
            <div class="flex px-1 pl-4">
              <div class="h-[30px] w-[30px] flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-20 bg-white">
                <icon class="text-base"
                      name="mono/gton"/>
              </div>
              <div class="h-[30px] w-[30px] flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-10 bg-white ml-[-7px]">
                <icon class="text-base"
                      name="mono/banana"/>
              </div>
            </div>
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

<script>
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    apy: 'asc',
    dropdown: false
  }),
  methods: {
    onClickOutside(){
      if (!document.activeElement.className.includes('dropdown')) {
        this.dropdown = false
      }
    },
    closeDropMenu() {
      this.dropdown = false
    },
    openBuyLP() {
      // Deep copy object
      const modal = JSON.parse(JSON.stringify(this.$store.getters["app/exampleModals"].buy));
      modal.data.callbackBuy = () => {
        this.$store.commit('app/CLOSE_MODAL')
      }
      this.$store.commit('app/PUSH_MODAL', modal)
    },
    changeAPY() {
      if (this.apy === 'asc') {
        this.apy = 'desc'
      }
      else
      if (this.apy === 'desc') {
        this.apy = 'default'
      } else
      if (this.apy === 'default') {
        this.apy = 'asc'
      }
    }
  }
})
</script>
