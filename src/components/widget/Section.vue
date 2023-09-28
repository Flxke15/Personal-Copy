<template>
  <v-col>
    <div class="d-flex align-center mb-3">
      <v-icon style="font-size: 30px" class="pr-2" :color="color">
        {{ icon }}
      </v-icon>
      <label
        :style="{ 'font-size': 'large', 'font-weight': 'bold', color: color }"
      >
        {{ header }}
      </label>
    </div>
    <v-divider class="border-opacity-100 mb-2" :color="color" :thickness="3"></v-divider>
  </v-col>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
    },
    icon: {
      type: String,
      default: "",
    },
    header: {
      type: String,
      default: "",
    },
  },
};
</script>
