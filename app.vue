<template>
  <div id="kt_body" class="header-fixed header-tablet-and-mobile-fixed aside-fixed aside-secondary-disabled">
    <!--layout-partial:partials/theme-mode/_init.html-->
    <!--begin::Main-->
    <!--begin::Root-->
    <div class="d-flex flex-column flex-root">
      <!--begin::Page-->
      <div class="page d-flex flex-row flex-column-fluid">
        <Aside/>
        <!--begin::Wrapper-->
        <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
          <MobileHeader/>
          <Header/>
          <!--begin::Content-->
          <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
            <Content/>
          </div>
          <!--end::Content-->
          <Footer />
        </div>
        <!--end::Wrapper-->
      </div>
      <!--end::Page-->
    </div>
  </div>

  <Script src="/src/assets/plugins/global/plugins.bundle.js"></Script>
  <Script src="/src/assets/js/scripts.bundle.js"></Script>
</template>
<script setup lang="ts">
import Aside from "~/src/components/template/Aside.vue";
import MobileHeader from "~/src/components/template/MobileHeader.vue";
import Header from "~/src/components/template/Header.vue";
import Content from '~/src/components/template/Content.vue'
import Footer from "~/src/components/template/Footer.vue";
import Script from 'nuxt'

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700'
    },
  ],
  // script: [
  //   {
  //     src: '/src/assets/plugins/global/plugins.bundle.js'
  //   },
  //   {
  //     src: '/src/assets/js/scripts.bundle.js'
  //   }
  // ]
})
</script>
<style lang="scss">
@import "/src/assets/plugins/custom/datatables/datatables.bundle.css";
@import "/src/assets/css/style.bundle.css";
@import "/src/assets/plugins/global/plugins.bundle.css";
</style>
