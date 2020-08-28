<template>
  <img
    :src="require(`@/assets/content/${file}`)"
    :alt="alt"
    class="w-full object-contain"
  />
</template>

<script>
export default {
  props: {
    file: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
