<template>
  <div class="card mb-5 mb-xl-10">
    <div class="card-body pt-9 pb-0">
      <div class="d-flex flex-wrap flex-sm-nowrap mb-3">
        <div class="me-7 mb-4">
          <div
            class="
              symbol symbol-100px symbol-lg-160px symbol-fixed
              position-relative
            "
          >
            <img src="media/avatars/300-1.jpg" alt="image" />
          </div>
        </div>
        <div class="flex-grow-1">
          <div
            class="
              d-flex
              justify-content-between
              align-items-start
              flex-wrap
              mb-2
            "
          >
            <div class="d-flex flex-column">
              <div class="d-flex align-items-center mb-2">
                <a
                  href="#"
                  class="text-gray-800 text-hover-primary fs-2 fw-bolder me-1"
                  >Max Smith</a
                >
                <a href="#">
                  <span class="svg-icon svg-icon-1 svg-icon-primary">
                    <inline-svg src="media/icons/duotune/general/gen026.svg" />
                  </span>
                </a>
              </div>
              <div class="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
                <a
                  href="#"
                  class="
                    d-flex
                    align-items-center
                    text-gray-400 text-hover-primary
                    me-5
                    mb-2
                  "
                >
                  <span class="svg-icon svg-icon-4 me-1">
                    <inline-svg
                      src="media/icons/duotune/communication/com006.svg"
                    />
                  </span>
                  0x9c5083dd4838e120dbeac44c052179692aa5dac5
                </a>
              </div>
            </div>
            <div class="d-flex my-4">
              <a
                href="#"
                class="btn btn-sm btn-light me-2"
                id="kt_user_follow_button"
              >
                <span class="svg-icon svg-icon-3 d-none">
                  <inline-svg src="media/icons/duotune/arrows/arr012.svg" />
                </span>
                Refresh Data
              </a>

              <a
                href="#"
                class="btn btn-sm btn-primary me-3"
                data-bs-toggle="modal"
                data-bs-target="#kt_modal_offer_a_deal"
                >Follow</a
              >
            </div>
          </div>
          <div class="d-flex flex-wrap flex-stack">
            <div class="d-flex flex-column flex-grow-1 pe-8">
              <div class="d-flex flex-wrap">
                <div
                  class="
                    border border-gray-300 border-dashed
                    rounded
                    min-w-125px
                    py-3
                    px-4
                    me-6
                    mb-3
                  "
                >
                  <div class="d-flex align-items-center">
                    <span class="svg-icon svg-icon-dark me-2">
                      <inline-svg src="media/icons/duotune/arrows/arr066.svg" />
                    </span>
                    <div
                      class="fs-2 fw-bolder"
                      data-kt-countup="true"
                      data-kt-countup-value="4500"
                      data-kt-countup-prefix="$"
                    >
                      832
                    </div>
                  </div>
                  <div class="fw-bold fs-6 text-gray-400">Followers</div>
                </div>
                <div
                  class="
                    border border-gray-300 border-dashed
                    rounded
                    min-w-125px
                    py-3
                    px-4
                    me-6
                    mb-3
                  "
                >
                  <div class="d-flex align-items-center">
                    <span class="svg-icon svg-icon-3 svg-icon-dark me-2">
                      <inline-svg src="media/icons/duotune/arrows/arr065.svg" />
                    </span>
                    <div
                      class="fs-2 fw-bolder"
                      data-kt-countup="true"
                      data-kt-countup-value="75"
                    >
                      28
                    </div>
                  </div>
                  <div class="fw-bold fs-6 text-gray-400">Following</div>
                </div>
                <div
                  class="
                    border border-gray-300 border-dashed
                    rounded
                    min-w-125px
                    py-3
                    px-4
                    me-6
                    mb-3
                  "
                >
                  <div class="d-flex align-items-center">
                    <span class="svg-icon svg-icon-3 svg-icon-dark me-2">
                      <inline-svg src="media/icons/duotune/arrows/arr066.svg" />
                    </span>
                    <div
                      class="fs-2 fw-bolder"
                      data-kt-countup="true"
                      data-kt-countup-value="60"
                      data-kt-countup-prefix="%"
                    >
                      1342
                    </div>
                  </div>
                  <div class="fw-bold fs-6 text-gray-400">Rank</div>
                </div>
              </div>
            </div>
            <div
              class="
                d-flex
                align-items-center
                w-200px w-sm-300px
                flex-column
                mt-3
              "
            >
              <div class="d-flex justify-content-between w-100 mt-auto mb-2">
                <span class="fw-bold fs-6 text-gray-400"
                  >Profile Compleation</span
                >
                <span class="fw-bolder fs-6">50%</span>
              </div>

              <div class="h-5px mx-3 w-100 bg-light mb-3">
                <div
                  class="bg-success rounded h-5px"
                  role="progressbar"
                  style="width: 50%"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex overflow-auto h-55px">
        <ul
          class="
            nav nav-stretch nav-line-tabs nav-line-tabs-2x
            border-transparent
            fs-5
            fw-bolder
            flex-nowrap
          "
        >
          <li class="nav-item">
            <router-link
              to="/crafted/account/overview"
              class="nav-link text-active-primary me-6"
              active-class="active"
            >
              Portfolio
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/crafted/account/settings"
              class="nav-link text-active-primary me-6"
              active-class="active"
            >
              NFTs
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/crafted/account/settings"
              class="nav-link text-active-primary me-6"
              active-class="active"
            >
              History
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/crafted/account/settings"
              class="nav-link text-active-primary me-6"
              active-class="active"
            >
              Approvals
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "profile",
});
</script>
