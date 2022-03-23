<template>
                <div class="card shadow m-4 bg-white rounded p-2 w-230px h-70px">
                 <div class="d-flex align-items-center mb-7">
          <!--begin::Avatar-->
          <div class="symbol symbol-50px mx-5 my-1">
            <img src="media/images/roundedPic.png" class=""  alt="" style="border-radius:100%;" />
          </div>
          <!--end::Avatar-->

          <!--begin::Text-->
            <div class="d-flex flex-wrap">

            <a class=" text-muted d-block fw-bold mx-5">
              Assets on Ethereum
            </a>
            <span class="text-dark fw-bolder text-hover-primary fs-6 mx-5">
              $32,542,322
            </span>
 <span className="badge badge-primary h-25px w-75px py-2 mx-5">Stacked</span>
            </div>

          <!--end::Text-->
        </div>
        </div>
           
  </template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "portfolioCard2",
  components: {
  },
});
</script>