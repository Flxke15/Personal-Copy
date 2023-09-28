<template>
  <v-fab-transition v-if="shouldShowFab">
    <v-btn
      v-scroll="onScroll"
      color="pink"
      icon        
      theme="dark"
      class="backToTop"
      @click="scrollToTop"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  data() {
    return {
      shouldShowFab: false
    }
  },
  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return
      const top = window.scrollY || e.target.scrollTop || 0
      this.shouldShowFab = top > 20
    },
    scrollToTop() {
      this.$vuetify.goTo(0)
    }
  }
}
</script>
