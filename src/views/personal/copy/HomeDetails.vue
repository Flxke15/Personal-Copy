<template>
    <v-container>
        <Section
            color="#D8B192"
            icon="mdi-clipboard-text"
            header="รายการทะเบียนบ้าน"
        ></Section>

        <v-row>
            <v-col cols="12" sm="6" lg="6">
                <v-text-field
                v-model="localValue.name"
                label="ชื่อ"
                placeholder="ชื่อ"
                variant="outlined"
                hide-details="auto"
                persistent-placeholder
                readonly
                />
            </v-col>
            <v-col cols="12" sm="6" lg="6">
                <v-text-field
                v-model="localValue.gender"
                label="เพศ"
                placeholder="เพศ"
                variant="outlined"
                hide-details="auto"
                persistent-placeholder
                readonly
                />
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" sm="4" lg="4">
                <v-text-field
                v-model="localValue.birthDay"
                label="เกิดเมื่อ"
                placeholder="เกิดเมื่อ"
                variant="outlined"
                hide-details="auto"
                persistent-placeholder
                readonly
                />
            </v-col>
            <v-col cols="12" sm="4" lg="4">
                <v-text-field
                v-model="localValue.homeStatus"
                label="สถานภาพในบ้าน"
                placeholder="สถานภาพในบ้าน"
                variant="outlined"
                hide-details="auto"
                persistent-placeholder
                readonly
                />
            </v-col>
            <v-col cols="12" sm="4" lg="4">
                <v-text-field
                v-model="localValue.pidNationality"
                label="สัญชาติ"
                placeholder="สัญชาติ"
                variant="outlined"
                hide-details="auto"
                persistent-placeholder
                readonly
                />
            </v-col> 
        </v-row>

        <v-row>
            <v-col cols="12" sm="4" lg="4">
                <v-text-field
                v-model="localValue.momBirthDay"
                label="มารดาชื่อ"
                placeholder="มารดาชื่อ"
                variant="outlined"
                hide-details="auto"
                persistent-placeholder
                readonly
                />
            </v-col> 
            <v-col cols="12" sm="4" lg="4">
                <v-text-field
                v-model="localValue.momPid"
                label="เลขประจำตัวประชาชน"
                placeholder="เลขประจำตัวประชาชน"
                v-mask="'#-####-#####-##-#'"
                variant="outlined"
                hide-details="auto"
                persistent-placeholder
                readonly
                />
            </v-col> 
            <v-col cols="12" sm="4" lg="4">
                <v-text-field
                v-model="localValue.momNationality"
                label="สัญชาติ"
                placeholder="สัญชาติ"
                variant="outlined"
                hide-details="auto"
                persistent-placeholder
                readonly
                />
            </v-col> 
        </v-row>

        <v-row>
            <v-col cols="12" sm="4" lg="4">
                <v-text-field
                v-model="localValue.dadBirthDay"
                label="บิดาชื่อ"
                placeholder="สัญชาติ"
                variant="outlined"
                hide-details="auto"
                persistent-placeholder
                readonly
                />
            </v-col> 
            <v-col cols="12" sm="4" lg="4">
                <v-text-field
                v-model="localValue.dadPid"
                label="เลขประจำตัวประชาชน"
                placeholder="เลขประจำตัวประชาชน"
                v-mask="'#-####-#####-##-#'"
                variant="outlined"
                hide-details="auto"
                persistent-placeholder
                readonly
                />
            </v-col> 
            <v-col cols="12" sm="4" lg="4">
                <v-text-field
                v-model="localValue.dadNationality"
                label="สัญชาติ"
                placeholder="สัญชาติ"
                variant="outlined"
                hide-details="auto"
                persistent-placeholder
                readonly
                />
            </v-col> 
        </v-row>

        <v-row>
            <v-col cols="12" sm="12" lg="12">
                <v-text-field
                v-model="localValue.address"
                label="ที่อยู่"
                placeholder="ที่อยู่"
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
                v-model="localValue.nameVillage"
                label="ชื่อหมู่บ้าน"
                placeholder="ชื่อหมู่บ้าน"
                variant="outlined"
                hide-details="auto"
                persistent-placeholder
                readonly
                />
            </v-col>
            <v-col cols="12" sm="6" lg="6">
                <v-text-field
                v-model="localValue.typeHome"
                label="ประเภทบ้าน"
                placeholder="ประเภทบ้าน"
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
                v-model="localValue.numberHome"
                label="เลขรหัสประจำบ้าน"
                placeholder="เลขรหัสประจำบ้าน"
                variant="outlined"
                hide-details="auto"
                persistent-placeholder
                readonly
                />
            </v-col>
            <v-col cols="12" sm="6" lg="6">
                <v-text-field
                v-model="localValue.regisHome"
                label="สำนักทะเบียน"
                placeholder="สำนักทะเบียน"
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
                v-model="localValue.regisHomeStatus"
                label="สถานภาพทางทะเบียน"
                placeholder="สถานภาพทางทะเบียน"
                variant="outlined"
                hide-details="auto"
                persistent-placeholder
                readonly
                />
            </v-col>
            <v-col cols="12" sm="6" lg="6">
                <v-text-field
                v-model="localValue.dateMoveIn"
                label="วันที่ย้ายเข้า"
                placeholder="วันที่ย้ายเข้า"
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
                    birthDay: "",
                    homeStatus: "",
                    pidNationality: "",
                    momBirthDay: "",
                    momPid: "",
                    momNationality: "",
                    dadBirthDay: "",
                    dadPid: "",
                    dadNationality: "",
                    address: "",
                    nameVillage: "",
                    typeHome: "",
                    numberHome: "",
                    regisHome: "",
                    regisHomeStatus: "",
                    dateMoveIn: "",
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