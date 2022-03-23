<template>


 <profile/>


<chains/>

<Table/>



 

  <!--begin::Card-->
</template>

<script lang="ts">
// import { defineComponent } from "vue";

import { defineComponent, ref, onMounted } from "vue";
import KTDatatable from "@/components/kt-datatable/KTDatatable.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";

import Profile from './Profile.vue'
import Chains from './Chains.vue'
import Table from './Table.vue'

export default defineComponent({
  name: "history",
  components: {
    Profile,
    Chains,
    Table,
  },

  setup() {
    const data = ref([
      {
        customer: "",
        status: "Received",
        color: "primary",
        billing: "Auto-debit",
        product: "Basic",
        createdDate: "Oct 25, 2021",
      },
      {
        customer: "",
        status: "Received",
        color: "primary",
        billing: "Manual - Credit Card",
        product: "Basic",
        createdDate: "Mar 10, 2021",
      },
      {
        customer: "",
        status: "Received",
        color: "primary",
        billing: "Manual - Cash",
        product: "Teams Bundle",
        createdDate: "Jul 25, 2021",
      },
      {
        customer: "",
        status: "Sent",
        color: "danger",
        billing: "Manual - Paypal",
        product: "Enterprise",
        createdDate: "Aug 19, 2021",
      },
      {
        customer: "",
        status: "Received",
        color: "primary",
        billing: "Auto-debit",
        product: "Basic",
        createdDate: "May 05, 2021",
      },
      {
        customer: "",
        status: "Received",
        color: "primary",
        billing: "Auto-debit",
        product: "Enterprise Bundle",
        createdDate: "Aug 19, 2021",
      },
      {
        customer: "",
        status: "Sent",
        color: "danger",
        billing: "Auto-debit",
        product: "Teams",
        createdDate: "Jun 20, 2021",
      },
      {
        customer: "",
        status: "Sent",
        color: "danger",
        billing: "--",
        product: "Enterprise",
        createdDate: "Jun 24, 2021",
      },
      {
        customer: "",
        status: "Sent",
        color: "danger",
        billing: "Auto-debit",
        product: "Basic",
        createdDate: "Aug 19, 2021",
      },
      {
        customer: "",
        status: "Sent",
        color: "danger",
        billing: "Auto-debit",
        product: "Enterprise Bundle",
        createdDate: "Feb 21, 2021",
      },
      {
        customer: "",
        status: "Sent",
        color: "danger",
        billing: "Manual - Credit Card",
        product: "Enterprise",
        createdDate: "May 05, 2021",
      },
      {
        customer: "",
        status: "Sent",
        color: "danger",
        billing: "Manual - Credit Card",
        product: "Basic",
        createdDate: "Jun 24, 2021",
      },
      {
        customer: "",
        status: "Sent",
        color: "danger",
        billing: "--",
        product: "Teams Bundle",
        createdDate: "Jul 25, 2021",
      },
      {
        customer: "John Miller",
        status: "Received",
        color: "primary",
        billing: "Manual - Paypal",
        product: "Enterprise",
        createdDate: "Sep 22, 2021",
      },
      {
        customer: "Lucy Kunic",
        status: "Received",
        color: "primary",
        billing: "Manual - Credit Card",
        product: "Basic",
        createdDate: "Nov 10, 2021",
      },
      {
        customer: "Neil Owen",
        status: "Sent",
        color: "danger",
        billing: "--",
        product: "Basic Bundle",
        createdDate: "Jun 20, 2021",
      },
      {
        customer: "Dan Wilson",
        status: "Received",
        color: "primary",
        billing: "Manual - Paypal",
        product: "Enterprise",
        createdDate: "May 05, 2021",
      },
      {
        customer: "Emma Smith",
        status: "Received",
        color: "primary",
        billing: "Auto-debit",
        product: "Teams",
        createdDate: "Apr 15, 2021",
      },
      {
        customer: "Melody Macy",
        status: "Received",
        color: "primary",
        billing: "Manual - Credit Card",
        product: "Basic",
        createdDate: "Oct 25, 2021",
      },
      {
        customer: "Max Smith",
        status: "Sent",
        color: "danger",
        billing: "--",
        product: "Basic Bundle",
        createdDate: "Feb 21, 2021",
      },
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
        sortable: true,
      },
      {
        name: "Chain",
        key: "customer",
        sortable: true,
      },
      {
        name: "From",
        key: "billing",
        sortable: true,
      },
      {
        key: "billing",
        sortable: true,
      },
      {
        name: "To",
        key: "product",
        sortable: true,
      },
      {
        name: "Amount",
        key: "createdDate",
        sortable: true,
      },
      {
        name: "Gas Fee",
        key: "createdDate",
        sortable: true,
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
