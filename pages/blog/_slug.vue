<template>
  <article class="w-screen mb-8">
    <div v-show="article.img" class="relative w-screen h-96">
      <img
        :src="article.img"
        :alt="article.alt"
        class="absolute h-full w-full object-cover"
      />
    </div>
    <div class="sm:container sm:mx-auto px-4 relative mt-12 blog-grid">
      <div>
        <h1 class="font-mono overflow-x-hidden text-4xl md:text-5xl mb-4">
          {{ article.title }}
        </h1>
        <span class="md:hidden">
          <p class="mb-0">by {{ article.author.name }}</p>
          <!-- <p class="mb-1">{{ article.description }}</p> -->
          <p class="mb-4">
            <small>Last Updated: {{ formatDate(article.updatedAt) }}</small>
          </p>
        </span>
        <!-- content from markdown -->
        <nuxt-content :document="article" />
        <!-- prevNext component -->
        <PrevNext :prev="prev" :next="next" class="mt-8" />
      </div>
      <div class="static top-0 hidden md:block">
        <p class="mb-1">{{ article.description }}</p>
        <p class="mb-4">
          <small>Last Updated: {{ formatDate(article.updatedAt) }}</small>
        </p>
        <!-- table of contents -->
        <div class="sticky top-0 overflow-y-auto">
          <nav v-if="article.toc.length > 0" class="mb-6 bg-primary">
            <small class="font-mono">Table of Contents</small>
            <ul>
              <li
                v-for="link of article.toc"
                :key="link.id"
                class="list-inside"
                :class="{
                  'font-semibold py-1 list-square': link.depth === 2,
                  'ml-2 pb-1 list-disc reduced-font': link.depth === 3
                }"
              >
                <NuxtLink :to="`#${link.id}`" class="hover:underline">
                  {{ link.text }}
                </NuxtLink>
              </li>
            </ul>
          </nav>

          <!-- content author component -->
          <author :author="article.author" />
        </div>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return {
      article,
      prev,
      next
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>
<style scoped>
.blog-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
}
@media (min-width: 768px) {
  .blog-grid {
    grid-template-columns: 1fr 18rem;
  }
}

.list-square {
  list-style-type: square;
}
.reduced-font {
  font-size: 0.9rem;
}
</style>
