<template>
  <div>
    <p
      style="
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
      "
    >
      My NFTs &nbsp;&nbsp;&nbsp;
      <span
        style="
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          color: #b5b5c3;
        "
        >Updated 3 mins ago</span
      >
    </p>
  </div>

  <div class="mt-3">
    <div class="d-flex flex-wrap">
      <card />
      <card />
      <card />
      <card />

      <card />
      <card />
      <card />
      <card />

      <card />
      <card />
      <card />
      <card />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

import Card from "./Card.vue";

export default defineComponent({
  name: "nfts",
  components: {
    Card,
  },
});
</script>
