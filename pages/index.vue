<template>
  <main class="sm:container sm:mx-auto px-4 mb-8 mt-16">
    <h1 class="text-4xl pt-2 mb-6">Blog Posts</h1>
    <ul class="grid">
      <li v-for="article of articles" :key="article.slug" class="w-full">
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class="flex flex-col"
        >
          <img
            v-if="article.img"
            class="h-48 w-full object-cover"
            :src="article.img"
          />

          <div class="p-5 flex flex-col justify-between w-full">
            <h2 class="font-bold font-mono text-xl mb-2">
              {{ article.title }}
            </h2>
            <p class="text-sm mb-2">by {{ article.author.name }}</p>
            <p class="font-bold text-gray-600 text-sm">
              {{ article.description }}
            </p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'desc')
      .fetch()
    return {
      articles
    }
  }
}
</script>

<style scoped class="postcss">
.grid {
  grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  @apply grid gap-16;
}
</style>
