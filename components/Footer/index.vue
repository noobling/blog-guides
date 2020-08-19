<template>
  <footer class="footer sm:container sm:mx-auto">
    <img
      src="@/assets/logo/cfc_logo_white_full.svg"
      alt="Coders for Causes wordmark"
      class="object-contain h-12"
    />

    <p class="font-mono m-0">
      <small>Made with &#10084;</small>
      <br />
      <small>
        <small>&copy; {{ new Date().getFullYear() }} Coders for Causes</small>
      </small>
    </p>
  </footer>
</template>

<style scoped>
.footer {
  height: 64px;
  @apply bg-primary w-screen p-4 flex justify-between items-center;
}
</style>
