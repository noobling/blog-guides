<template>
  <main class="sm:container sm:mx-auto px-4 mb-8 mt-16">
    <h1 class="text-4xl pt-2 mb-6">Blog Posts</h1>
    <ul class="grid">
      <li
        v-for="article of articles"
        :key="article.slug"
        class="transition-all duration-500 w-full flex flex-col bg-light dark:bg-dark"
      >
        <img
          v-if="article.img"
          class="h-48 w-full object-cover"
          :src="article.img"
          :alt="article.alt || 'Article header image'"
        />
        <div class="p-5 flex flex-col justify-between h-full w-full">
          <div
            class="mb-2 flex flex-wrap items-center space-x-2 font-light text-xs text-muted"
          >
            <span
              v-for="tag in article.tags || []"
              :key="tag"
              class="border-1/2 border-muted border-opacity-25 px-1"
            >
              {{ tag }}
            </span>
          </div>
          <h2 class="font-bold font-mono text-xl mb-2">
            {{ article.title }}
          </h2>
          <p class="text-sm mb-2">by {{ article.author.name }}</p>
          <p class="font-bold text-muted text-sm mb-4">
            {{ article.description }}
          </p>
          <div>
            <button
              class="transition duration-150 border border-primary dark:border-secondary bg-primary dark:bg-transparent dark-hover:bg-secondary dark-hover:text-black text-white px-3 py-2"
              @click="
                $router.push({
                  name: 'blog-slug',
                  params: { slug: article.slug }
                })
              "
            >
              Read more
            </button>
          </div>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'alt', 'slug', 'tags', 'author'])
      .sortBy('createdAt', 'desc')
      .fetch()
    return { articles }
  }
}
</script>

<style scoped class="postcss">
.grid {
  grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  @apply grid gap-16;
}
</style>
