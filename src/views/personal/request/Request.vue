<template>
  <v-container>
    <div class="px-3">
      <v-tabs v-model="tab" grow>
      <v-tab value="one">ข้อมูลผู้ยืนคำขอ</v-tab>
      <v-tab value="two">ข้อมูลที่อยู่</v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item value="one">
        {{ request.general }}
        <General v-model="request.general" />
      </v-window-item>
    </v-window>
    
    </div>
  </v-container>
</template>

<script>
import constructor from '@/store/constructor'
import General from './General.vue';

export default {
  name: "Personal-Request",

  components: {
    General,
  },

  data() {
    return {
      tab: null,
      request: {
        general: new constructor.General()
      }
    }
  }
};
</script>

<style></style>
