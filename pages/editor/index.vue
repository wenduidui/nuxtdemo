<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-10 offset-md-1 col-xs-12">
          <ul class="error-messages">
            <template v-for="(messages, filed) in errors">
              <li
                v-for="(message, index) in messages"
                :key="filed + message"
              >{{ filed }} {{ message }}</li>
            </template>
          </ul>
          <form @submit.prevent="onSubmit">
            <fieldset>
              <fieldset class="form-group">
                <input
                  v-model="article.title"
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                  :disabled="disabled"
                >
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="article.description"
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                  :disabled="disabled"
                >
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  v-model="article.body"
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                  :disabled="disabled"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  v-model.trim="tagValue"
                  class="form-control"
                  placeholder="Enter tags"
                  @keydown.enter="addTag"
                  :disabled="disabled"
                >
                <div class="tag-list">
                  <span
                    class="tag-default tag-pill"
                    v-for="(tag, index) in article.tagList"
                    :key="index"
                  >
                    <i
                      class="ion-close-round"
                      @click="delTag(index)"
                    ></i>
                    {{tag}}
                  </span>
                </div>
              </fieldset>
              <button
                class="btn btn-lg pull-xs-right btn-primary"
                :disabled="disabled"
              >
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { createArticle, getArticleDetail, updateArticle } from '@/api/article'
export default {
  // 在路由匹配组件渲染之前会先执行中间件处理
  middleware: 'authenticated',
  name: 'EditorIndex',
  data () {
    return {
      disabled: false,
      errors: [],
      tagValue: '',
      article: {
        title: '',
        description: '',
        body: '',
        tagList: [],
      }
    }
  },
  mounted () {
    this.$route.params.slug && this.getArticleDetail(this.$route.params.slug)
  },
  methods: {
    addTag (e) {
      this.article.tagList.indexOf(this.tagValue) === -1 &&
        this.article.tagList.push(this.tagValue)
      e.preventDefault()
    },
    delTag (index) {
      this.article.tagList.splice(index, 1)
    },
    async onSubmit (e) {
      this.disabled = true
      try {
        let article
        if (this.$route.params.slug) { // 修改
          const { data } = await updateArticle({
            article: this.article,
            slug: this.$route.params.slug
          })
          article = data.article
        } else { // 新增
          const { data } = await createArticle({
            article: this.article,
          })
          article = data.article
        }
        this.errors = []
        this.$router.push({
          name: 'article',
          params: {
            slug: article.slug,
          },
        })
      } catch (err) {
        this.errors = err.response.data.errors
      }
      this.disabled = false
    },
    async getArticleDetail (slug) {
      const { data } = await getArticleDetail(slug)
      const { title, description, body, tagList } = data.article
      this.article = data.article
    }
  },
}
</script>

<style lang='less'>
</style>
