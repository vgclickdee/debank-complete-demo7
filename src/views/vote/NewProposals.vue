<template>
  <div class="row">
    <div class="col-8">
      <div class="d-flex justify-content-between">
        <div class="d-flex">
          <div class="fs-2x">All Proposals</div>
          <div class="text-muted mt-3 mx-5 fs-5">(6,299)</div>
        </div>
        <button
          class="btn btn-primary"
          style="background-color: #2096f9"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_new_address"
        >
          New Proposals
        </button>
        <NewProposalModal />
      </div>
      <div class="row mt-5">
        <div class="col">
          <Questions />
        </div>
      </div>
    </div>
    <div class="col-4">
      <div class="row">
        <div class="col">
          <div class="d-flex align-items-center position-relative">
            <span class="svg-icon svg-icon-1 position-absolute ms-6">
              <inline-svg src="media/icons/duotune/general/gen021.svg" />
            </span>
            <input
              type="text"
              data-kt-subscription-table-filter="search"
              class="form-control form-control-solid w-80% ps-14"
              style="border-width: 1px; border-color: #aaaaaa"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <PopularQuestions />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <LatestTutorial />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import Questions from "@/views/vote/Questions.vue";
import LatestTutorial from "@/views/vote/LatestTutorial.vue";
import PopularQuestions from "@/views/vote/PopularQuestions.vue";
import NewProposalModal from "@/views/Modal/NewProposalModal.vue";
export default defineComponent({
  name: "newProposals",
  components: {
    Questions,
    LatestTutorial,
    PopularQuestions,
    NewProposalModal,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Vote", ["Vote"]);
    });
  },
});
</script>
