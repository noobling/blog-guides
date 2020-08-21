<template>
  <div class="flex justify-between">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
      class="font-bold hover:bg-gray-900 flex items-center p-2"
    >
      <i class="material-icons-sharp w-4 mr-2">chevron_left</i>
      &nbsp;{{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="{ name: 'blog-slug', params: { slug: next.slug } }"
      class="font-bold hover:bg-gray-900 flex items-center p-2"
    >
      {{ next.title }}
      <i class="material-icons-sharp w-4 ml-2">chevron_right</i>
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  }
}
</script>
