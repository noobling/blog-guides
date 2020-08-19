<template>
  <article class="w-screen">
    <div v-show="article.img" class="relative w-screen h-96">
      <img
        :src="article.img"
        :alt="article.alt"
        class="absolute h-full w-full object-cover"
      />
    </div>
    <div class="container relative mx-auto mt-12 blog-grid">
      <div class="markdown-body post-right custom-scroll">
        <h1 class="font-mono text-5xl mb-4">{{ article.title }}</h1>
        <!-- content from markdown -->
        <nuxt-content :document="article" />
        <!-- prevNext component -->
        <PrevNext :prev="prev" :next="next" class="mt-8" />
      </div>
      <div class="static top-0">
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
  grid-template-columns: 1fr 18rem;
  grid-gap: 2rem;
}
.list-square {
  list-style-type: square;
}
.reduced-font {
  font-size: 0.9rem;
}
</style>
