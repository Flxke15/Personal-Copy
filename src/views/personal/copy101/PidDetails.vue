<template>

    <Section
        color="#D8B192"
        icon="mdi-clipboard-text"
        header="รายการบัตรประจำตัวประชาชน"
    ></Section>
    <v-container>
    <v-row >
        <v-col cols="12" sm="6" lg="8">
            <v-row>
                <v-col>
                    <label>ชื่อในบัตร : {{ pidInfo.pidName }}</label>
                </v-col>
            </v-row>
            <v-row>
                <v-col >
                    <label>ที่อยู่ในบัตร : {{ pidInfo.pidAddress }}</label>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <label>วันออกบัตร : {{ pidInfo.pidIssueDate }}</label>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <label>วันบัตรหมดอายุ : {{ pidInfo.pidExpiryDate }}</label>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <label>เลขรหัสการทำบัตร : {{ pidInfo.pidMakeNo }}</label>
                </v-col> 
            </v-row>
        </v-col>

        <v-col cols="12" sm="6" lg="4" align="center" justify="center">
            <v-img 
                :src="pidInfo.pidImage"
                width="250"
                height="370"
                cover
            ></v-img>
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
            pidInfo: Object,
            
            readonly: {
                type: Boolean,
                default: true,
            },
        },

    }
</script>