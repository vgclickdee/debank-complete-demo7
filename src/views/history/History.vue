<template>

  <!-- <profile />

  <chains /> -->

  <Table />

</template>

<script lang="ts">

import { defineComponent, ref, onMounted } from "vue";

import Profile from "./Profile.vue";
import Chains from "./Chains.vue";
import Table from "./Table.vue";

export default defineComponent({
  name: "history",
  components: {
    // Profile,
    // Chains,
    Table,
  }
});
</script>
