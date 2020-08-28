<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<style>
html {
  font-family: 'IBM Plex Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  transition: all 0.5s;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

::selection {
  @apply text-primary bg-accent;
}
::placeholder {
  @apply text-primary opacity-75;
}

.dark-mode {
  @apply text-white bg-primary;
}
.light-mode {
  @apply text-black bg-secondary;
}

.search-articles {
  transition: all 0.5s;
  @apply h-10 w-full absolute right-0 z-40 text-primary;
}
.search {
  @apply h-full w-full absolute right-0;
}
.search-input {
  background: url('~assets/search-icon.svg') no-repeat 0.5rem center;
  background-size: 1.5rem;
  transition: all 0.5s;
  @apply h-full w-full px-5 pl-10 bg-white absolute right-0 opacity-75;
}
.search-input:focus,
.search-input[aria-expanded='true'] {
  @apply opacity-100;
}
.search-result-list {
  @apply bg-white border border-primary list-none absolute left-0 z-40;
}
.search-result {
  @apply px-4 py-2 cursor-pointer;
}
.search-result:hover,
.search-result[aria-selected='true'] {
  @apply bg-primary text-white;
}

@media (max-width: 576px) {
  .search-input {
    @apply pl-10 pr-0 w-0 text-white;
  }
  .search-result-list {
    transition-delay: 0.5s;
  }
  .search-articles:focus-within {
    width: calc(100vw - 2rem);
  }
  .search-input:focus,
  .search-input[aria-expanded='true'] {
    width: calc(100vw - 2rem);
    @apply pr-5 text-black;
  }
}
</style>
