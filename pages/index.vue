<template>
  <main class="container mx-auto mb-8 mt-16">
    <h1 class="font-bold font-mono text-4xl mb-6">Blog Posts</h1>
    <ul class="grid">
      <li
        v-for="article of articles"
        :key="article.slug"
        class="w-full article-card"
      >
        <NuxtLink
          :to="{ name: 'blog-slug', params: { slug: article.slug } }"
          class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
        >
          <img
            v-if="article.img"
            class="h-48 xxlmin:w-1/2 xxlmax:w-full object-cover"
            :src="article.img"
          />

          <div
            class="p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full dark:bg-black-dark"
          >
            <h2 class="font-bold">{{ article.title }}</h2>
            <p>by {{ article.author.name }}</p>
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 2rem;
}

.article-card {
  border-radius: 8px;
}
.article-card a {
  border-radius: 8px;
}
.article-card img div {
  border-radius: 8px 0 0 8px;
}
</style>
