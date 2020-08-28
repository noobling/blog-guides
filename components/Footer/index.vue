<template>
  <footer class="footer">
    <div class="sm:container sm:mx-auto p-4 flex justify-between items-center">
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
    </div>
  </footer>
</template>

<style scoped>
.footer {
  @apply bg-primary w-screen text-white;
}
</style>
