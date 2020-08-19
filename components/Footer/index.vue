<template>
  <footer class="footer">
    <div class="container mx-auto flex justify-between items-center">
      <div>
        <img
          src="~/assets/logo/cfc_logo_white_full.svg"
          alt="Coders for Causes wordmark"
          class="object-contain h-12 w-full mb-1"
        />
      </div>
      <p class="font-mono m-0">
        <small>Made with &#10084;</small>
      </p>
    </div>
  </footer>
</template>

<style scoped>
.logo {
  font-size: 20px;
  @apply font-mono font-bold;
}
.footer {
  height: 64px;
  @apply bg-primary w-full flex items-center py-4;
}
.search {
  @apply h-full border-white text-primary px-4 py-2 ml-4;
}
</style>
