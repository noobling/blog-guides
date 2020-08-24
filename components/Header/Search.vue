<template>
  <div class="w-10 sm:w-56 search">
    <input
      type="search"
      name="search"
      title="Search Articles"
      placeholder="Search Articles"
      class="search-bar pl-6 sm:pl-10 pr-4 placeholder-black sm:opacity-50 focus:opacity-100"
    />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.search {
  @apply h-10 absolute right-0 z-40;
}
.search-bar {
  background: url('~assets/search-icon.svg') no-repeat 0.5rem center;
  background-size: 1.5rem;
  transition: all 0.5s;
  @apply h-full w-full border-white bg-white text-primary py-2 absolute right-0 z-40;
}

@media (max-width: 576px) {
  .search-bar:focus {
    width: calc(100vw - 2rem);
    @apply pl-10;
  }
}
</style>
