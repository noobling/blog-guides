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
  },
  head() {
    return {
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Guides by the Coders for Causes committee for coders.'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Guides | Coders for Causes'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Guides by the Coders for Causes committee for coders.'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content:
            'https://og-social-cards.vercel.app/**.%2Fguides**.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fcodersforcauses.org%2Flogo%2Fcfc_logo_white_full.svg'
        },
        {
          hid: 'twitter:url',
          name: 'twitter:url',
          content: 'https://guides.codersforcauses.org/'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Guides | Coders for Causes'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Guides by the Coders for Causes committee for coders.'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content:
            'https://og-social-cards.vercel.app/**.%2Fguides**.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fcodersforcauses.org%2Flogo%2Fcfc_logo_white_full.svg'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://guides.codersforcauses.org/'
        }
      ]
    }
  }
}
</script>

<style scoped>
.grid {
  grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
  @apply grid gap-16;
}
</style>
