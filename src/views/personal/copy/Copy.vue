<template>
  <v-container>
    <!-- {{ request.searchBar }} -->
    <SearchBar v-model="request" />
    <!-- {{  request.homeDetails }} -->
    <!-- <HomeDetails v-model="request.homeDetails" /> -->
    <!-- {{  request.pidDetails }} -->
    <!-- <PidDetails v-model="request.pidDetails" /> -->

    <!-- <ScrollTop/> -->

    <v-footer app color="gray">
      <v-spacer></v-spacer>
        <v-btn prepend-icon="mdi-printer" color="blue-lighten-1" class="mr-3" @click="pdfPreviewCopy">Print</v-btn>
        <v-btn prepend-icon="mdi-exit-to-app" color="red-lighten-1">Exit</v-btn>
    </v-footer>
  </v-container>
</template>

<script>
import constructor from "@/store/constructor";
// import HomeDetails from "./HomeDetails.vue";
// import PidDetails from "./PidDetails.vue";
import SearchBar from "./SearchBar.vue";

import { exportPersonality1 } from "@/utils/requestHotel101";
// import ScrollTop from '@/components/Widget/ScrollTop.vue'

export default {
  name: "Personal-Copy",

  components: {
    SearchBar,
  },

  data: () => ({
        request:{},
        // peopleAddress:{},
    }),

  methods: {
    pdfPreviewCopy() {
      console.log(this.request);
      //console.log(this.pidInfo);
      exportPersonality1(this.request);
    },
  },

  // props: {
  //   pidInfo : Object
  // }
};
</script>
