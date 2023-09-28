<template>
    <v-container>
        <SearchBar v-model="request.searchBar"/>
        {{ request.searchBar }}
        <HomeDetails v-model="request.homeDetails"/>
        {{  request.homeDetails }}
        <PidDetails/>
    </v-container>
</template>

<script>
    import constructor from '@/store/constructor'
    import HomeDetails from './HomeDetails.vue'
    import PidDetails from './PidDetails.vue'
    import SearchBar from './SearchBar.vue'

    export default {
        name : "Personal-Copy",

        components: {
            HomeDetails,
            PidDetails,
            SearchBar,
        },
        data(){
            return{
                request: {
                    homeDetails: new constructor.HomeDetails(),
                    searchBar: new constructor.SearchBar(),
                }
            }
        }
    }
</script>