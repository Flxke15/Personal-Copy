<template>
    <v-container>
        <!-- {{ pidInfo }} -->
        <Section
            color="#D8B192"
            icon="mdi-clipboard-text"
            header="รายการทะเบียนบ้าน"
        ></Section>
        <v-row>
            <v-col cols="12" sm="6" lg="3">
                <v-text-field
                v-model="pidInfo.name"
                label="ชื่อ"
                placeholder="ชื่อ"
                variant="outlined"
                hide-details="auto"
                persistent-placeholder
                readonly
                :disabled="pidInfo.name == undefined"
                />
            </v-col>
            <v-col cols="12" sm="6" lg="3">
                <v-text-field
                v-model="pidInfo.gender"
                label="เพศ"
                placeholder="เพศ"
                variant="outlined"
                hide-details="auto"
                persistent-placeholder
                readonly
                :disabled="pidInfo.gender == undefined"
                />
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" sm="4" lg="3">
                <v-text-field
                v-model="pidInfo.birthDay"
                label="เกิดเมื่อ"
                placeholder="เกิดเมื่อ"
                variant="outlined"
                hide-details="auto"
                persistent-placeholder
                readonly
                :disabled="pidInfo.birthDay == undefined"
                />
            </v-col>
            <v-col cols="12" sm="4" lg="3">
                <v-text-field
                v-model="pidInfo.homeStatus"
                label="สถานภาพในบ้าน"
                placeholder="สถานภาพในบ้าน"
                variant="outlined"
                hide-details="auto"
                persistent-placeholder
                readonly
                :disabled="pidInfo.homeStatus == undefined"
                />
            </v-col>
            <v-col cols="12" sm="4" lg="3">
                <v-text-field
                v-model="pidInfo.pidNationality"
                label="สัญชาติ"
                placeholder="สัญชาติ"
                variant="outlined"
                hide-details="auto"
                persistent-placeholder
                readonly
                :disabled="pidInfo.pidNationality == undefined"
                />
            </v-col> 
        </v-row>

        <v-row>
            <v-col cols="12" sm="4" lg="3">
                <v-text-field
                v-model="pidInfo.momName"
                label="มารดาชื่อ"
                placeholder="มารดาชื่อ"
                variant="outlined"
                hide-details="auto"
                persistent-placeholder
                readonly
                :disabled="pidInfo.momName == undefined"
                />
            </v-col> 
            <v-col cols="12" sm="4" lg="3">
                <v-text-field
                v-model="pidInfo.momPid"
                label="เลขประจำตัวประชาชน"
                placeholder="เลขประจำตัวประชาชน"
                v-mask="'#-####-#####-##-#'"
                variant="outlined"
                hide-details="auto"
                persistent-placeholder
                readonly
                :disabled="pidInfo.momPid == undefined"
                />
            </v-col> 
            <v-col cols="12" sm="4" lg="3">
                <v-text-field
                v-model="pidInfo.momNationality"
                label="สัญชาติ"
                placeholder="สัญชาติ"
                variant="outlined"
                hide-details="auto"
                persistent-placeholder
                readonly
                :disabled="pidInfo.momNationality == undefined"
                />
            </v-col> 
        </v-row>

        <v-row>
            <v-col cols="12" sm="4" lg="3">
                <v-text-field
                v-model="pidInfo.dadName"
                label="บิดาชื่อ"
                placeholder="สัญชาติ"
                variant="outlined"
                hide-details="auto"
                persistent-placeholder
                readonly
                :disabled="pidInfo.dadName == undefined"
                />
            </v-col> 
            <v-col cols="12" sm="4" lg="3">
                <v-text-field
                v-model="pidInfo.dadPid"
                label="เลขประจำตัวประชาชน"
                placeholder="เลขประจำตัวประชาชน"
                v-mask="'#-####-#####-##-#'"
                variant="outlined"
                hide-details="auto"
                persistent-placeholder
                readonly
                :disabled="pidInfo.dadPid == undefined"
                />
            </v-col> 
            <v-col cols="12" sm="4" lg="3">
                <v-text-field
                v-model="pidInfo.dadNationality"
                label="สัญชาติ"
                placeholder="สัญชาติ"
                variant="outlined"
                hide-details="auto"
                persistent-placeholder
                readonly
                :disabled="pidInfo.dadNationality == undefined"
                />
            </v-col> 
        </v-row>

        <v-row span="2">
            <v-col cols="12" sm="12" lg="9">
                <v-text-field
                v-model="pidInfo.address"
                label="ที่อยู่"
                placeholder="ที่อยู่"
                variant="outlined"
                hide-details="auto"
                persistent-placeholder
                readonly
                :disabled="pidInfo.address == undefined"
                />
            </v-col> 
        </v-row>

        <v-row>
            <v-col cols="12" sm="6" lg="3">
                <v-text-field
                v-model="pidInfo.nameVillage"
                label="ชื่อหมู่บ้าน"
                placeholder="ชื่อหมู่บ้าน"
                variant="outlined"
                hide-details="auto"
                persistent-placeholder
                readonly
                :disabled="pidInfo.nameVillage == undefined"
                />
            </v-col>
            <v-col cols="12" sm="6" lg="3">
                <v-text-field
                v-model="pidInfo.typeHome"
                label="ประเภทบ้าน"
                placeholder="ประเภทบ้าน"
                variant="outlined"
                hide-details="auto"
                persistent-placeholder
                readonly
                :disabled="pidInfo.typeHome == undefined"
                />
            </v-col> 
        </v-row>

        <v-row>
            <v-col cols="12" sm="6" lg="3">
                <v-text-field
                v-model="pidInfo.numberHome"
                label="เลขรหัสประจำบ้าน"
                placeholder="เลขรหัสประจำบ้าน"
                variant="outlined"
                hide-details="auto"
                persistent-placeholder
                readonly
                :disabled="pidInfo.numberHome == undefined"
                />
            </v-col>
            <v-col cols="12" sm="6" lg="3">
                <v-text-field
                v-model="pidInfo.regisHome"
                label="สำนักทะเบียน"
                placeholder="สำนักทะเบียน"
                variant="outlined"
                hide-details="auto"
                persistent-placeholder
                readonly
                :disabled="pidInfo.regisHome == undefined"
                />
            </v-col> 
        </v-row>

        <v-row>
            <v-col cols="12" sm="6" lg="3">
                <v-text-field
                v-model="pidInfo.regisHomeStatus"
                label="สถานภาพทางทะเบียน"
                placeholder="สถานภาพทางทะเบียน"
                variant="outlined"
                hide-details="auto"
                persistent-placeholder
                readonly
                :disabled="pidInfo.regisHomeStatus == undefined"
                />
            </v-col>
            <v-col cols="12" sm="6" lg="3">
                <v-text-field
                v-model="pidInfo.dateMoveIn"
                label="วันที่ย้ายเข้า"
                placeholder="วันที่ย้ายเข้า"
                variant="outlined"
                hide-details="auto"
                persistent-placeholder
                readonly
                :disabled="pidInfo.dateMoveIn == undefined"
                />
            </v-col> 
        </v-row>
    </v-container>
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
            pidInfo : Object,

            readonly: {
                type: Boolean,
                default: true,
            },
        },

        methods: {
            checkPidInfo(){
                if (this.pidInfo == undefined){
                    return false
                }
            }
        }

    }
</script>