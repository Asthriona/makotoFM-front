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
    <v-tooltip :text="`${useStore.artist} - ${useStore.title}`" location="bottom">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" class="mr-4"><img class="mr-2 mini-art" :src="useStore.art" height="32" /> <span class="d-inline-block text-truncate" style="max-width: 250px;">{{useStore.artist}} - {{ useStore.title }}</span></v-btn>
      </template>
    </v-tooltip>
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