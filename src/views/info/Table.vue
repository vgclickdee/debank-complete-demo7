<template>
  <div class="card mt-5">
    <!--begin::Card head-->
    <div class="card-header card-header-stretch">
      <!--begin::Title-->
      <div class="card-title d-flex align-items-center">
        <!-- <span class="svg-icon svg-icon-1 svg-icon-primary me-3 lh-0">
          <inline-svg src="media/icons/duotune/general/gen014.svg" />
        </span> -->

        <h3 class="fw-bolder m-0 text-gray-800">Transaction History</h3>
      </div>
      <!--end::Title-->

      <!--begin::Toolbar-->
      <div class="card-toolbar m-0">
        <!--begin::Tab nav-->
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
          <!-- <li class="nav-item" role="presentation">
            <a
              id="kt_activity_year_tab"
              class="nav-link justify-content-center text-active-gray-800 text-hover-gray-800"
              data-bs-toggle="tab"
              role="tab"
              href="#kt_activity_year"
            >
              2021
            </a>
          </li> -->
        </ul>
        <!--end::Tab nav-->
      </div>
      <!--end::Toolbar-->
    </div>
    <!--end::Card head-->

    <!--begin::Card body-->
    <div class="card-body">
      <!--begin::Tab Content-->
      <div class="tab-content">
        <!--begin::Tab panel-->
        <div
          id="kt_activity_today"
          class="card-body p-0 tab-pane fade show active"
          role="tabpanel"
          aria-labelledby="kt_activity_today_tab"
        >
          <!--begin::Timeline-->
          <div class="timeline">
           <datarow/>
          </div>
          <!--end::Timeline-->
        </div>
        <!--end::Tab panel-->

        <!--begin::Tab panel-->
        <div
          id="kt_activity_week"
          class="card-body p-0 tab-pane fade show"
          role="tabpanel"
          aria-labelledby="kt_activity_week_tab"
        >
          <!--begin::Timeline-->
          <div class="timeline">
            <datarow/>
          </div>
          <!--end::Timeline-->
        </div>
        <!--end::Tab panel-->

        <!--begin::Tab panel-->
        <div
          id="kt_activity_month"
          class="card-body p-0 tab-pane fade show"
          role="tabpanel"
          aria-labelledby="kt_activity_month_tab"
        >
          <!--begin::Timeline-->
          <div class="timeline">
            <datarow/>
          </div>
          <!--end::Timeline-->
        </div>
        <!--end::Tab panel-->

        <!--begin::Tab panel-->
        <!-- <div
          id="kt_activity_year"
          class="card-body p-0 tab-pane fade show"
          role="tabpanel"
          aria-labelledby="kt_activity_year_tab"
        > -->

        <!--begin::Timeline-->
        <!-- <div class="timeline">
           2021
          </div> -->
        <!--end::Timeline-->

        <!-- </div> -->
        <!--end::Tab panel-->
      </div>
      <!--end::Tab Content-->
    </div>

    <!--end::Card body-->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
// import KTDatatable from "@/components/kt-datatable/KTDatatable.vue";

import datarow from './DataRow.vue';

export default defineComponent({
  name: "table",

  components: {
    datarow
  },

  setup() {
    const data = ref([
      {
        customer: "",
        status: "Received",
        color: "primary",
        billing: "0x00b9...06b1",
        product: "0x00b9...06b1",
        createdDate: "$123.79",
      },
      {
        customer: "",
        status: "Sent",
        color: "danger",
        billing: "0x00b9...06b1",
        product: "0x00b9...06b1",
        createdDate: "$12.45",
      },
      // {
      //   customer: "",
      //   status: "Received",
      //   color: "primary",
      //   billing: "Manual - Cash",
      //   product: "Teams Bundle",
      //   createdDate: "Jul 25, 2021",
      // },
      // {
      //   customer: "",
      //   status: "Sent",
      //   color: "danger",
      //   billing: "Manual - Paypal",
      //   product: "Enterprise",
      //   createdDate: "Aug 19, 2021",
      // },
      // {
      //   customer: "",
      //   status: "Received",
      //   color: "primary",
      //   billing: "Auto-debit",
      //   product: "Basic",
      //   createdDate: "May 05, 2021",
      // },
      // {
      //   customer: "",
      //   status: "Received",
      //   color: "primary",
      //   billing: "Auto-debit",
      //   product: "Enterprise Bundle",
      //   createdDate: "Aug 19, 2021",
      // },
      // {
      //   customer: "",
      //   status: "Sent",
      //   color: "danger",
      //   billing: "Auto-debit",
      //   product: "Teams",
      //   createdDate: "Jun 20, 2021",
      // },
      // {
      //   customer: "",
      //   status: "Sent",
      //   color: "danger",
      //   billing: "--",
      //   product: "Enterprise",
      //   createdDate: "Jun 24, 2021",
      // },
      // {
      //   customer: "",
      //   status: "Sent",
      //   color: "danger",
      //   billing: "Auto-debit",
      //   product: "Basic",
      //   createdDate: "Aug 19, 2021",
      // },
      // {
      //   customer: "",
      //   status: "Sent",
      //   color: "danger",
      //   billing: "Auto-debit",
      //   product: "Enterprise Bundle",
      //   createdDate: "Feb 21, 2021",
      // },
      // {
      //   customer: "",
      //   status: "Sent",
      //   color: "danger",
      //   billing: "Manual - Credit Card",
      //   product: "Enterprise",
      //   createdDate: "May 05, 2021",
      // },
      // {
      //   customer: "",
      //   status: "Sent",
      //   color: "danger",
      //   billing: "Manual - Credit Card",
      //   product: "Basic",
      //   createdDate: "Jun 24, 2021",
      // },
      // {
      //   customer: "",
      //   status: "Sent",
      //   color: "danger",
      //   billing: "--",
      //   product: "Teams Bundle",
      //   createdDate: "Jul 25, 2021",
      // },
      // {
      //   customer: "John Miller",
      //   status: "Received",
      //   color: "primary",
      //   billing: "Manual - Paypal",
      //   product: "Enterprise",
      //   createdDate: "Sep 22, 2021",
      // },
      // {
      //   customer: "Lucy Kunic",
      //   status: "Received",
      //   color: "primary",
      //   billing: "Manual - Credit Card",
      //   product: "Basic",
      //   createdDate: "Nov 10, 2021",
      // },
      // {
      //   customer: "Neil Owen",
      //   status: "Sent",
      //   color: "danger",
      //   billing: "--",
      //   product: "Basic Bundle",
      //   createdDate: "Jun 20, 2021",
      // },
      // {
      //   customer: "Dan Wilson",
      //   status: "Received",
      //   color: "primary",
      //   billing: "Manual - Paypal",
      //   product: "Enterprise",
      //   createdDate: "May 05, 2021",
      // },
      // {
      //   customer: "Emma Smith",
      //   status: "Received",
      //   color: "primary",
      //   billing: "Auto-debit",
      //   product: "Teams",
      //   createdDate: "Apr 15, 2021",
      // },
      // {
      //   customer: "Melody Macy",
      //   status: "Received",
      //   color: "primary",
      //   billing: "Manual - Credit Card",
      //   product: "Basic",
      //   createdDate: "Oct 25, 2021",
      // },
      // {
      //   customer: "Max Smith",
      //   status: "Sent",
      //   color: "danger",
      //   billing: "--",
      //   product: "Basic Bundle",
      //   createdDate: "Feb 21, 2021",
      // },
    ]);
    const headerConfig = ref([
      {
        name: "Time",
        key: "checkbox",
        sortable: false,
      },
      {
        name: "Description",
        key: "status",
        sortable: false,
      },
      {
        name: "Chain",
        key: "customer",
        sortable: false,
      },
      {
        name: "From",
        key: "billing",
        sortable: false,
      },
      {
        key: "customer",
        sortable: false,
      },
      {
        name: "To",
        key: "product",
        sortable: false,
      },
      {
        name: "Amount",
        key: "createdDate",
        sortable: false,
      },
      {
        name: "Gas Fee",
        key: "createdDate",
        sortable: false,
      },
      {
        key: "actions",
      },
    ]);

    onMounted(() => {
      //   setCurrentPageBreadcrumbs("Subscription List", ["Apps", "Subscriptions"]);
    });

    return {
      data,
      headerConfig,
    };
  },
});
</script>
