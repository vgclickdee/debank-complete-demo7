<template>


<ChainsButton/>

  <div class="my-7">
    <div class="row">
      <div class="col-lg-7">
        <div class="row">
          <div class="col">
            <div class="d-flex flex-wrap">
              <img src="media/images/walletIcon.png" class="h-30px" alt="" />

              <!--
    <span class="svg-icon svg-icon-primary svg-icon-2x mx-2 my-2"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect x="0" y="0" width="24" height="24"/>
        <circle fill="#000000" opacity="0.3" cx="20.5" cy="12.5" r="1.5"/>
        <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 6.500000) rotate(-15.000000) translate(-12.000000, -6.500000) " x="3" y="3" width="18" height="7" rx="1"/>
        <path d="M22,9.33681558 C21.5453723,9.12084552 21.0367986,9 20.5,9 C18.5670034,9 17,10.5670034 17,12.5 C17,14.4329966 18.5670034,16 20.5,16 C21.0367986,16 21.5453723,15.8791545 22,15.6631844 L22,18 C22,19.1045695 21.1045695,20 20,20 L4,20 C2.8954305,20 2,19.1045695 2,18 L2,6 C2,4.8954305 2.8954305,4 4,4 L20,4 C21.1045695,4 22,4.8954305 22,6 L22,9.33681558 Z" fill="#000000"/>
    </g>
</svg></span>-->
              <div class="text-grey fs-4 mx-2 my-2">Wallet</div>
              <h3 class="font-weight-bold text-black mx-2 my-2">$349,081</h3>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <NewTable />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <Platypus />
          </div>
        </div>
      </div>
      <div class="col-lg">
        <PortfolioOverview />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NewTable from "@/views/Table/NewTable.vue";
import Platypus from "@/views/portfolio/Platypus.vue";
import PortfolioOverview from "@/views/portfolio/PortfolioOverview.vue";

import ChainsButton from './ChainsButton.vue'
export default defineComponent({
  name: "portfolio",
  components: {
    NewTable,
    Platypus,
    PortfolioOverview,
    ChainsButton
  },
});
</script>