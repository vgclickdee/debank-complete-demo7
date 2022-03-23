<template>
<div class="my-3">
<div class="row">
    <div class="col">
<h3 class="font-weight-bold text-black fs-3">Portfolio Overview</h3>
</div>
</div>
<div class="row">
    <div class="col">
        <div class="card">
            <div class="d-flex flex-wrap mt-9">
               <PortfolioCard />
               <PortfolioCard />
               <PortfolioCard />
               <PortfolioCard />
               <PortfolioCard />
               <PortfolioCard />
               <PortfolioCard />
               <PortfolioCard />

            </div>
            <div class="mt-0">
                <PortfolioCard2 />
                <PortfolioCard2 />
                <PortfolioCard2 />
                <PortfolioCard2 />
                <PortfolioCard2 />

            </div>
        </div>
    </div>
</div>
</div>
  </template>

<script lang="ts">
import { defineComponent } from "vue";
import PortfolioCard from "@/views/portfolio/PortfolioCard.vue"
import PortfolioCard2 from "@/views/portfolio/PortfolioCard2.vue"

export default defineComponent({
  name: "portfolioOverview",
  components: {
      PortfolioCard,
      PortfolioCard2,

  },
});
</script>