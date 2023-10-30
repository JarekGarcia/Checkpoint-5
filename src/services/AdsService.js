import { AppState } from "../AppState"
import { Ad } from "../models/Ad"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class AdsService {
    async getAds() {
        const res = await api.get('api/ads')
        // logger.log('here is the ads', res.data)
        const newAds = res.data.map(adPojo => new Ad(adPojo))
        AppState.ads = newAds
        // logger.log('here are the ads in the appstate', AppState.ads)
    }
}

export const adsService = new AdsService()