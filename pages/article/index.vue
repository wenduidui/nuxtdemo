<template>
  <div class="article-page">

    <div class="banner">
      <div class="container">

        <h1>{{article.title}}</h1>
        <article-meta :article="article"></article-meta>
      </div>
    </div>

    <div class="container page">

      <div class="row article-content">
        <div
          class="col-md-12"
          v-html="article.body"
        ></div>
      </div>
      <ul class="tag-list">
        <!-- ngRepeat: tag in ::$ctrl.article.tagList -->
        <li
          class="tag-default tag-pill tag-outline"
          v-for="tag in article.tagList"
          :key="tag"
        >
          {{tag}}
        </li>
      </ul>

      <hr />

      <div class="article-actions">
        <article-meta :article="article"></article-meta>
      </div>

      <div class="row">

        <div class="col-xs-12 col-md-8 offset-md-2">

          <article-comments :article="article"></article-comments>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import { getArticleDetail } from '@/api/article'
import MarkdownIt from 'markdown-it'
import articleMeta from './components/article-meta'
import ArticleComments from './components/article-comment'
export default {
  name: 'ArticleIndex',
  async asyncData ({ params }) {
    const { data } = await getArticleDetail(params.slug)
    const { article } = data
    const md = new MarkdownIt()
    article.body = md.render(article.body)
    article.favoriteDisabled = false
    article.followDisabled = false
    return {
      article: article
    }
  },
  components: {
    articleMeta,
    ArticleComments
  },
  data () {
    return {
    }
  },
  methods: {}
}
</script>

<style lang='less'>
</style>
