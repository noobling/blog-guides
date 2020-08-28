<template>
  <header
    class="header z-20 text-white"
    :class="{ 'fixed top-0': $nuxt.$route.name === 'index' }"
  >
    <div
      class="w-full sm:container sm:mx-auto px-4 flex justify-between items-center"
    >
      <NuxtLink to="/">
        <button class="logo">cfc</button>
      </NuxtLink>
      <div class="relative w-24 sm:w-72 flex justify-between items-center">
        <button
          :title="`Switch to ${toggleHeading} mode`"
          class="flex justify-between items-center w-12 h-10 p-2 border-white relative"
          @click="$colorMode.preference = toggleHeading"
        >
          <transition name="fade">
            <i
              v-if="$colorMode.preference === 'light'"
              key="dark"
              class="absolute material-icons-sharp"
            >
              nights_stay
            </i>
            <i v-else key="light" class="absolute material-icons-sharp">
              wb_sunny
            </i>
          </transition>
        </button>
        <div class="h-10 w-full ml-6 relative">
          <autocomplete
            auto-select
            :search="search"
            :get-result-value="getOptions"
            placeholder="Search Articles"
            aria-label="Search Articles"
            base-class="search"
            class="search-articles"
          />
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import Autocomplete from '@trevoreyre/autocomplete-vue'

export default {
  components: {
    Autocomplete
  },
  computed: {
    toggleHeading() {
      return this.$colorMode.preference === 'light' ? 'dark' : 'light'
    }
  },
  methods: {
    async search(searchQuery) {
      if (!searchQuery) return []

      return await this.$content('articles')
        .limit(6)
        .search(searchQuery)
        .fetch()
    },
    getOptions(result) {
      return result.title
    }
  }
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.logo {
  @apply font-mono font-bold text-xl py-1;
}
.header {
  @apply bg-primary h-16 w-screen flex items-center py-4;
}
</style>
