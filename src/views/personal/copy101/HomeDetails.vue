<template>
        <Section
            color="#D8B192"
            icon="mdi-clipboard-text"
            header="รายการทะเบียนบ้าน"
        ></Section>
<v-container>
        <v-row>
            <v-col cols="12" sm="6" lg="8" align-self="center">
                <span class="text-grey">ชื่อ - สกุล :</span>  {{ pidInfo.name }}              
            </v-col>
            <v-col cols="12" sm="6" lg="2" align-self="center">
                <span class="text-grey">เพศ : </span> {{ pidInfo.gender }}
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" sm="4" lg="4" align-self="center">
                <span class="text-grey">เกิดเมื่อ : </span> {{ pidInfo.birthDay }}
            </v-col>
            <v-col cols="12" sm="4" lg="4" align-self="center">
                <span class="text-grey">สถานภาพในบ้าน : </span> {{ pidInfo.homeStatus }}
            </v-col>
            <v-col cols="12" sm="4" lg="4" align-self="center">
                <span class="text-grey">สัญชาติ : </span> {{ pidInfo.pidNationality }}
            </v-col> 
        </v-row>

        <v-row>
            <v-col cols="12" sm="4" lg="4" align-self="center">
                <span class="text-grey">มารดาชื่อ : </span> {{ pidInfo.momName }}
            </v-col> 
            <v-col cols="12" sm="4" lg="4" align-self="center">
                <span class="text-grey">เลขประจำตัวประชาชน : </span> {{ pidInfo.momPid }}
            </v-col> 
            <v-col cols="12" sm="4" lg="4" align-self="center">
                <span class="text-grey">สัญชาติ : </span> {{ pidInfo.momNationality }}
            </v-col> 
        </v-row>

        <v-row>
            <v-col cols="12" sm="4" lg="4" align-self="center">
                <span class="text-grey">บิดาชื่อ : </span>  {{ pidInfo.dadName }}
            </v-col> 
            <v-col cols="12" sm="4" lg="4" align-self="center">
                <span class="text-grey">เลขประจำตัวประชาชน : </span> {{ pidInfo.dadPid }}
            </v-col> 
            <v-col cols="12" sm="4" lg="4" align-self="center">
                <span class="text-grey">สัญชาติ : </span> {{ pidInfo.dadNationality }}
            </v-col> 
        </v-row>

        <v-row span="2">
            <v-col cols="12" sm="12" lg="12" align-self="center">
                <span class="text-grey">ที่อยู่ : </span> {{ pidInfo.address }}
            </v-col> 
        </v-row>

        <v-row>
            <v-col cols="12" sm="6" lg="4" align-self="center">
                <span class="text-grey">ชื่อหมู่บ้าน : </span> {{ pidInfo.nameVillage }}
            </v-col>
            <v-col cols="12" sm="6" lg="4" align-self="center">
                <span class="text-grey">ประเภทบ้าน : </span> {{ pidInfo.typeHome }}
            </v-col> 
        </v-row>

        <v-row>
            <v-col cols="12" sm="6" lg="4" align-self="center">
                <span class="text-grey">เลขรหัสประจำบ้าน : </span>  {{ pidInfo.numberHome }}
            </v-col>
            <v-col cols="12" sm="6" lg="4" align-self="center">
                <span class="text-grey">สำนักทะเบียน : </span> {{ pidInfo.regisHome }}
            </v-col> 
        </v-row>

        <v-row>
            <v-col cols="12" sm="6" lg="4" align-self="center">
                <span class="text-grey">สถานภาพทางทะเบียน : </span> {{ pidInfo.regisHomeStatus }}
            </v-col>
            <v-col cols="12" sm="6" lg="4" align-self="center">
                <span class="text-grey">วันที่ย้ายเข้า : </span> {{ pidInfo.dateMoveIn }}
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