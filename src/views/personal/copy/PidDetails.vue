<template>
    <!-- <v-container> -->
        
        <Section
            color="#D8B192"
            icon="mdi-clipboard-text"
            header="รายการบัตรประจำตัวประชาชน"
        ></Section>

        <v-row >
            <v-col cols="12" sm="6" lg="6">
                <v-row>
                    <v-col>
                        <v-text-field
                            v-model="pidInfo.pidName"
                            label="ชื่อในบัตร"
                            placeholder="ชื่อในบัตร"
                            variant="outlined"
                            hide-details="auto"
                            persistent-placeholder
                            readonly
                            :disabled="pidInfo.pidName == undefined"
                        />
                    </v-col>
                </v-row>

                <v-row>
                    <v-col >
                        <v-textarea
                            rows="2"
                            v-model="pidInfo.pidAddress"
                            label="ที่อยู่ในบัตร"
                            placeholder="ที่อยู่ในบัตร"
                            variant="outlined"
                            hide-details="auto"
                            persistent-placeholder
                            readonly
                            :disabled="pidInfo.pidAddress == undefined"
                        />
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <v-text-field
                            v-model="pidInfo.pidIssueDate"
                            label="วันออกบัตร"
                            placeholder="วันออกบัตร"
                            variant="outlined"
                            hide-details="auto"
                            persistent-placeholder
                            readonly
                            :disabled="pidInfo.pidIssueDate == undefined"
                        />
                    </v-col>
                </v-row>

                <v-row>
                    <v-col>
                        <v-text-field
                            v-model="pidInfo.pidExpiryDate"
                            label="วันบัตรหมดอายุ"
                            placeholder="วันบัตรหมดอายุ"
                            variant="outlined"
                            hide-details="auto"
                            persistent-placeholder
                            readonly
                            :disabled="pidInfo.pidExpiryDate == undefined"
                        />
                    </v-col>
                </v-row>
            
                <v-row>
                    <v-col>
                        <v-text-field
                            v-model="pidInfo.pidMakeNo"
                            label="เลขรหัสการทำบัตร"
                            placeholder="เลขรหัสการทำบัตร"
                            variant="outlined"
                            hide-details="auto"
                            persistent-placeholder
                            readonly
                            :disabled="pidInfo.pidMakeNo == undefined"
                        />
                    </v-col> 
                </v-row>
            </v-col>

            <v-col cols="12" sm="6" lg="6" align="center" justify="center">
                <!-- <img :src="pidInfo.pidImage"> -->
                <v-img 
                    :src="pidInfo.pidImage"
                    width="250"
                    height="370"
                    cover
                ></v-img>
            </v-col> 
        </v-row>

    <!-- </v-container> -->
</template>

<script>
    import { reactive } from "vue";
    import Section from '@/components/Widget/Section.vue'
    import { convertImageToBase64 } from '@/helper/convertToBase64'

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