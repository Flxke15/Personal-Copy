<template>
    <!-- <v-container> -->
        <v-row>
            <v-col cols="12" sm="6" lg="3">
                <v-autocomplete
                    v-model="select"
                    variant="outlined"
                    hide-details="auto"
                    :items="items"
                    label="กรุณาเลือก"
                    placeholder="--กรุณาเลือก--"
                    persistent-placeholder
                />
            </v-col>
            <v-col cols="12" sm="6" lg="3">
                    <v-text-field
                        v-model="localValue.pid"
                        label="เลขประจำตัวประชาชน"
                        placeholder="X-XXXX-XXXXX-XX-X"
                        variant="outlined"
                        v-mask="'#-####-#####-##-#'"
                        hide-details="auto"
                        append-inner-icon="mdi-magnify"
                        @click:append-inner="checkPid"
                        persistent-placeholder
                        clearable
                        @click:clear="clearData"
                        :disabled="select == 'อ่านบัตรประจำตัวประชาชน' || select == undefined"
                    />
            </v-col>
        </v-row>

        <HomeDetails :pidInfo="pidInfo"/>
        <PidDetails :pidInfo="pidInfo"/>
        
    <!-- </v-container> -->
</template>

<script>
    import { reactive } from "vue";
    import { pidCalculate } from '../../../helper/pidCalulate.js'
    import pidDataJson from "@/store/mock/pidData.json";
    import HomeDetails from "./HomeDetails.vue";
    import PidDetails from "./PidDetails.vue";

    export default {
        name: 'Personal-Copy-SearchBar',

        data(){
            return {
                select: undefined,
                items: ['เลขประจำตัวประชาชน','อ่านบัตรประจำตัวประชาชน'],
                pidInfo : {},
            }
        },

        components: {
            HomeDetails,
            PidDetails,
        },

        props: {
            modelValue: {
                type: Object,
                default: () => {
                    return {
                        pid : "",
                        pidData : {}
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

        methods: {
            checkPid(){
                if (this.localValue.pid == undefined || this.localValue.pid.length != 17){
                    this.$swal({
                        icon: 'warning',
                        title: 'กรุณากรอกเลขประจำตัวประชาชนให้ครบ 13 หลัก',
                    });
                }else{
                    if (pidCalculate(this.localValue.pid)){
                        const newPid = this.localValue.pid.replaceAll("-","")
                        console.log(this.pidInfo) 
                        for (let i=0 ; i < pidDataJson.length; i++){
                            if (newPid == pidDataJson[i].pid.replaceAll("-","")){
                                this.pidInfo = pidDataJson[i] //Send to Components
                                this.localValue.pidData = pidDataJson[i] //Send to Copy.vue
                                break;
                            }else if (i == pidDataJson.length-1 && newPid != pidDataJson[i].pid.replaceAll("-","")){
                                console.log('pid not match go next.')
                                this.$swal({
                                    icon: 'info',
                                    title: 'ไม่มีข้อมูลในระบบ',
                                });
                            }else{
                                continue;
                            }
                        }
                    console.log(this.pidInfo)
                }else{
                    this.$swal({
                        icon: 'error',
                        title: 'ใส่เลขบัตรประชาชนให้ถูกต้อง',
                    });
                }
                }
            },

            clearData(){
                this.pidInfo = {};
                this.localValue.pidData = null;
                console.log(this.pidInfo)
                console.log(this.localValue.pidData)
            }
        }
    }
</script>