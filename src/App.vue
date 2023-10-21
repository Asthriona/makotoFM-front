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
    const { title, artist, album, art, isLive} = res.data;
    console.log(`[DEBUG] Got data from Radio: ${artist} - ${title}`);
    metaStore.setMetadata({
      title,
      artist,
      album,
      art,
      isLive
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
