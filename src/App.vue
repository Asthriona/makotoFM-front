<template>
  <router-view />
</template>

<script setup>
import { onMounted } from "vue";
import { useMetaStore } from "@/store/metadata";
import axios from "axios";
const metaStore = useMetaStore();

function getMetaData() {
  axios.get(`${import.meta.env.VITE_APP_API}/player/nowplaying`)
  .then((res) => {
    const { title, artist, album, art, isLive} = res.data.now;
    const next = res.data.next;
    console.log(`[DEBUG] Got data from Radio: ${artist} - ${title}`);
    console.log(`[DEBUG] Next Track: ${next.artist} - ${next.title} | ${next.isRequest ? "Is requested" : "Is not requested."}`)
    metaStore.setMetadata({
      title,
      artist,
      album,
      art,
      isLive,
      next: {
        title: next.title,
        artist: next.artist,
        album: next.album,
        art: next.art,
        isLive: next.isLive,
        isRequest: next.isRequest,
        played_ago: next.played_ago,
        played_at: next.played_at,
        id: next.id,
      }
    })
  })
  .catch((err) => {
    console.error(err);
    console.log("an error happened.")
  })
}
onMounted(() => {
  setInterval(() => {
    getMetaData()
  }, 5000);
})

</script>
