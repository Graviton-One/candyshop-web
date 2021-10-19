<template>
  <div class="container">
    <div class="flex pt-8 pb-4 px-6">
      <span class="text-2xl font-bold mr-auto">
        My balance 💰
      </span>
    </div>
    <div class="flex flex-wrap">
      <div class="flex small-bg pt-5 pr-8 pb-9">
        <div class="flex border-[1px] border-white rounded-[14px] py-7 pl-7 pr-[150px] sm:pr-[285px]"
             style="backdrop-filter: blur(42px); ">
          <div class="text-[#12161D] leading-[135%] text-[26px] font-medium">
            $0.00
          </div>
        </div>
      </div>
    </div>
    <div class="flex pt-8 pb-4 px-6">
      <span class="text-2xl font-bold mr-auto">
        My candies
      </span>
    </div>
    <div class="flex rainbow p-10 rounded-[23px] mb-[53px]">
      <div class="flex w-full overflow-x-scroll sm:overflow-auto">
        <table class="w-full min-w-[600px]">
          <tr class="border-b border-[#D9DCE2] h-[70px]">
            <th class="text-[#12161D] text-opacity-50 text-left" width="5%">#</th>
            <th class="text-[#12161D] text-left" width="30%">LP Candies</th>
            <th class="text-[#12161D] text-left" width="20%">APY</th>
            <th class="text-[#12161D] text-left" width="20%">Paid</th>
            <th class="text-[#12161D] text-left" width="20%">Received</th>
            <th class="" width="5%"></th>
          </tr>
          <tr class="border-b border-[#D9DCE2] h-[70px]">
            <td class="text-[#12161D] text-opacity-50">1</td>
            <td>
              <div class="flex-wrap flex items-center h-full">
                <div class="flex px-1">
                  <div class="h-8 w-8 flex justify-center rounded-[40px] rainbow items-center z-20 bg-white">
                    <icon class="text-base fill-current stroke-current text-blue-900 "
                          name="mono/gton"/>
                  </div>
                  <div class="h-8 w-8 flex justify-center rounded-[40px] rainbow items-center z-10 bg-white ml-[-7px]">
                    <icon class="text-base fill-current stroke-current text-blue-900 "
                          name="mono/gton"/>
                  </div>
                </div>
                <div class="flex font-medium text-lg text-[#FF00F5]">
                  lp_gton-usdc
                </div>
              </div>

            </td>
            <td class="text-[#12161D]">
              38.30%
            </td>
            <td class="text-[#FF00F5]">$100</td>
            <td class="text-[#12161D]">$10 GTON</td>
            <td class="">
              <btn class="px-8"
                   size="medium"
                   variant="empty">
                Redeem
              </btn>
            </td>
          </tr>
          <tr class="border-b border-[#D9DCE2] h-[70px]">
            <td class="text-[#12161D] text-opacity-50">2</td>
            <td>
              <div class="flex-wrap flex items-center h-full">
                <div class="flex px-1">
                  <div class="h-8 w-8 flex justify-center rounded-[40px] rainbow items-center z-20 bg-white">
                    <icon class="text-base fill-current stroke-current text-blue-900 "
                          name="mono/gton"/>
                  </div>
                  <div class="h-8 w-8 flex justify-center rounded-[40px] rainbow items-center z-10 bg-white ml-[-7px]">
                    <icon class="text-base fill-current stroke-current text-blue-900 "
                          name="mono/gton"/>
                  </div>
                </div>
                <div class="flex font-medium text-lg text-[#FF00F5]">
                  lp_gton-usdc
                </div>
              </div>

            </td>
            <td class="text-[#12161D]">
              38.30%
            </td>
            <td class="text-[#FF00F5]">$100</td>
            <td class="text-[#12161D]">$10 GTON</td>
            <td class="">
              <btn class="px-8"
                   size="medium"
                   variant="empty">
                Redeem
              </btn>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
