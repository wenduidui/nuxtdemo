<template>
  <div class="profile-page">

  <div class="user-info">
    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-md-10 offset-md-1">
          <img :src="profile.image" class="user-img" />
          <h4>{{profile.username}}</h4>
          <p>
            {{profile.bio}}
          </p>
          <button
        @click="onFollow(profile)"
        class="btn btn-sm btn-outline-secondary action-btn"
        :class="{active: profile.following}"
        :disabled="profile.followDisabled"
      >
        <i class="ion-plus-round"></i>
        &nbsp;
        {{profile.following ? 'Unfollow' : 'Follow'}} {{profile.username}} <span class="counter"></span>
      </button>
        </div>

      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">

      <div class="col-xs-12 col-md-10 offset-md-1">
        <div class="articles-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item">
              <nuxt-link
                  class="nav-link"
                  exact
                  @click.native="getArticle"
                  :class="{active: tabType === 'author'}"
                  :to="{
                    name: 'profile'
                  }">My Articles</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link
                  class="nav-link"
                  exact
                  @click.native="getArticle"
                  :class="{active: tabType === 'favorited'}"
                  :to="{
                    name: 'profile',
                    params: {
                      favorited: 'favorites'
                    }
                  }">Favorited Articles</nuxt-link>
            </li>
          </ul>
        </div>

        <div class="article-preview" v-for="article in articles" :key="article.slug">
          <div class="article-meta">
            <nuxt-link :to="{name: 'profile', params: {username: article.author.username}}"><img :src="article.author.image" /></nuxt-link>
            <div class="info">
              <nuxt-link :to="{name: 'profile', params: {username: article.author.username}}">{{article.author.username}}</nuxt-link>
              <span class="date">{{article.createdAt | date('MMM DD, YYYY')}}</span>
            </div>
            <button
                class="btn btn-outline-primary btn-sm pull-xs-right"
                :class="{active: article.favorited}"
                :disabled="article.favoriteDisabled"
                @click="onFavorite(article)"
              >
                <i class="ion-heart"></i> {{article.favoritesCount}}
              </button>
          </div>
          <a href="" class="preview-link">
            <h1>How to build webapps that scale</h1>
            <p>This is the description for the post.</p>
            <span>Read more...</span>
          </a>
        </div>


      </div>

    </div>
  </div>

</div>
</template>

<script>
import { userInfo } from '@/api/user'
import { getArticle, deleteFavorite, addFavorite } from '@/api/article'
import { followUser, unFollowUser } from "@/api/user";
export default {
  middleware: 'authenticated',
  name: 'UserProfile',
  data () {
    return {
      profile: '',
      favorited: '',
      author: '',
      tabType: '',
      articles: '',
      articlesCount: 0
    }
  },
  async mounted() {
    const { data} = await userInfo(this.$route.params.username)
    this.profile = data.profile
    this.profile.followDisabled = false
    this.getArticle()
  },
  methods: {
    async getArticle () {
      const favorited = this.$route.params.favorited
      const page = 1
      const limit = 20
      const { data } = await getArticle({
          limit,
          offset: (page - 1) * limit,
          author: favorited ? null : this.$route.params.username,
          favorited: favorited ? this.$route.params.username : null
        })
      const { articles, articlesCount } = data
      articles.forEach(article => article.favoriteDisabled = false)
      this.articles = articles
      this.articlesCount = articlesCount
    },
    async onFavorite (article) {
      article.favoriteDisabled = true
      if (article.favorited) {
        // 取消点赞
        await deleteFavorite(article.slug)
        article.favorited = false
        article.favoritesCount += -1
      } else {
        // 添加点赞
        await addFavorite(article.slug)
        article.favorited = true
        article.favoritesCount += 1
      }
      article.favoriteDisabled = false
    },
    async onFollow (article) {
      article.followDisabled = true;
      if (article.following) {
        // 取消关注
        await unFollowUser(article.username);
        article.following = false;
      } else {
        // 关注
        await followUser(article.username);
        article.following = true;
      }
      article.followDisabled = false;
    }
  }
}
</script>

<style lang='less'>

</style>
