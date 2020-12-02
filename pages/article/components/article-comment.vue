<template>
  <div>
    <form class="card comment-form" @submit.prevent="addComment">
      <div class="card-block">
        <textarea
          v-model="comment.body"
          class="form-control"
          placeholder="Write a comment..."
          rows="3"
        ></textarea>
      </div>
      <div class="card-footer">
        <img
          src="http://i.imgur.com/Qr71crq.jpg"
          class="comment-author-img"
        />
        <button class="btn btn-sm btn-primary">
          Post Comment
        </button>
      </div>
    </form>

    <div class="card" v-for="comment in comments" :key="comment.id">
      <div class="card-block">
        <p class="card-text">{{comment.body}}</p>
      </div>
      <div class="card-footer">
        <nuxt-link
          :to="{
            name: 'profile',
            params: {
              username: comment.author.username
            }
          }"
          class="comment-author"
        >
          <img
            :src="comment.author.image"
            class="comment-author-img"
          />
        </nuxt-link>
        &nbsp;
        <nuxt-link
          :to="{
            name: 'profile',
            params: {
              username: comment.author.username
            }
          }"
          class="comment-author"
        >{{comment.author.username}}
        </nuxt-link>
        <span class="date-posted">{{comment.createAt | date('MMM DD, YYYY')}}</span>
        <span class="mod-options" @click="deleteComment(comment.id)">
          <i class="ion-trash-a"></i>
        </span>
      </div>
    </div>

  </div>
</template>

<script>
import { getComments, addComments, deleteComment } from '@/api/article'
export default {
  name: 'ArticleComments',
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      comments: [], // 文章列表
      comment: {
        body: ''
      }
    }
  },
  mounted () {
    this.getCommentList()
  },
  methods: {
    async addComment () {
      const data = {
        comment: this.comment
      }
      await addComments(data, this.article.slug)
      this.getCommentList()
    },
    async getCommentList () {
      const { data } = await getComments(this.article.slug)
      this.comments = data.comments
    },
    async deleteComment (id) {
      await deleteComment(id, this.article.slug)
      this.getCommentList()
    }
  },
}
</script>

<style lang='less'>
</style>
