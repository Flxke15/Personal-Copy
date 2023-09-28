<template>
    <v-container>
        {{ request.searchBar }}
        <SearchBar v-model="request.searchBar"/>
        {{  request.homeDetails }}
        <HomeDetails v-model="request.homeDetails"/>
        {{  request.pidDetails }}
        <PidDetails v-model="request.pidDetails"/>
        <!-- <ScrollTop/> -->
    </v-container>
</template>

<script>
    import constructor from '@/store/constructor'
    import HomeDetails from './HomeDetails.vue'
    import PidDetails from './PidDetails.vue'
    import SearchBar from './SearchBar.vue'
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
        }
    }
</script>