<template>
    <div class="player-info">
      <div class="player-info-img hidden-xs-and-down">
        <transition name="slide-fade" mode="out-in">
          <v-img :src="useStore.art"></v-img>
        </transition>
      </div>
      <div class="track-info-text mt-4">
        <transition name="slide-fade" mode="out-in">
          <span class="track-title">{{ useStore.title }}</span>
        </transition>
        <transition name="slide-fade" mode="out-in">
          <span class="track-artist">{{ useStore.artist }}</span>
        </transition>
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
    align-items: left;
    max-width: max-content;
  }
  .player-info-img {
    width: 200px;
    height: 200px;
    overflow: hidden;
  }
  .player-info-img img {
    width: 100%;
    height: 100%;
  }
  .track-info-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    margin-left: 20px;
    border-left: 1px solid;
    padding-left: 1rem;
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
  