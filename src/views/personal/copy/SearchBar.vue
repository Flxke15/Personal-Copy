<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="6" lg="3">
                <v-autocomplete
                    v-model="localValue.select"
                    variant="outlined"
                    hide-details="auto"
                    :items="items"
                    label="กรุณาเลือก"
                ></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="4" lg="3">
                    <v-text-field
                        v-model="localValue.pid"
                        label="เลขประจำตัวประชาชน"
                        placeholder="เลขประจำตัวประชาชน"
                        variant="outlined"
                        v-mask="'#-####-#####-##-#'"
                        hide-details="auto"
                        persistent-placeholder
                        clearable
                    />
            </v-col>
            <v-col cols="12" sm="2" lg="2">
                    <v-btn
                        icon="mdi-magnify"
                        variant="text"
                    ></v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import { reactive } from "vue";

    export default {
        name: 'Personal-Copy-SearchBar',

        data(){
            return {
                items: ['เลขประจำตัวประชาชน','อ่านบัตรประจำตัวประชาชน'],
            }
        },

        props: {
            modelValue: {
            type: Object,
            default: () => {
                return {
                    pid : "",
                    select : "",
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