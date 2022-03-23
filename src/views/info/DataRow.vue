<template>

<div class="card-body pt-0">
              <KTDatatable
                :table-data="data"
                :table-header="headerConfig"
                :enable-items-per-page-dropdown="false"
              >
                <template v-slot:cell-checkbox="{ row: customer }">
                  <div
                    class="
                      form-check
                      form-check-sm
                      form-check-custom
                      form-check-solid
                    "
                  >
                    <div class="d-flex align-items-center flex-grow-1">
                      <!--begin::Avatar-->
                      <!-- <div class="symbol symbol-45px me-5">
              <img src="media/avatars/300-6.jpg" alt="" />
              </div> -->
                      <!--end::Avatar-->

                      <!--begin::Info-->
                      <div class="d-flex flex-column">
                        <a
                          href="#"
                          class="
                            text-gray-800 text-hover-primary
                            fs-6
                            fw-bolder
                          "
                          >{{ customer.id }}</a
                        >
                        <span class="text-gray-400 fw-bold">02:46 PM</span>
                        <span class="text-gray-400 fw-bold">Nov 01, 2022</span>
                      </div>
                      <!--end::Info-->
                    </div>

                    <!-- <input
              class="form-check-input"
              type="checkbox"
              :value="customer.id"
              v-model="checkedCustomers"
              /> -->
                  </div>
                </template>

                <template v-slot:cell-customer="{ row: customer }">
                  <router-link
                    to="/subscriptions/view-subscription"
                    href=""
                    class="text-gray-800 text-hover-primary mb-1"
                  >
                    {{ customer.customer }}
                    <div class="symbol symbol-30px me-5">
                      <img src="./image.png"
                       alt="" />
                    </div>
                  </router-link>
                </template>

                <template v-slot:cell-status="{ row: customer }">
                  <a href="#" class="text-gray-600 text-hover-primary mb-1">
                    <div :class="`badge badge-light-${customer.color}`">
                      {{ customer.status }}
                    </div>
                  </a>
                </template>

                <template v-slot:cell-textdata="{ row: customer }">
                  <div>{{ customer.textdata }}</div>
                  <span class="svg-icon svg-icon-3 svg-icon-dark me-2">
                      <inline-svg src="media/icons/duotune/arrows/arr064.svg" />
                    </span>
                </template>

                <template v-slot:cell-billing="{ row: customer }">
                  <div>{{ customer.billing }}</div>
                </template>

                <template v-slot:cell-product="{ row: customer }">
                  {{ customer.product }}
                </template>
                <template v-slot:cell-createdDate="{ row: customer }">
                  {{ customer.createdDate }}
                </template>
                <template v-slot:cell-actions="{ row: customer }">
                  <a
                    href="#"
                    class="btn btn-sm btn-light btn-primary"
                    data-kt-menu-trigger="click"
                    data-kt-menu-placement="bottom-end"
                    data-kt-menu-flip="top-end"
                    >View
                    <!-- <span class="svg-icon svg-icon-5 m-0">
                      <inline-svg src="media/icons/duotune/arrows/arr072.svg" />
                    </span> -->
                  </a>
                  <!--begin::Menu-->
                  <div
                    class="
                      menu
                      menu-sub
                      menu-sub-dropdown
                      menu-column
                      menu-rounded
                      menu-gray-600
                      menu-state-bg-light-primary
                      fw-bold
                      fs-7
                      w-125px
                      py-4
                    "
                    data-kt-menu="true"
                  >
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <router-link
                        to="/apps/customers/customer-details"
                        class="menu-link px-3"
                        >View</router-link
                      >
                    </div>
                    <!--end::Menu item-->
                    <!--begin::Menu item-->
                    <div class="menu-item px-3">
                      <a
                        @click="deleteCustomer(customer.id)"
                        class="menu-link px-3"
                        >Delete</a
                      >
                    </div>
                    <!--end::Menu item-->
                  </div>
                  <!--end::Menu-->
                </template>
              </KTDatatable>
            </div>





</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import KTDatatable from "@/components/kt-datatable/KTDatatable.vue";

export default defineComponent({
  name: "datarow",


  components: {
    KTDatatable,
  },






  setup() {
    const data = ref([
      {
        customer: "",
        status: "Received",
        color: "primary",
        billing: "0x00b9...06b1",
        textdata: "",
        product: "0x00b9...06b1",
        createdDate: "$123.79",
      },
      {
        customer: "",
        status: "Received",
        color: "primary",
        billing: "0x00b9...06b1",
        textdata: "",
        product: "0x00b9...06b1",
        createdDate: "$12.45",
      },
     {
        customer: "",
        status: "Sent",
        color: "danger",
        billing: "0x00b9...06b1",
        textdata: "",
        product: "0x00b9...06b1",
        createdDate: "$123.79",
      },
      {
        customer: "",
        status: "Sent",
        color: "danger",
        billing: "0x00b9...06b1",
        textdata: "",
        product: "0x00b9...06b1",
        createdDate: "$12.45",
      },
      {
        customer: "",
        status: "Received",
        color: "primary",
        billing: "0x00b9...06b1",
        textdata: "",
        product: "0x00b9...06b1",
        createdDate: "$123.79",
      },
      {
        customer: "",
        status: "Received",
        color: "primary",
        billing: "0x00b9...06b1",
        textdata: "",
        product: "0x00b9...06b1",
        createdDate: "$12.45",
      },
      {
        customer: "",
        status: "Sent",
        color: "danger",
        billing: "0x00b9...06b1",
        textdata: "",
        product: "0x00b9...06b1",
        createdDate: "$123.79",
      },
      {
        customer: "",
        status: "Received",
        color: "primary",
        billing: "0x00b9...06b1",
        textdata: "",
        product: "0x00b9...06b1",
        createdDate: "$12.45",
      },
      {
        customer: "",
        status: "Received",
        color: "primary",
        billing: "0x00b9...06b1",
        textdata: "",
        product: "0x00b9...06b1",
        createdDate: "$123.79",
      },
      {
        customer: "",
        status: "Sent",
        color: "danger",
        billing: "0x00b9...06b1",
        textdata: "",
        product: "0x00b9...06b1",
        createdDate: "$12.45",
      },
      {
        customer: "",
        status: "Sent",
        color: "danger",
        billing: "0x00b9...06b1",
        textdata: "",
        product: "0x00b9...06b1",
        createdDate: "$123.79",
      },
      {
        customer: "",
        status: "Received",
        color: "primary",
        billing: "0x00b9...06b1",
        textdata: "",
        product: "0x00b9...06b1",
        createdDate: "$12.45",
      },
      {
        customer: "",
        status: "Received",
        color: "primary",
        billing: "0x00b9...06b1",
        textdata: "",
        product: "0x00b9...06b1",
        createdDate: "$123.79",
      },
      {
        customer: "",
        status: "Sent",
        color: "danger",
        billing: "0x00b9...06b1",
        textdata: "",
        product: "0x00b9...06b1",
        createdDate: "$12.45",
      }
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
        key: "textdata",
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
