import { AppState } from "../AppState"
import { Post } from "../models/Post"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class PostService {
    async getPosts() {
        const res = await api.get('api/posts')
        logger.log(res.data)
        const newPosts = res.data.posts.map(pojo => new Post(pojo))
        AppState.posts = newPosts
        logger.log(AppState.posts)
        AppState.posts = newPosts
        AppState.currentPage = res.data.page
        AppState.totalPages = res.data.totalPages
    }

    async createPost(carData) {
        const res = await api.post('api/posts', carData)
        logger.log('created post', res.data)
    }

    async deletePost(postId) {
        const res = await api.delete(`api/posts/${postId}`)
        logger.log('deleting post!', res.data)
        AppState.posts = AppState.posts.filter((post) => post.id != postId)
    }

    async changePageOfPosts(endpointUrl) {
        const res = await api.get(endpointUrl)
        const newPosts = res.data.posts.map(pojo => new Post(pojo))
        AppState.posts = newPosts
        AppState.currentPage = res.data.page
        AppState.totalPages = res.data.totalPages


    }

    // async getPostsWithSearchQuery(searchQuery) {
    //     const res = await movieApi.get(`api/posts?query=${searchQuery}`)
    //     logger.log('GET POSTS WITH SEARCH', res.data)

    //     AppState.searchQuery = searchQuery
    //     const newPosts = res.data.results.map(pojo => new Post(pojo))
    //     AppState.posts = newPosts
    //     AppState.currentPage = res.data.page
    //     AppState.totalPages = res.data.totalPages

    // async likePost(postId, liker) {
    //     const res = await api.put(`api/posts/${postId}`, liker)
    //     logger.log(res.data)
    //     const post = AppState.posts.find(post => post.id == postId)

    // }
}

export const postService = new PostService()