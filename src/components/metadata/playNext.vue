<template>
  <div class="player-info">
    <div class="player-info-img hidden-xs-and-down">
        <v-img transition="scroll-x-transition" :src="useStore.next.art"></v-img>
    </div>
    <div class="track-info-text mt-4">
        <span transition="scroll-x-transition" class="text-h4">{{ useStore.next.title }}</span>
        <span transition="scroll-x-transition" class="text-h5 text-grey-darken-1 font-weight-black">{{ useStore.next.artist }}</span>
      <span transition="scroll-x-transition">Playing {{ useStore.next.played_ago }}</span>
    </div>
  </div>
</template>

<script setup>
import { useMetaStore } from "@/store/metadata";
const useStore = useMetaStore();
</script>

<style scoped>
.player-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: max-content;
}
.player-info-img {
  width: 100px;
  height: 100px;
  overflow: hidden;
}
.player-info-img img {
  width: 100%;
  height: 100%;
}
.track-info-text {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  margin-left: 20px;
}
.track-title {
  font-size: 2rem;
  font-weight: bold;
}
.track-artist {
  font-size: 1.5rem;
  font-weight: bold;
  color: rgb(131, 131, 131);
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
