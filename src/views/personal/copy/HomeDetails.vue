<template>
    <Section
        color="#D8B192"
        icon="mdi-clipboard-text"
        header="รายการทะเบียนบ้าน"
    ></Section>

    <v-row>
      <v-col cols="12" sm="6" lg="3">
        <v-text-field
          v-model="localValue.name"
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
          v-model="localValue.gender"
          label="ชื่อ"
          placeholder="ชื่อ"
          variant="outlined"
          hide-details="auto"
          persistent-placeholder
        />
      </v-col>
    </v-row>
</template>

<script>
    import { reactive } from "vue";
    import Section from '@/components/Widget/Section.vue'

    export default {
        name: 'Personal-Copy-HomeDetails',

        components: {
            Section,
        },

        props: {
            modelValue: {
            type: Object,
            default: () => {
                return {
                name: "",
                gender: "",
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
    }
</script>