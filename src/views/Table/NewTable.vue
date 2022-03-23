<template>
  <!--begin::Tables Widget 11-->
  <div class="mb-5 mb-xl-8 card">
    <!--begin::Header-->
    <!--<div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1">New Arrivals</span>

        <span class="text-muted mt-1 fw-bold fs-7">Over 500 new products</span>
      </h3>
      <div class="card-toolbar">
        <a href="#" class="btn btn-sm btn-light-primary">
          <span class="svg-icon svg-icon-2">
            <inline-svg src="media/icons/duotune/arrows/arr075.svg" />
          </span>
          New Member
        </a>
      </div>
    </div>-->
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body py-3">
      <!--begin::Table container-->
      <div class="table-responsive">
        <!--begin::Table-->
        <table class="table align-middle gs-0 gy-4">
          <!--begin::Table head-->
          <thead>
            <tr class="fw-bolder text-muted bg-light">
              <th class="ps-4 min-w-150px rounded-start text-black">ASSETS</th>
              <th class="min-w-125px">PRICE</th>
              <th class="min-w-125px">BALANCE</th>
              <th class="min-w-30px">VALUE</th>
            </tr>
          </thead>
          <!--end::Table head-->

          <!--begin::Table body-->
          <tbody>
            <template v-for="(item, index) in list" :key="index">
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="symbol symbol-50px me-5">
                      <img :src="item.product.image"  alt="" style="border-radius:100%;  width:30px;height:30px" />
                    </div>

                    <div class="d-flex justify-content-start flex-column">
                      <a
                        href="#"
                        class="text-dark fw-bolder text-hover-primary mb-1 fs-6"
                        >{{ item.product.name }}</a
                      >
                    </div>
                  </div>
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6"
                    >{{ item.price }}</a
                  >
                
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6"
                    >{{ item.deposit }}</a
                  >
                
                </td>

                <td>
                  <a
                    href="#"
                    class="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6"
                    >{{ item.agent.name }}</a
                  >
                
                </td>

              
              </tr>
            </template>
          </tbody>
          <!--end::Table body-->
        </table>
        <!--end::Table-->
      </div>
      <!--end::Table container-->
    </div>
    <!--begin::Body-->
  </div>
  <!--end::Tables Widget 11-->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "new-table",
  components: {},
  props: {
    
  },
  setup() {
    const list = [
      {
        product: {
          image: "media/images/roundedCardIcon.png",
          name: "Bitcoin",
          
        },
        price: "$3232.74",
        deposit: "28.3843",
        agent: {
          name: "$8,000,000",
       
        },
      },
      {
        product: {
          image: "media/images/roundedCardIcon2.png",
          name: "Bitcoin",
          
        },
        price: "$3232.74",
        deposit: "28.3843",
        agent: {
          name: "$8,000,000",
       
        },
      },
      {
        product: {
          image: "media/images/roundedCardIcon3.png",
          name: "Bitcoin",
          
        },
        price: "$3232.74",
        deposit: "28.3843",
        agent: {
          name: "$8,000,000",
       
        },
      },
     
      
    ];

    return {
      list,
    };
  },
});
</script>
