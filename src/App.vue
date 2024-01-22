<template>
  <router-view />
</template>

<script setup>
import { onMounted } from "vue";
import { useMetaStore } from "@/store/metadata";
import axios from "axios";
const metaStore = useMetaStore();

function getMetaData() {
  /**
  * This API call requires the link of the API and the radio SID unless the broadcaster only has one station.
  * This website is made to be working with it's own API that more or less proxy the Azuracast API.
  * Compatible API: https://github.com/Asthriona/makotoFM-back
  * Azuracast: https://www.azuracast.com/
  **/
  axios.get(`${import.meta.env.VITE_APP_API}/player/nowplaying?sid=${import.meta.env.VITE_APP_SID || '1'}`)
  .then((res) => {
    const { title, artist, album, art, isLive, isRequest, id} = res.data.now;
    const next = res.data.next;
    console.log(`[DEBUG] Got data from Radio: ${artist} - ${title} | ${isRequest ? "Is requested" : "Is not requested."}`);
    console.log(`[DEBUG] Next Track: ${next.artist} - ${next.title} | ${next.isRequest ? "Is requested" : "Is not requested."}`)
    metaStore.setMetadata({
      title,
      artist,
      album,
      art,
      isLive,
      isRequest,
      id,
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
