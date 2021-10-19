<template>
  <div class="container">
    <div class="flex pt-8 pb-4">
      <span class="text-2xl font-bold mr-auto">
        Explore ⚡️
      </span>
      <div class="">
        <span class="arrow relative mr-4">
          <select
            class="rounded-[27px] border-[1px] border-[#b7d2d6] text-[#12161d] text-xs p-3 w-[140px] appearance-none outline-none font-medium">
            <option value="All tokens">All tokens</option>
          </select>
        </span>
        <span class="text-[#12161d] text-xs font-medium">
          APY
          <svg class="inline-flex"
               fill="none"
               height="14"
               viewBox="0 0 8 14"
               width="8"
               xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd"
                  d="M4 0L8 6L0 6L4 0Z"
                  fill="#FB2EFF"
                  fill-rule="evenodd"/>
            <path clip-rule="evenodd"
                  d="M4 14L8 8L0 8L4 14Z"
                  fill="#12161D"
                  fill-opacity="0.5"
                  fill-rule="evenodd"/>
          </svg>
        </span>
      </div>
    </div>
    <div class="flex flex-wrap justify-center md:justify-between">
      <div
        class="flex m-[1rem] rounded-[23px] rainbow ">
        <div class="flex-col pt-6 pb-10 px-8 candy-bg">
          <div class="flex items-center  h-[46px] w-[236px] border-[1px] border-[#D9DCE2] rounded-[23px] bg-white mb-3">
            <span class="flex px-1 pl-4">
              <p class="h-8 w-8 flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-20 bg-white">
                <icon class="text-base fill-current stroke-current text-blue-900 "
                      name="mono/gton"/>
              </p>
              <p class="h-8 w-8 flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-10 bg-white ml-[-7px]">
                <icon class="text-base fill-current stroke-current text-blue-900 "
                      name="mono/gton"/>
              </p>
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
                    38.30%
                  </div>
                </div>
              </div>

              <div class="flex">
                <btn block
                     rounded
                     variant="gradient">
                  Buy NOW
                </btn>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex m-[1rem] rounded-[23px] rainbow ">
        <div class="flex-col pt-6 pb-10 px-8 candy-bg">
          <div class="flex items-center  h-[46px] w-[236px] border-[1px] border-[#D9DCE2] rounded-[23px] bg-white mb-3">
            <span class="flex px-1 pl-4">
              <p class="h-8 w-8 flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-20 bg-white">
                <icon class="text-base fill-current stroke-current text-blue-900 "
                      name="mono/gton"/>
              </p>
              <p class="h-8 w-8 flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-10 bg-white ml-[-7px]">
                <icon class="text-base fill-current stroke-current text-blue-900 "
                      name="mono/gton"/>
              </p>
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
                    38.30%
                  </div>
                </div>
              </div>

              <div class="flex">
                <btn block
                     rounded
                     variant="gradient"
                     @click="openBuyLP">
                  B12312312
                </btn>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex m-[1rem] rounded-[23px] rainbow ">
        <div class="flex-col pt-6 pb-10 px-8 candy-bg">
          <div class="flex items-center  h-[46px] w-[236px] border-[1px] border-[#D9DCE2] rounded-[23px] bg-white mb-3">
            <span class="flex px-1 pl-4">
              <p class="h-8 w-8 flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-20 bg-white">
                <icon class="text-base fill-current stroke-current text-blue-900 "
                      name="mono/gton"/>
              </p>
              <p class="h-8 w-8 flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-10 bg-white ml-[-7px]">
                <icon class="text-base fill-current stroke-current text-blue-900 "
                      name="mono/gton"/>
              </p>
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
                    38.30%
                  </div>
                </div>
              </div>

              <div class="flex">
                <btn block
                     rounded
                     variant="gradient">
                  Buy NOW
                </btn>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex m-[1rem] rounded-[23px] rainbow ">
        <div class="flex-col pt-6 pb-10 px-8 candy-bg">
          <div class="flex items-center  h-[46px] w-[236px] border-[1px] border-[#D9DCE2] rounded-[23px] bg-white mb-3">
            <span class="flex px-1 pl-4">
              <p class="h-8 w-8 flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-20 bg-white">
                <icon class="text-base fill-current stroke-current text-blue-900 "
                      name="mono/gton"/>
              </p>
              <p class="h-8 w-8 flex justify-center rounded-[40px] border-[1px] border-[#D9DCE2] items-center z-10 bg-white ml-[-7px]">
                <icon class="text-base fill-current stroke-current text-blue-900 "
                      name="mono/gton"/>
              </p>
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
                    38.30%
                  </div>
                </div>
              </div>

              <div class="flex">
                <btn block
                     rounded
                     variant="gradient">
                  Buy NOW
                </btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    openBuyLP() {
      // Deep copy object
      console.log('modal')
      const modal = JSON.parse(JSON.stringify(this.$store.getters["app/exampleModals"].buy));
      console.log(modal)
      this.$store.commit('app/PUSH_MODAL', modal)
    }
  }
})
</script>
