<template>
  <div
    class="card border border-1 border-white my-4 mx-2"
    style="
      min-width: 300.74px !important;
      min-height: 363px !important;
      border-radius: 12.29px !important;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    "
  >
    <div class="myDiv d-flex flex-wrap" data-v-4fdd9787="">
      <div class="innerDiv" data-v-4fdd9787="">
        <div
          class="images"
          data-v-4fdd9787=""
          style="z-index: 99999; margin-right: 61px !important"
        >
          <img
            src="./t1.png"
            style="border-radius: 50%"
            class="img1"
            data-v-4fdd9787=""
          /><img
            src="./t2.png"
            style="border-radius: 50%"
            class="img2"
            data-v-4fdd9787=""
          /><img
            src="./t3.png"
            style="border-radius: 50%"
            class="img3"
            data-v-4fdd9787=""
          />
        </div>
        <div
          class="d-flex flex-column"
          style="
            background: #00000040;
            border-top: 2px solid #ffffff;
            margin-top: 22px;
            height: 101.64px !important;
            border-radius: 0px 0px 15px 15px !important;
            backdrop-filter: blur(2.93539px);
          "
          data-v-4fdd9787=""
        >
          <div class="topMargin" data-v-4fdd9787="">
            <div class="d-flex flex-wrap fw-bold" data-v-4fdd9787="">
              <div class="mb-2" data-v-4fdd9787="">
                <p
                  style="
                    color: white;
                    font-family: 'Poppins';
                    font-style: normal;
                    font-weight: 700;
                    font-size: 15.6369px;
                    margin-left: 21px !important;
                  "
                  data-v-4fdd9787=""
                >
                  Monkcryptic #2342<br data-v-4fdd9787="" /><span
                    style="color: #e0e0e0; font-size: 13px"
                    data-v-4fdd9787=""
                    >Crypto Monks</span
                  >
                </p>
              </div>
              <div
                class="mb-2"
                data-v-4fdd9787=""
                style="margin-left: 33px !important"
              >
                <p
                  style="
                    color: white;
                    font-family: 'Poppins';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 15.6369px;
                    margin-bottom: 0px !important;
                    padding-bottom: 0px !important;
                  "
                  data-v-4fdd9787=""
                >
                  $243,760<br data-v-4fdd9787="" /><span
                    style="
                      font-family: 'Poppins';
                      font-style: normal;
                      font-weight: 600;
                      font-size: 11.1692px;
                      color: #e0e0e0;
                      margin-left: 25px !important;
                      margin-top: 5px !important;
                    "
                    data-v-4fdd9787=""
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
  /* background-size: auto; */
  width: 100%;
  height: 363px;
  background-repeat: no-repeat;
  border-radius: 12.29px !important;
}
.topMargin {
  margin-top: 33.54px;
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
