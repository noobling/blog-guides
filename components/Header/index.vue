<template>
  <header
    class="header z-20"
    :class="{ 'fixed top-0': $nuxt.$route.name === 'index' }"
  >
    <div class="sm:container sm:mx-auto px-4 flex justify-between items-center">
      <NuxtLink to="/">
        <button class="logo">cfc</button>
      </NuxtLink>
      <div class="hidden sm:flex justify-between items-center">
        <button class="flex justify-between items-center p-2">
          <i class="material-icons-sharp">nights_stay</i>
        </button>
        <input
          type="search"
          name="search"
          placeholder="Search Articles"
          class="search placeholder-black opacity-50 focus:opacity-100"
        />
      </div>
      <!-- <AppSearchInput class="ml-8" /> -->
      <!-- <ColorMode class="ml-6 mt-2 h-6 w-6" /> -->
    </div>
  </header>
</template>

<style scoped class="postcss">
.logo {
  @apply font-mono font-bold text-xl;
}
.header {
  @apply bg-primary h-16 w-full flex items-center py-4;
}
.search {
  @apply h-full border-white text-primary px-4 py-2 ml-4;
}
</style>
