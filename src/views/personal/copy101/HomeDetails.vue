<template>
        <Section
            color="#D8B192"
            icon="mdi-clipboard-text"
            header="รายการทะเบียนบ้าน"
        ></Section>
<v-container>
        <v-row>
            <v-col cols="12" sm="6" lg="8" align-self="center">
                <label>ชื่อ - สกุล : {{ pidInfo.name }}</label>
            </v-col>
            <v-col cols="12" sm="6" lg="2" align-self="center">
                <label>เพศ : {{ pidInfo.gender }}</label>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" sm="4" lg="4" align-self="center">
                <label>เกิดเมื่อ : {{ pidInfo.birthDay }}</label>
            </v-col>
            <v-col cols="12" sm="4" lg="4" align-self="center">
                <label>สถานภาพในบ้าน : {{ pidInfo.homeStatus }}</label>
            </v-col>
            <v-col cols="12" sm="4" lg="4" align-self="center">
                <label>สัญชาติ : {{ pidInfo.pidNationality }}</label>
            </v-col> 
        </v-row>

        <v-row>
            <v-col cols="12" sm="4" lg="4" align-self="center">
                <label>มารดาชื่อ : {{ pidInfo.momName }}</label>
            </v-col> 
            <v-col cols="12" sm="4" lg="4" align-self="center">
                <label>เลขประจำตัวประชาชน : {{ pidInfo.momPid }}</label>
            </v-col> 
            <v-col cols="12" sm="4" lg="4" align-self="center">
                <label>สัญชาติ : {{ pidInfo.momNationality }}</label>
            </v-col> 
        </v-row>

        <v-row>
            <v-col cols="12" sm="4" lg="4" align-self="center">
                <label>บิดาชื่อ : {{ pidInfo.dadName }}</label>
            </v-col> 
            <v-col cols="12" sm="4" lg="4" align-self="center">
                <label>เลขประจำตัวประชาชน : {{ pidInfo.dadPid }}</label>
            </v-col> 
            <v-col cols="12" sm="4" lg="4" align-self="center">
                <label>สัญชาติ : {{ pidInfo.dadNationality }}</label>
            </v-col> 
        </v-row>

        <v-row span="2">
            <v-col cols="12" sm="12" lg="12" align-self="center">
                <label>ที่อยู่ : {{ pidInfo.address }}</label>
            </v-col> 
        </v-row>

        <v-row>
            <v-col cols="12" sm="6" lg="4" align-self="center">
                <label>ชื่อหมู่บ้าน : {{ pidInfo.nameVillage }}</label>
            </v-col>
            <v-col cols="12" sm="6" lg="4" align-self="center">
                <label>ประเภทบ้าน : {{ pidInfo.typeHome }}</label>
            </v-col> 
        </v-row>

        <v-row>
            <v-col cols="12" sm="6" lg="4" align-self="center">
                <label>เลขรหัสประจำบ้าน : {{ pidInfo.numberHome }}</label>
            </v-col>
            <v-col cols="12" sm="6" lg="4" align-self="center">
                <label>สำนักทะเบียน : {{ pidInfo.regisHome }}</label>
            </v-col> 
        </v-row>

        <v-row>
            <v-col cols="12" sm="6" lg="4" align-self="center">
                <label>สถานภาพทางทะเบียน : {{ pidInfo.regisHomeStatus }}</label>
            </v-col>
            <v-col cols="12" sm="6" lg="4" align-self="center">
                <label>วันที่ย้ายเข้า : {{ pidInfo.dateMoveIn }}</label>
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