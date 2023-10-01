<template>
    <v-container>
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
                    
                ></v-autocomplete>
            </v-col>
            <v-col cols="12" sm="6" lg="3">
                    <v-text-field
                        v-model="localValue.pid"
                        label="เลขประจำตัวประชาชน"
                        placeholder="เลขประจำตัวประชาชน"
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

    </v-container>
</template>

<script>
    import { reactive } from "vue";
    import {pidCalculate} from '../../../helper/pidCalulate.js'
    import pidData from "@/store/mock/pidData.json";
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
                        // pid : "",
                        // select : "",
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
                if (pidCalculate(this.localValue.pid)){
                    const newPid = this.localValue.pid.replaceAll("-","")
                    console.log(this.pidInfo)
                    pidData.map((item) => {
                        console.log("item pid : ", item.pid.replaceAll("-",""))
                        if (newPid == item.pid.replaceAll("-","")){
                            this.pidInfo = item //Send to Components
                            this.localValue.pidData = item //Send to Copy.vue
                        }
                        else{
                            console.log('pid not match go next.')
                        }
                    })

                    console.log(this.pidInfo)

                }else{//
                    console.log(false)
                    //sweetAlert2
                }
            },

            clearData(){
                this.pidInfo = {};
                this.localValue.pidData = {};
                console.log(this.pidInfo)
                console.log(this.localValue.pidData)
            }
        }
    }
</script>