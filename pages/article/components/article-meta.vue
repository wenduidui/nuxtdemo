<template>
  <div class="article-meta">
    <nuxt-link :to="{
      name: 'profile',
      params: {
        username: article.author.username
      }
    }"><img :src="article.author.image" /></nuxt-link>
    <div class="info">
      <nuxt-link
        class="author"
        :to="{
          name: 'profile',
          params: {
            username: article.author.username
          }
        }"
      >{{article.author.username}}</nuxt-link>
      <span class="date">{{article.createdAt | date('MMM DD, YYYY')}}</span>
    </div>
    <template v-if="article.author.username !== user.username">
      <button
        @click="onFollow(article)"
        class="btn btn-sm btn-outline-secondary"
        :class="{active: article.author.following}"
        :disabled="article.followDisabled"
      >
        <i class="ion-plus-round"></i>
        &nbsp;
        {{article.author.following ? 'Unfollow' : 'Follow'}} {{article.author.username}} <span class="counter"></span>
      </button>
      &nbsp;&nbsp;
      <button
        class="btn btn-sm btn-outline-primary"
        :class="{active: article.favorited}"
        :disabled="article.favoriteDisabled"
        @click="onFavorite(article)"
      >
        <i class="ion-heart"></i>
        &nbsp;
        Favorite Post <span class="counter">({{article.favoritesCount}})</span>
      </button>
    </template>
    <template v-else>

      <nuxt-link :to="{name: 'editor', params: {slug: article.slug}}">
        <button
          class="btn btn-sm btn-outline-secondary"
        >
          <i class="ion-edit"></i>
          &nbsp;
          Edit Article
        </button>
      </nuxt-link>

      &nbsp;&nbsp;
      <button
        class="btn btn-outline-danger btn-sm"
        @click="delArticle(article)"
      >
        <i class="ion-trash-a"></i>
        &nbsp;
        Delete Article
      </button>
    </template>
  </div>
</template>

<script>
import { addFavorite, deleteFavorite, delArticle } from "@/api/article";
import { followUser, unFollowUser } from "@/api/user";
import { mapState } from "vuex";
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data () {
    return {};
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    async onFavorite (article) {
      article.favoriteDisabled = true;
      // 取消点赞
      if (article.favorited) {
        await deleteFavorite(article.slug);
        article.favorited = false;
        article.favoritesCount += -1;
      } else {
        // 点赞
        await addFavorite(article.slug);
        article.favorited = true;
        article.favoritesCount += 1;
      }
      article.favoriteDisabled = false;
    },
    async onFollow (article) {
      article.followDisabled = true;
      if (article.author.following) {
        // 取消关注
        await unFollowUser(article.author.username);
        article.author.following = false;
      } else {
        // 关注
        await followUser(article.author.username);
        article.author.following = true;
      }
      article.followDisabled = false;
    },
    // 删除文章
    async delArticle (article) {
      await delArticle(article.slug)
      this.$router.push('/')
    }
  },
  head () {
    return {
      title: `${this.article.title} - RealWorld`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.article.description,
        },
      ],
    };
  },
};
</script>

<style lang='less'>
</style>
