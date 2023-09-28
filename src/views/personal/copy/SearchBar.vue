<template>
    <v-row>
        <v-col cols="12" sm="6" lg="3">
            
        </v-col>
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
    </v-row>
</template>

<script>
    import { reactive } from "vue";

    export default {
        name: 'Personal-Copy-SearchBar',

        props: {
            modelValue: {
            type: Object,
            default: () => {
                return {
                    pid : "",
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