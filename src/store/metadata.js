import { defineStore } from 'pinia'

export const useMetaStore = defineStore('metadata', {
    state: () => ({
        title: "Hello!",
        artist: "Sora Media Network",
        album: "",
        art: "https://cdn.asthriona.com/i/2022/08/_pn_220815_0628AM07114.png",
        isLive: false,
        isRequest: false,
        id: "",
        next: {
            title: "",
            artist: "",
            album: "",
            art: "",
            isLive: false,
            isRequest: false,
            played_ago: "",
            playedAt: "",
            id: "",
        }
    }),
    actions: {
        setMetadata(data) {
            this.id = data.id,
            this.title = data.title,
                this.artist = data.artist,
                this.album = data.album,
                this.art = data.art ? data.art : "https://cdn.asthriona.com/i/2022/08/_pn_220815_0628AM07114.png",
                this.isLive = data.isLive,
                this.isRequest = data.isRequest
                this.next = {
                    title: data.next.title,
                    artist: data.next.artist,
                    album: data.next.album,
                    art: data.next.art,
                    isLive: data.next.isLive,
                    isRequest: data.next.isRequest,
                    played_ago: data.next.played_ago,
                    playedAt: data.next.playedAt,
                    id: data.next.id,

                }
        }
    }
})