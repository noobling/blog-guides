<template>
  <footer class="footer sm:container sm:mx-auto">
    <img
      src="@/assets/logo/cfc_logo_white_full.svg"
      alt="Coders for Causes wordmark"
      class="object-contain h-10 sm:h-12"
    />

    <p class="font-mono text-xs m-0">
      Made with &#10084;
      <br />
      <small> &copy; {{ new Date().getFullYear() }} Coders for Causes </small>
    </p>
  </footer>
</template>

<style scoped>
.footer {
  height: 64px;
  @apply bg-primary w-screen p-4 flex justify-between items-center;
}
</style>
