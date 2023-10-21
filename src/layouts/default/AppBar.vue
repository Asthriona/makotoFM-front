<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <v-img
        alt="Asthriona Logo"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.asthriona.com/i/2023/10/asthriona%20jp%20Light.png"
        width="200"
      />
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn><img class="mr-2 mini-art" :src="useStore.art" height="32" /> {{useStore.artist}} - {{ useStore.title }}</v-btn>
  </v-app-bar>
</template>

<script setup>
import { useMetaStore } from '@/store/metadata';
const useStore = useMetaStore();
</script>

<style scoped>
.mini-art {
  border-radius: 5px;
}
</style>