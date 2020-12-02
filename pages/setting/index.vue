<template>
  <div class="settings-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">Your Settings</h1>

        <form @submit.prevent="updateInfo">
          <fieldset>
              <fieldset class="form-group">
                <input v-model="user.image" class="form-control" type="text" placeholder="URL of profile picture">
              </fieldset>
              <fieldset class="form-group">
                <input v-model="user.username" class="form-control form-control-lg" type="text" placeholder="Your Name">
              </fieldset>
              <fieldset class="form-group">
                <textarea v-model="user.bio" class="form-control form-control-lg" rows="8" placeholder="Short bio about you"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input v-model="user.email" class="form-control form-control-lg" type="text" placeholder="Email">
              </fieldset>
              <fieldset class="form-group">
                <input v-model="user.password" class="form-control form-control-lg" type="password" placeholder="Password">
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                Update Settings
              </button>
          </fieldset>
        </form>
        <hr>
        <button class="btn btn-outline-danger" @click="logout">
          Or click here to logout.
        </button>
      </div>

    </div>
  </div>
</div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined
import { updateUserInfo } from '@/api/user'
export default {
  middleware: 'authenticated',
  name: 'SettingIndex',
  data () {
    return {
      user: {
        username: '',
        password: null,
        email: '',
        bio: '',
        image: ''
      }
    }
  },
  mounted() {
    let user = JSON.parse(Cookie.get('user'))
    this.user = user
    this.user.password = null
  },
  methods: {
    logout () {
      this.$store.commit('setUser', '')
      Cookie.remove('user')
      this.$router.push('/login')
    },
    async updateInfo () {
      const { data } = await updateUserInfo({
        user: this.user
      })
      // 保存用户登录状态
      this.$store.commit('setUser', data.user)
      // 为了防止刷新页面数据丢失,我们需要把数据持久初始化
      Cookie.set('user', data.user)
      this.$router.push('/')
    }
  }
}
</script>

<style lang='less'>

</style>
