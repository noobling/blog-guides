<template>
  <component
    :is="`icon-dark`"
    :class="getClasses('dark')"
    @click="changeMode"
  />
</template>

<script>
import IconDark from '@/assets/svg/dark-mode.svg?inline'

export default {
  components: {
    IconDark
  },
  computed: {
    btnLabel() {
      return this.$colorMode.preference === 'light' ? 'dark' : 'light'
    }
  },
  methods: {
    changeMode() {
      this.$colorMode.preference =
        this.$colorMode.preference === 'light' ? 'dark' : 'light'
    },
    getClasses(color) {
      // Does not set classes on ssr preference is system (because we know them on client-side)
      if (this.$colorMode.unknown) {
        return {}
      }
      return {
        preferred: color === this.$colorMode.preference,
        selected: color === this.$colorMode.value
      }
    }
  }
}
</script>

<style scoped>
.feather {
  position: relative;
  cursor: pointer;
  transition: all 0.1s ease;
}
.feather:hover {
  top: -3px;
}
.feather.preferred {
  border-color: var(--color-primary);
  top: -3px;
}
.feather.selected {
  color: var(--color-primary);
}
</style>
