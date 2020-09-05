<template>
  <div>
    <div class="bg-primary border-b border-secondary">
      <div class="sm:container sm:mx-auto px-4 pt-5 pb-24">
        <NuxtLink
          to="/"
          class="p-1 text-secondary flex items-center border border-transparent transition duration-200 hover:border-secondary"
          style="width: max-content"
        >
          <i class="material-icons-sharp">arrow_back</i>
          <span class="font-bold"> Back to All Articles </span>
        </NuxtLink>
      </div>
    </div>
    <div class="flex items-center sm:container sm:mx-auto px-4">
      <div
        class="flex items-center justify-center border border-secondary bg-primary text-7xl text-secondary font-mono w-32 h-32 -mt-16"
      >
        <img
          v-if="articles[0].author.img"
          loading="lazy"
          :src="articles[0].author.img"
          :alt="articles[0].author.name"
          class="h-full w-full object-cover"
        />
        <span v-else> DY </span>
      </div>
      <div class="ml-4">
        {{ articles[0].author.name }}
      </div>
    </div>
    <p class="sm:container sm:mx-auto px-4 mt-4">
      {{ articles[0].author.bio }}
    </p>

    <div class="sm:container sm:mx-auto px-4 mb-8 mt-8 md:mt-16">
      <h1 class="mb-4 font-bold text-2xl">
        Articles by {{ articles[0].author.name }}:
      </h1>
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
            class="h-48 w-full object-cover"
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
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .where({
        'author.name': {
          $regex: [params.author, 'i']
        }
      })
      .without('body')
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles
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
