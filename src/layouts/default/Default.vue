<template>
  <v-app>
    <AppBar
      :appTitle="appTitle"
      :items="items"
      color="#D8B192"
      :srcImage="sidebarImg"
    />

    <AppView />
    <ScrollTop />

  </v-app>
</template>

<script>
import AppBar from "./AppBar.vue";
import AppView from "./View.vue";
import ScrollTop from "@/components/Widget/ScrollTop.vue";

import SidebarImg from '@/assets/images/gun.png'

export default {
  name: "Default",

  components: {
    AppBar,
    AppView,
    ScrollTop,
  },

  data() {
    return {
      appTitle: "",
      appSubTitle: "",
      items: [],
      sidebarImg: SidebarImg
    };
  },

  mounted() {
    this.appTitle = "คัดรับรองสำเนารายการคนและบ้าน";
    this.items = [
      // {
      //   title: 'จัดทำคำขอใบอนุญาต ม.น. 1',
      //   icon: 'mdi-certificate',
      //   link: '/personal/request',
      // },
      // {
      //   title: 'จัดการคำร้อง',
      //   icon: 'mdi-script-text',
      //   link: '/personal/manage',
      // },
      {
        title: 'คัดสำเนา',
        icon: 'mdi-script-text',
        link: '/personal/copy',
      },
    ]
  },
};
</script>
