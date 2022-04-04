<template>
  <!--begin::Modal - New Address-->
  <div
    class="modal fade"
    ref="newAddressModalRef"
    id="kt_modal_new_address"
    tabindex="-1"
    aria-hidden="true"
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog modal-dialog-centered mw-350px">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Form-->
        <Form
          class="form"
          id="kt_modal_new_address_form"
          @submit="submit"
          :validation-schema="validationSchema"
        >
          <!--end::Modal header-->

          <!--begin::Modal body-->
          <div class="modal-body py-10 px-7">
            <!--begin::Scroll-->
            <h2>Create a proposal</h2>
            <span class="text-muted"
              >Propose a new WEB3 idea and get feedback</span
            >
            <!--begin::Input group-->
            <div class="row my-7">
              <!--begin::Col-->
              <div class="col fv-row">
                <!--begin::Label-->
                <!--end::Label-->

                <!--begin::Input-->
                <Field
                  type="text"
                  class="form-control form-control-solid"
                  placeholder="Title"
                  name="firstName"
                  v-model="newAddressData.firstName"
                  style="border-radius: 11px"
                />
                <div class="fv-plugins-message-container">
                  <div class="fv-help-block">
                    <ErrorMessage name="firstName" />
                  </div>
                </div>
                <!--end::Input-->
              </div>
              <!--end::Col-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-5 fv-row">
              <!--begin::Label-->

              <!--begin::Select-->
              <Field
                name="country"
                class="form-select form-select-solid"
                as="select"
                placeholder="Category"
                v-model="newAddressData.country"
                style="border-radius: 11px"
              >
                <option value="" class="text-gray">Category</option>
                <option value="YE">Yemen</option>
                <option value="ZM">Zambia</option>
                <option value="ZW">Zimbabwe</option>
              </Field>
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="country" />
                </div>
              </div>
              <!--end::Select-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="d-flex flex-column mb-5 fv-row">
              <!--begin::Label-->
              <textarea
                class="form-control form-control-solid"
                rows="5"
                placeholder="Details"
                style="border-radius: 11px"
              ></textarea>
              <!--end::Input-->
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <!--end::Input group-->

            <!--begin::Input group-->

            <!--end::Input group-->

            <!--begin::Input group-->

            <!--end::Input group-->

            <!--begin::Input group-->

            <!--end::Input group-->

            <!--end::Scroll-->

            <!--end::Modal body-->

            <!--begin::Modal footer-->
            <!--begin::Button-->

            <!--end::Button-->

            <!--begin::Button-->
            <button
              ref="submitButtonRef"
              type="submit"
              id="kt_modal_new_address_submit"
              class="btn btn-primary"
              style="background-color: #2096f9"
            >
              <span class="indicator-label"> Submit for approval </span>
              <span class="indicator-progress">
                Please wait...
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
              </span>
            </button>
          </div>
          <!--end::Button-->

          <!--end::Modal footer-->
        </Form>
        <!--end::Form-->
      </div>
    </div>
  </div>
  <!--end::Modal - New Address-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import { hideModal } from "@/core/helpers/dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import * as Yup from "yup";

interface NewAddressData {
  firstName: string;
  lastName: string;
  country: string;
  address1: string;
  address2: string;
  town: string;
  state: string;
  postCode: string;
}

export default defineComponent({
  name: "new-address-modal",
  components: {
    ErrorMessage,
    Field,
    Form,
  },
  setup() {
    const submitButtonRef = ref<null | HTMLButtonElement>(null);
    const newAddressModalRef = ref<null | HTMLElement>(null);

    const newAddressData = ref<NewAddressData>({
      firstName: "",
      lastName: "",
      country: "",
      address1: "",
      address2: "",
      town: "",
      state: "",
      postCode: "",
    });

    const validationSchema = Yup.object().shape({
      firstName: Yup.string().required().label("First name"),
      lastName: Yup.string().required().label("Last name"),
      country: Yup.string().required().label("Country"),
      address1: Yup.string().required().label("Address Line 1"),
      address2: Yup.string().required().label("Address Line 2"),
      town: Yup.string().required().label("Town"),
      state: Yup.string().required().label("State/Province"),
      postCode: Yup.string().required().label("Post code"),
    });

    const submit = () => {
      if (!submitButtonRef.value) {
        return;
      }

      //Disable button
      submitButtonRef.value.disabled = true;
      // Activate indicator
      submitButtonRef.value.setAttribute("data-kt-indicator", "on");

      setTimeout(() => {
        if (submitButtonRef.value) {
          submitButtonRef.value.disabled = false;

          submitButtonRef.value?.removeAttribute("data-kt-indicator");
        }

        Swal.fire({
          text: "Form has been successfully submitted!",
          icon: "success",
          buttonsStyling: false,
          confirmButtonText: "Ok, got it!",
          customClass: {
            confirmButton: "btn btn-primary",
          },
        }).then(() => {
          hideModal(newAddressModalRef.value);
        });
      }, 2000);
    };

    return {
      newAddressData,
      validationSchema,
      submit,
      submitButtonRef,
      newAddressModalRef,
    };
  },
});
</script>
