<template>
  <v-container>
    <v-row>
      <now-playing />
    </v-row>
    </v-container>

    <v-container>
    <v-row class="mt-4">
  <div class="player-controls">
    <div class="controls-status">
      <span v-if="!playing && !buffering && !playerError">
        <v-icon @click="play()" size="50">mdi-play-circle-outline</v-icon>
      </span>
      <span v-else-if="playing && !buffering">
        <v-icon @click="stop()" size="50">mdi-stop-circle-outline</v-icon>
      </span>
      <span v-else-if="buffering">
        <v-progress-circular
          indeterminate
          color="primary"
          size="50"
        ></v-progress-circular>
      </span>
      <span v-else-if="playerError == true">
        <v-icon @click="play()" size="50">mdi-alert</v-icon>
      </span>
    </div>
    <div class="controls-volume">
      <v-icon size="50">mdi-volume-high</v-icon>
      <input
        type="range"
        name="volume"
        v-model="volume"
        min="0"
        max="1"
        step=".01"
        @input="HandleVolume"
      />
    </div>
    <div class="contols-options">
      <!-- Options meny -->

      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props" class="mr-2 ml-2">
            <v-icon size="35">mdi-cog-outline</v-icon></v-btn
          >
        </template>
        <v-list>
          <v-list-item @click="enableNotif()">
            <v-list-item-title>Enable Notifications</v-list-item-title>
          </v-list-item>
          <v-list-item @click="disableNotif()">
            <v-list-item-title>Disable Notifications</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <div class="control-sources">
      <!-- Source Options button -->
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props">
            <v-icon size="35"> mdi-playlist-music-outline </v-icon></v-btn
          >
        </template>
        <v-list>
          <v-list-item v-for="source in streams" :key="source.name">
            <v-list-item-title class="hover-pointer" @click="changeSource(source)">{{
              source.name
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import NowPlaying from "./metadata/nowPlaying.vue";

export default {
    name: "cr-player",
    props: ["metadata"],
    data() {
        return {
            notifData: "",
            track: {
                title: "Hello!",
                artist: "Cloudsdale Radio",
                art: "https://cdn.asthriona.com/i/2022/08/_pn_220815_0628AM07114.png",
            },
            streams: [
                {
                    name: "Main Stream",
                    url: "https://jp-broadcaster.cloudsdaleradio.com/mr-relay.mp3",
                },
                // {
                //   name: "Fail Safe (France)",
                //   url: "http://151.115.76.153:8000/fallback.mp3",
                // },
                //   {
                //     name: "Low Quality Stream",
                //     url: "https://jp-broadcaster.cloudsdaleradio.com/cloudsdaleradio64.mp3",
                //   },
                //   {
                //     name: "backup",
                //     url: "https://frrelay.cloudsdaleradio.com/CloudsdaleRadio",
                //   }
            ],
            index: 0,
            current: {},
            player: new Audio(),
            playing: false,
            buffering: false,
            playerError: false,
            volume: 50,
            notificationPermissions: false,
            notifEnabled: false,
        };
    },
    methods: {
        getMetadata() {
            if (!this.current) {
                return console.log("No streams available retying in 5 seconds");
            }
        },
        updateChrome() {
            //   Google meta session
            navigator.mediaSession.metadata = new window.MediaMetadata({
                title: this.metadata.title,
                artist: this.metadata.artist,
                album: "Cloudsdale Radio",
                artwork: [
                    {
                        src: this.metadata.art,
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
            });
        },
        updateNotification(data) {
            // Notification
            if (!this.notifEnabled)
                return;
            if (!this.notificationPermissions)
                return;
            if (this.notifData == `${data.title} - ${data.artist}`)
                return;
            this.notifData = `${data.title} - ${data.artist}`;
            const notifText = `${data.title} - ${data.artist}`;
            const notifTitle = "MakotoFM";
            const notifArt = data.art ||
                "https://cdn.asthriona.com/i/2022/08/_pn_220815_0628AM07114.png";
            const notif = new Notification(notifTitle, {
                body: notifText,
                icon: notifArt,
            });
            notif.onclick = () => {
                window.focus();
                notif.close();
            };
            return notif;
        },
        play() {
            this.buffering = false;
            this.player.volume = localStorage.getItem("CR_volume") || 0.5;
            this.player.preload = "none";
            this.player.play().catch((err) => {
                this.playerError = true;
                this.buffering = false;
                console.log(err);
                console.log("The player goofed... falling back");
                this.track.title = "The player goofed. Falling back...";
                this.track.artist = "Yikes!";
                this.player.play("https://jp-broadcaster.cloudsdaleradio.com/cloudsdaleradio.mp3");
            });
            this.player.addEventListener("playing", () => {
                this.playing = true;
                this.buffering = false;
            });
        },
        stop() {
            this.player.pause();
            this.player.currentTime = 0;
            this.playing = false;
        },
        HandleVolume() {
            this.player.volume = this.volume;
            localStorage.setItem("CR_volume", this.volume);
        },
        changeSource(source) {
            // find the index of the stream in sources
            this.index = this.streams.findIndex((s) => s.name === source.name);
            // swap current, for new changed stream
            this.current = source;
            // set the player source to the new stream
            this.player.src = source.url;
            // play the new stream
            this.play();
        },
        enableNotif() {
            this.notifEnabled = true;
            localStorage.setItem("CR_Notifs", this.notifEnabled);
        },
        disableNotif() {
            this.notifEnabled = false;
            localStorage.setItem("CR_Notifs", this.notifEnabled);
        },
        // get metadata for backup broadcaster
        getBackupData() {
            axios.get(`${process.env.VUE_APP_PLAYER}/rescue`).then((res) => {
                this.track = res.data;
            });
        },
    },
    created() {
        this.buffering = true;
    },
    mounted() {
        this.buffering = false;
        this.current = this.streams[this.index];
        this.player.src = this.current.url;
        this.volume = localStorage.getItem("CR_volume") || 50;
        // this.notifEnabled = localStorage.getItem("CR_Notifs");
        this.notifEnabled = false;
        Notification.requestPermission().then((result) => {
            result === "granted"
                ? (this.notificationPermissions = true)
                : (this.notificationPermissions = false);
        });
        // Update chrome and notification based on timing
        setInterval(() => {
            if (this.current.name == "backup")
                this.getBackupData();
            this.updateChrome();
            this.updateNotification(this.metadata);
        }, 5000);
    },
    beforeUnmount() {
        if (!this.playing)
            return;
        this.player.pause();
    },
    components: { NowPlaying }
};
</script>

<style scoped>
.player {
  max-width: fit-content;
  max-height: fit-content;
}
.player-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: max-content;
}
.controls-status {
  display: flex;
  justify-content: center;
  align-items: center;
}
.controls-volume {
  display: flex;
  justify-content: center;
  align-items: center;
}
.cursor-pointer {
  cursor: pointer;
}
.hover-pointer {
  background: #272727;
}
.hover-pointer:hover {
  background: #929292;
}
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
