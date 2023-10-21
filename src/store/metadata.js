import { defineStore } from 'pinia'

export const useMetaStore = defineStore('metadata', {
    state: () => ({
        title: "Hello!",
        artist: "Sora Media Network",
        album: "",
        art: "https://cdn.asthriona.com/i/2022/08/_pn_220815_0628AM07114.png",
        isLive: false,
    }),
    actions: {
        setMetadata(data) {
            this.title = data.title,
            this.artist = data.artist,
            this.album = data.album,
            this.art = data.art ? data.art : "https://cdn.asthriona.com/i/2022/08/_pn_220815_0628AM07114.png",
            this.isLive = data.isLive
        }
    }
})