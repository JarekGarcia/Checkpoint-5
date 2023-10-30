import { AppState } from "../AppState"
import { Post } from "../models/Post"
import { Profile } from "../models/Profile"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class ProfileService {
    async getProfileById(profileId) {
        const res = await api.get(`api/profiles/${profileId}`)
        logger.log('got profile!', res.data)
        AppState.profile = new Profile(res.data)
        logger.log('profile in the appstate', AppState.profile)
    }

    async getPostsByProfileId(profileId) {
        const res = await api.get(`api/posts?creatorId=${profileId}`)
        const newPosts = res.data.posts.map((post) => new Post(post))
        logger.log('posts by id in appstate', AppState.posts)
        AppState.posts = newPosts
        AppState.currentPage = res.data.page
        AppState.totalPages = res.data.totalPages
    }
}

export const profileService = new ProfileService()