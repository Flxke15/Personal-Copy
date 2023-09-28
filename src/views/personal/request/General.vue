<template>
  <v-container>
    <SectionVue
      color="#D8B192"
      icon="mdi-clipboard-text"
      header="ข้อมูลใบอนุญาต ม.น.3"
    />
    <v-row>
      <v-col cols="12" sm="6" lg="3">
        <v-text-field
          v-model="localValue.pid"
          label="เลขประจำตัวประชาชน"
          placeholder="เลขประจำตัวประชาชน"
          variant="outlined"
          v-mask="'#-####-#####-##-#'"
          hide-details="auto"
          persistent-placeholder
        />
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <v-text-field
          v-model="localValue.firstName"
          label="ชื่อ"
          placeholder="ชื่อ"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { reactive } from "vue";
import SectionVue from "@/components/Widget/Section.vue";
export default {
  name: "Personal-Request-General",

  components: {
    SectionVue,
  },

  props: {
    modelValue: {
      type: Object,
      default: () => {
        return {
          pid: "",
          firstName: "",
        };
      },
    },
    readonly: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const localValue = reactive(props.modelValue);
    return {
      localValue,
    };
  },
};
</script>
