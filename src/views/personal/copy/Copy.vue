<template>
  <v-container>
    <!-- {{ request.pidData }}
    {{ request }} -->
    <SearchBar v-model="request" />
    <v-footer app color="gray">
      <v-spacer></v-spacer>
        <v-btn 
          prepend-icon="mdi-printer" 
          color="blue-lighten-1" 
          class="mr-3"
          :disabled="request.pidData == undefined "
          @click="pdfPreviewCopy" 
        >
          Print
        </v-btn>

        <v-btn 
          prepend-icon="mdi-exit-to-app" 
          color="red-lighten-1"
          @click="pdfPreviewCopy1"
        >
          Exit
        </v-btn>
    </v-footer>
  </v-container>
</template>

<script>
import constructor from "@/store/constructor";
// import HomeDetails from "./HomeDetails.vue";
// import PidDetails from "./PidDetails.vue";
import SearchBar from "./SearchBar.vue";
import { exportPersonality } from "@/utils/requestCopy"
import { exportPersonality1 } from "@/utils/requestHotel101";
// import ScrollTop from '@/components/Widget/ScrollTop.vue'

export default {
  name: "Personal-Copy",

  components: {
    SearchBar,
  },

  data: () => ({
        request:{},
        //active: false
        // peopleAddress:{},
  }),

  methods: {
    pdfPreviewCopy() {
        console.log(this.request);
        exportPersonality1(this.request);
    },
    pdfPreviewCopy1() {
        console.log(this.request);
        exportPersonality(this.request);
    },
  },

};
</script>
