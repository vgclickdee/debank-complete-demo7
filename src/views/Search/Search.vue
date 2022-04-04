<template>
  <MenuComponent menu-selector="#kt-search-menu">
    <template v-slot:toggle>
      <!--begin::Search-->
      <div
        id="kt_header_search"
        class="d-flex align-items-stretch"
        data-kt-menu-target="#kt-search-menu"
        data-kt-menu-trigger="click"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
        data-kt-menu-flip="bottom"
      >
        <!--begin::Search toggle-->
        <div class="d-flex align-items-center" id="kt_header_search_toggle">
          <div class="btn btn-icon btn-active-light-primary">
            <span class="svg-icon svg-icon-1">
              <inline-svg src="media/icons/duotune/general/gen021.svg" />
            </span>
          </div>
        </div>
        <!--end::Search toggle-->
      </div>
      <!--end::Search-->
    </template>
    <template v-slot:content>
      <!--begin::Menu-->
      <div
        class="menu menu-sub menu-sub-dropdown menu-column p-7 w-500px"
        data-kt-menu="true"
        id="kt-search-menu"
        style="width: 550px !important"
      >
        <!--begin::Wrapper-->
        <div>
          <!--begin::Form-->
          <form class="w-100 position-relative mb-3" autocomplete="off">
            <!--begin::Icon-->
            <span
              class="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 translate-middle-y ms-0"
            >
              <inline-svg src="media/icons/duotune/general/gen021.svg" />
            </span>
            <!--end::Icon-->

            <!--begin::Input-->
            <input
              ref="inputRef"
              v-model="search"
              @input="searching($event)"
              type="text"
              class="form-control form-control-flush ps-10"
              name="search"
              placeholder="Search by address / protocol / ens"
            />
            <!--end::Input-->

            <!--begin::Spinner-->
            <span
              v-if="loading"
              class="position-absolute top-50 end-0 translate-middle-y lh-0 me-1"
            >
              <span
                class="spinner-border h-15px w-15px align-middle text-gray-400"
              ></span>
            </span>
            <!--end::Spinner-->

            <!--begin::Reset-->
            <span
              v-show="search.length && !loading"
              @click="reset()"
              class="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0"
            >
              <span class="svg-icon svg-icon-2 svg-icon-lg-1 me-0">
                <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
              </span>
            </span>
            <!--end::Reset-->

            <!--begin::Toolbar-->

            <!--end::Toolbar-->
          </form>
          <!--end::Form-->

          <!--begin::Separator-->
          <div class="separator border-gray-200 mb-6"></div>
          <!--end::Separator-->
          <Results v-if="state === 'results'"></Results>
          <!--<Main v-else-if="state === 'main'"></Main>-->
          <Empty v-else-if="state === 'empty'"></Empty>
        </div>
        <!--end::Wrapper-->
      </div>
      <!--end::Menu-->
    </template>
  </MenuComponent>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Results from "@/views/Search/Results.vue";
import Main from "@/views/Search/Main.vue";
import Empty from "@/views/Search/Empty.vue";
import MenuComponent from "@/views/Search/MenuComponent.vue";

export default defineComponent({
  name: "kt-search",
  components: {
    Results,
    Empty,
    MenuComponent,
  },
  setup() {
    const search = ref<string>("");
    const state = ref<
      "main" | "empty" | "advanced-options" | "preferences" | "results"
    >("main");
    const loading = ref<boolean>(false);
    const inputRef = ref<HTMLInputElement | null>(null);

    const searching = (e) => {
      console.log(e.target.value);
      if (e.target.value.length > 0) {
        if (e.target.value.length > 5) {
          load("empty");
          return;
        }
        load("results");
      } else {
        load("main");
      }
    };

    const load = (current) => {
      loading.value = true;
      setTimeout(() => {
        state.value = current;
        loading.value = false;
      }, 1000);
    };

    const reset = () => {
      search.value = "";
      state.value = "main";
    };

    const setState = (curr) => {
      state.value = curr;
    };

    return {
      search,
      state,
      loading,
      searching,
      reset,
      inputRef,
      setState,
    };
  },
});
</script>
