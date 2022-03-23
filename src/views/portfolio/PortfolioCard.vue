<template>
                <div class="card shadow  bg-white rounded p-0 w-230px h-60px md-w-180px md-h-60px" style="margin-left:4%; margin-bottom:4%">
                 <div class="d-flex align-items-center mb-7">
          <!--begin::Avatar-->
          <div class="symbol symbol-60px me-5">
            <img src="media/images/eth.png" class="" alt="" style="border-radius: .475rem 0 0 .475rem;" />
          </div>
          <!--end::Avatar-->

          <!--begin::Text-->
          <div class="">
            <a href="#" class=" text-muted d-block fw-bold">
              Assets on Ethereum
            </a>
            <div class="d-flex flex-wrap">
            <span class="text-dark fw-bolder text-hover-primary fs-6">
              $32,542,322
            </span>
            <div class="fs-8 text-primary mx-5 mt-1">12%</div>
            </div>
          </div>
          <!--end::Text-->
        </div>
        </div>
           
  </template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "portfolioCard",
  components: {
  },
});
</script>