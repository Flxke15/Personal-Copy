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
                    <span class="text-grey" >ชื่อในบัตร : </span> {{ pidInfo.pidName }}
                </v-col>
            </v-row>
            <v-row>
                <v-col >
                    <span class="text-grey" >ที่อยู่ในบัตร : </span> {{ pidInfo.pidAddress }}
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <span class="text-grey" >วันออกบัตร : </span> {{ pidInfo.pidIssueDate }}
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <span class="text-grey" >วันบัตรหมดอายุ : </span> {{ pidInfo.pidExpiryDate }}
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <span class="text-grey" >เลขรหัสการทำบัตร : </span> {{ pidInfo.pidMakeNo }}
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
    import Section from '@/components/widget/Section.vue'
    
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