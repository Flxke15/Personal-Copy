<template>
    <v-container>
        <!-- {{ request.searchBar }} -->
        <SearchBar v-model="request.searchBar"/>
        <!-- {{  request.homeDetails }} -->
        <HomeDetails v-model="request.homeDetails"/>
        <!-- {{  request.pidDetails }} -->
        <PidDetails v-model="request.pidDetails"/>
        
        <!-- <ScrollTop/> -->

        <v-footer app color="gray">
            <v-spacer></v-spacer>
            <v-btn class="mr-3" color="#3498DB" @click="pdfPreviewCopy"><v-icon icon="mdi-printer"></v-icon></v-btn>
            <v-btn color="#E74C3C"><v-icon icon="mdi-exit-to-app"></v-icon></v-btn>
        </v-footer>

    </v-container>
</template>

<script>
    import constructor from '@/store/constructor'
    import HomeDetails from './HomeDetails.vue'
    import PidDetails from './PidDetails.vue'
    import SearchBar from './SearchBar.vue'
    import {exportPersonality1} from '@/utils/requestHotel101'
    // import ScrollTop from '@/components/Widget/ScrollTop.vue'

    export default {
        name : "Personal-Copy",

        components: {
            HomeDetails,
            PidDetails,
            SearchBar,
            // ScrollTop,
        },

        data(){
            return{
                request: {
                    homeDetails: new constructor.HomeDetails(),
                    searchBar: new constructor.SearchBar(),
                    pidDetails: new constructor.PidDetails(),
                }
            }
        },

        methods: {
            pdfPreviewCopy(){
                console.log(this.request)
                exportPersonality1(this.request);
            }
        },

    }
</script>