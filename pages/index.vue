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
          loading="lazy"
          :src="article.img"
          :alt="article.alt || 'Article header image'"
          class="h-48 w-full object-cover cursor-pointer"
          @click="navigateToBlog(article)"
        />
        <div class="p-5 flex flex-col justify-between h-full w-full">
          <div
            class="mb-2 flex flex-wrap items-center space-x-2 font-light text-xs opacity-50"
          >
            <span
              v-for="tag in article.tags || []"
              :key="tag"
              class="border-1/2 border-muted px-1"
            >
              {{ tag }}
            </span>
          </div>
          <h2
            class="font-bold font-mono text-xl mb-2 cursor-pointer"
            @click="navigateToBlog(article)"
          >
            {{ article.title }}
          </h2>
          <NuxtLink
            :to="`/author/${article.author.name}`"
            class="text-sm mb-2 hover:underline"
          >
            by {{ article.author.name }}
          </NuxtLink>
          <p class="font-bold text-muted text-sm mb-4">
            {{ article.description }}
          </p>
          <div>
            <nuxt-link
              class="transition duration-150 border border-primary dark:border-secondary bg-primary dark:bg-transparent dark-hover:bg-secondary dark-hover:text-black hover:bg-dark text-white px-3 py-2"
              :to="{
                name: 'blog-slug',
                params: { slug: article.slug }
              }"
            >
              Read more
            </nuxt-link>
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
      .sortBy('updatedAt', 'desc')
      .fetch()
    return { articles }
  },
  methods: {
    navigateToBlog(article) {
      this.$router.push({
        name: 'blog-slug',
        params: { slug: article.slug }
      })
    }
  }
}
</script>

<style>
.grid {
  grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  @apply grid gap-16;
}
</style>
