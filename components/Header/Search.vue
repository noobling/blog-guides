<template>
  <input
    type="search"
    name="search"
    placeholder="Search Articles"
    class="w-10 sm:w-56 search pl-6 sm:pl-10 pr-4 placeholder-black opacity-50 focus:opacity-100"
  />
</template>

<script>
export default {}
</script>

<style scoped>
.search {
  background: url('~assets/search-icon.svg') no-repeat 0.5rem center;
  background-size: 1.5rem;
  transition: all 0.5s;
  @apply h-10 border-white bg-white text-primary py-2 absolute right-0 z-40;
}

@media (max-width: 576px) {
  .search:focus {
    width: calc(100vw - 2rem);
    @apply pl-10;
  }
}
</style>
