import { fetch } from '@/plugins/request'
// 获取公共文章列表
export const getArticle = params => {
  return fetch({
    method: 'GET',
    url: '/api/articles',
    params
  })
}

// 发布文章
export const createArticle = (data) => {
  return fetch({
    method: 'POST',
    url: '/api/articles',
    data
  })
}

// 修改文章
export const updateArticle = (params) => {
  return fetch({
    method: 'PUT',
    url: `/api/articles/${params.slug}`,
    data: {
      article: params.article
    }
  })
}
// 删除文章
export const delArticle = slug => {
  return fetch({
    method: 'DELETE',
    url: `/api/articles/${slug}`
  })
}

// 获取关注文章列表
export const getFeedArticle = params => {
  return fetch({
    method: 'GET',
    url: '/api/articles/feed',
    params
  })
}

// 添加点赞
export const addFavorite = slug => {
  return fetch({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`
  })
}

// 取消点赞
export const deleteFavorite = slug => {
  return fetch({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`
  })
}

// 获取文章详情
export const getArticleDetail = slug => {
  return fetch({
    method: 'GET',
    url: `/api/articles/${slug}`
  })
}

// 获取文章评论
export const getComments = slug => {
  return fetch({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  })
}

// 发布文章评论
export const addComments = (data, slug) => {
  return fetch({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data
  })
}

// 删除文章评论
export const deleteComment = (id, slug) => {
  return fetch({
    method: 'DELETE',
    url: `/api/articles/${slug}/comments/${id}`
  })
}
