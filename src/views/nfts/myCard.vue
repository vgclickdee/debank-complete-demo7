<template>
  <div class="card card-style my-4">
    <div class="d-flex flex-wrap flex-sm-nowrap">

      <div class="myDiv">
          
          
          <div class="innerDiv">
            <div class="mx-5 images">
              <img src="./t1.png" style="border-radius: 50%" class="img1" />
              <img src="./t2.png" style="border-radius: 50%" class="img2" />
              <img src="./t3.png" style="border-radius: 50%" class="img3" />
            </div>

            <div class="d-flex flex-column" style="background: #00000040">
              <div class="d-flex align-items-center topMargin">
                <div
                  class="d-flex flex-wrap fw-bold mx-5"
                  style="padding-top: 5px"
                >
                  <div class="min-w-80px me-6 mb-3">
                    <p style="color: white; font-size: 15px">
                      Monkcryptic #2342<br /><span
                        style="color: #e0e0e0; font-size: 13px"
                        >Crypto Monks</span
                      >
                    </p>
                  </div>

                  <div class="min-w-40px me-6 mb-3">
                    <p style="color: white; font-size: 15px">
                      $243,760<br /><span
                        style="color: #e0e0e0; font-size: 13px"
                        >2.19 ETH</span
                      >
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>



      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "card",
  components: {},
});
</script>



<style scoped>
.myDiv {
  background-image: url("image1.png");
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  border-radius: 5px;
}
.topMargin {
  margin-top: 43px;
}
.images {
  position: relative;
}
.innerDiv {
 bottom: 0;
 position: absolute;
 width: 100%;
}
.img1 {
  position: absolute;
  left: 10%;
}
.img2 {
  position: absolute;
  left: 24%;
}
.img3 {
  position: absolute;
  left: 38%;
}
</style>


