<template>



<Chains/>





  <div class="card mt-5">
    <div class="card-header card-header-stretch" style="border-bottom: 0px solid #000000;">
      <div class="card-title d-flex align-items-center">
        <h3 class="fw-bolder m-0 text-gray-800">Transaction History</h3>
      </div>
      <div class="card-toolbar m-0">
        <ul
          class="nav nav-tabs nav-line-tabs nav-stretch fs-6 border-0 fw-bolder"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <a
              id="kt_activity_today_tab"
              class="
                nav-link
                justify-content-center
                active
                link-tab-btn
              "
              data-bs-toggle="tab"
              role="tab"
              href="#kt_activity_today"
            >
              <span class="nav-link-tab active">Months</span>
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              id="kt_activity_week_tab"
              class="nav-link justify-content-center link-tab-btn"
              data-bs-toggle="tab"
              role="tab"
              href="#kt_activity_week"
            >
              <span class="nav-link-tab active">Year</span>
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              id="kt_activity_month_tab"
              class="nav-link justify-content-center link-tab-btn"
              data-bs-toggle="tab"
              role="tab"
              href="#kt_activity_month"
            >
              <span class="nav-link-tab active">All Time</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="card-body p-0">
      <div class="tab-content">
        <div
          id="kt_activity_today"
          class="card-body p-0 tab-pane fade show active"
          role="tabpanel"
          aria-labelledby="kt_activity_today_tab"
        >
          <div class="timeline">
           <Datarow/>
          </div>
        </div>
        <div
          id="kt_activity_week"
          class="card-body p-0 tab-pane fade show"
          role="tabpanel"
          aria-labelledby="kt_activity_week_tab"
        >
          <div class="timeline">
            <Datarow/>
          </div>
        </div>
        <div
          id="kt_activity_month"
          class="card-body p-0 tab-pane fade show"
          role="tabpanel"
          aria-labelledby="kt_activity_month_tab"
        >
          <div class="timeline">
            <Datarow/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent} from "vue";

import Datarow from './DataRow.vue';
import Chains from './Chains.vue'

export default defineComponent({
  name: "table",

  components: {
    Datarow,
    Chains
  }
});
</script>


<style scoped>

/* 
.nav-line-tabs .nav-item .nav-link.active, .nav-line-tabs .nav-item.show .nav-link, .nav-line-tabs .nav-item .nav-link:hover:not(.disabled) {
    background-color: transparent;
    border: 0;
    border-bottom: 1px solid #04C8C8;
    transition: color 0.2s ease, background-color 0.2s ease;
} */

</style>


