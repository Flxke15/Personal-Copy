<template>
    <v-container>
        <Section
            color="#D8B192"
            icon="mdi-clipboard-text"
            header="รายการบัตรประจำตัวประชาชน"
        ></Section>

        <v-row>
            <v-col cols="12" sm="6" lg="6">
                <v-text-field
                    v-model="localValue.pidName"
                    label="ชื่อในบัตร"
                    placeholder="ชื่อในบัตร"
                    variant="outlined"
                    hide-details="auto"
                    persistent-placeholder
                    readonly
                />
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" sm="6" lg="6">
                <v-text-field
                    v-model="localValue.pidAddress"
                    label="ที่อยู่ในบัตร"
                    placeholder="ที่อยู่ในบัตร"
                    variant="outlined"
                    hide-details="auto"
                    persistent-placeholder
                    readonly
                />
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" sm="6" lg="3">
                <v-text-field
                    v-model="localValue.pidIssueDate"
                    label="วันออกบัตร"
                    placeholder="วันออกบัตร"
                    variant="outlined"
                    hide-details="auto"
                    persistent-placeholder
                    readonly
                />
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" sm="6" lg="3">
                <v-text-field
                    v-model="localValue.pidExpiryDate"
                    label="วันบัตรหมดอายุ"
                    placeholder="วันบัตรหมดอายุ"
                    variant="outlined"
                    hide-details="auto"
                    persistent-placeholder
                    readonly
                />
            </v-col>
        </v-row>
        
        <v-row>
            <v-col cols="12" sm="6" lg="6">
                <v-text-field
                    v-model="localValue.pidMakeNo"
                    label="เลขรหัสการทำบัตร"
                    placeholder="เลขรหัสการทำบัตร"
                    variant="outlined"
                    hide-details="auto"
                    persistent-placeholder
                    readonly
                />
            </v-col> 
        </v-row>

    </v-container>
</template>

<script>
    import { reactive } from "vue";
    import Section from '@/components/Widget/Section.vue'
    
    export default {
        name: 'Personal-Copy-PidDetails',

        components: {
            Section,
        },

        props: {
            modelValue: {
            type: Object,
            default: () => {
                return {
                    pidName: "",
                    pidAddress: "",
                    pidIssueDate: "",
                    pidExpiryDate: "",
                    pidMakeNo: "",
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