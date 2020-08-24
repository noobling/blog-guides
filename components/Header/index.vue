<template>
  <header
    class="header z-20 text-white"
    :class="{ 'fixed top-0': $nuxt.$route.name === 'index' }"
  >
    <div class="sm:container sm:mx-auto px-4 flex justify-between items-center">
      <NuxtLink to="/">
        <button class="logo">cfc</button>
      </NuxtLink>
      <div class="hidden sm:flex justify-between items-center">
        <button
          :title="`Switch to ${toggleHeading} mode`"
          class="flex justify-between items-center w-10 h-10 p-2 border-white"
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
        <input
          type="search"
          name="search"
          placeholder="Search Articles"
          class="search placeholder-black opacity-50 focus:opacity-100"
        />
      </div>
    </div>
  </header>
</template>
<script>
export default {
  computed: {
    toggleHeading() {
      return this.$colorMode.preference === 'light' ? 'dark' : 'light'
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
  @apply bg-primary h-16 w-full flex items-center py-4;
}
.search {
  @apply h-full border-white text-primary px-4 py-2 ml-4;
}
</style>
