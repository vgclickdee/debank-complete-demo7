<template>
  <div class="card mt-5">
    <div class="card-header card-header-stretch">
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
                text-active-gray-800
                active
              "
              data-bs-toggle="tab"
              role="tab"
              href="#kt_activity_today"
            >
              Months
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              id="kt_activity_week_tab"
              class="nav-link justify-content-center text-active-gray-800"
              data-bs-toggle="tab"
              role="tab"
              href="#kt_activity_week"
            >
              Year
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              id="kt_activity_month_tab"
              class="nav-link justify-content-center text-active-gray-800"
              data-bs-toggle="tab"
              role="tab"
              href="#kt_activity_month"
            >
              All Time
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="card-body">
      <div class="tab-content">
        <div
          id="kt_activity_today"
          class="card-body p-0 tab-pane fade show active"
          role="tabpanel"
          aria-labelledby="kt_activity_today_tab"
        >
          <div class="timeline">
           <datarow/>
          </div>
        </div>
        <div
          id="kt_activity_week"
          class="card-body p-0 tab-pane fade show"
          role="tabpanel"
          aria-labelledby="kt_activity_week_tab"
        >
          <div class="timeline">
            <datarow/>
          </div>
        </div>
        <div
          id="kt_activity_month"
          class="card-body p-0 tab-pane fade show"
          role="tabpanel"
          aria-labelledby="kt_activity_month_tab"
        >
          <div class="timeline">
            <datarow/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent} from "vue";

import datarow from './DataRow.vue';

export default defineComponent({
  name: "table",

  components: {
    datarow
  }
});
</script>
