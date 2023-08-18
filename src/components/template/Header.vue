<template>
  <!--begin::Header-->
  <div id="kt_header" class="header  py-6 py-lg-0" data-kt-sticky="true"
       data-kt-sticky-name="header"
       data-kt-sticky-offset="{lg: '300px'}"
  >
    <!--begin::Container-->
    <div class="header-container container-xxl">
      <!--begin::Page title-->
      <div
          class="page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-lg-20 py-3 py-lg-0 me-3">
        <!--begin::Heading-->
        <h1 class="d-flex flex-column text-dark fw-bold my-1">
        <span class="text-white fs-1">
            Dashboard</span>
          <small class="text-gray-600 fs-6 fw-normal pt-2">Create a store with #YDR-124-346 code</small>
        </h1>
        <!--end::Heading-->
      </div>
      <!--end::Page title--->
      <!--begin::Wrapper-->
      <div class="d-flex align-items-center flex-wrap">
        <!--begin::Search-->
        <div class="header-search py-3 py-lg-0 me-3">
          <!--layout-partial:partials/search/_inline.html-->
        </div>
        <!--end::Search-->
        <!--begin::Action-->
        <div class="d-flex align-items-center py-3 py-lg-0">
          <!--begin::Item-->
          <div class="me-3">
            <a href="#" class="btn btn-icon btn-custom btn-active-color-primary position-relative"
               data-kt-menu-trigger="click" data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
              <i class="ki-duotone ki-notification-bing fs-1 text-white"><span class="path1"></span><span
                  class="path2"></span><span class="path3"></span></i> <span
                class="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"></span>
            </a>
            <!--layout-partial:partials/menus/_notifications-menu.html-->
          </div>
          <!--end::Item-->
          <!--begin::Item-->
          <div class="me-3">
            <a href="#" class="btn btn-icon btn-custom btn-active-color-primary" data-kt-menu-trigger="click"
               data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
              <i class="ki-duotone ki-user fs-1 text-white"><span class="path1"></span><span class="path2"></span></i>
            </a>
            <UserAccount/>
          </div>
          <!--end::Item-->
          <!--begin::Theme mode-->
          <div class="d-flex align-items-center me-3">
            <!--layout-partial:partials/theme-mode/_main.html-->
          </div>
          <!--end::Theme mode-->
          <!--begin::Item-->
          <a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app">New Goal</a>
          <!--end::Item-->
        </div>
        <!--end::Action-->
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Container-->
    <div class="header-offset"></div>
  </div>
  <!--end::Header-->
</template>
<script lang="ts" setup>
import UserAccount from "~/src/components/template/UserAccount.vue";
</script>
