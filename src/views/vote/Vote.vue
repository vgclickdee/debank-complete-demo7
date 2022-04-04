 <template>
 <div class="d-flex overflow-auto h-55px mb-5">
        <ul
          class="nav nav-stretch nav-line-tabs nav-line-tabs-1x border-transparent fs-5 fw-bolder flex-nowrap"
        >
        <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              to="/vote/newProposals"
              class="nav-link text-active-primary me-6"
              active-class="active"
            >
              New Proposals
            </router-link>
          </li>
          <!--end::Nav item-->
          <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              to="/crafted/account/settings"
              class="nav-link text-active-primary me-6"
              active-class="active"
            >
              Proposed Proposals
            </router-link>
          </li>
          <!--end::Nav item-->
            <!--begin::Nav item-->
          <li class="nav-item">
            <router-link
              to="/crafted/account/settings"
              class="nav-link text-active-primary me-6"
              active-class="active"
            >
              My Proposals
            </router-link>
          </li>
          <!--end::Nav item-->
         
        </ul>
      </div>
       <router-view></router-view>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "vote",
  components: {
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Vote", ["Vote"]);
    });
  },
});
</script>