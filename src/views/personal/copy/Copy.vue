<template>
  <v-container>
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
          พิมพ์
        </v-btn>
    </v-footer>
  </v-container>
</template>

<script>
import constructor from "@/store/constructor";
import SearchBar from "./SearchBar.vue";
import { exportPersonality } from "@/utils/requestCopy";

//Label 
//PDF ให้ตรงกัน

export default {
  name: "Personal-Copy",

  components: {
    SearchBar,
  },

  data: () => ({
        request:{},
        // date: useDate()
  }),

  methods: {
    pdfPreviewCopy() {
        console.log(this.request);
        exportPersonality(this.request);
    },
  },

};
</script>
