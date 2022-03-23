<template>
<div class="my-7">
<div class="row">
    <div class="col">
<div class="d-flex flex-wrap">
    <div class="symbol symbol-50px me-5">
                      <img src="media/images/roundedCardIcon3.png"  alt="" style="border-radius:100%; width:30px;height:30px" />
                    </div>
<div class="text-grey fs-4 my-1">Platypus</div>
<h3 class="font-weight-bold text-black mx-4 my-1">$349,081</h3>
<img src="media/images/Group.png" class="w-25px h-7px mt-3" >
<!--
<span class="svg-icon svg-icon-primary svg-icon-2x"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <polygon points="0 0 24 0 24 24 0 24"/>
        <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000) " x="11" y="5" width="2" height="14" rx="1"/>
        <path d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z" fill="#000000" fill-rule="nonzero" transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997) "/>
    </g>
</svg></span>-->
</div>
    </div>
</div>
<div class="row">
    <div class="col">
<div class="d-flex flex-wrap mx-14 mt-7 mb-3">
 <span className="badge h-25px w-75px py-2" style="background-color:#FFA800">Farming</span>
                  
<div class="text-grey fs-6 mx-4 mt-1">$349,081</div>
</div>
    </div>
</div>
<div class="row">
    <div class="col">
<NewTable />
    </div>
</div>
<div class="row">
    <div class="col">
<div class="d-flex flex-wrap mx-14 mt-0 mb-3">
 <span className="badge badge-primary h-25px w-75px py-2">Stacked</span>
                  
<div class="text-grey fs-6 mx-4 mt-1">$349,081</div>
</div>
    </div>
</div>
<div class="row">
    <div class="col">
<NewTable />
    </div>
</div>
</div>
  </template>

<script lang="ts">
import { defineComponent } from "vue";
import NewTable from "@/views/Table/NewTable.vue"
export default defineComponent({
  name: "platypus",
  components: {
      NewTable,
  },
});
</script>