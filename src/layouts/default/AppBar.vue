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
    <router-link to="/"><v-btn>Home</v-btn></router-link>
    <router-link to="/about"><v-btn>About</v-btn></router-link>
    <v-dialog>
  <template v-slot:activator="{ props }">
    <v-btn v-bind="props" text="History" @click="refreshHistory()"> </v-btn>
  </template>

  <template v-slot:default="{ isActive }">
    <v-card title="Dialog">
      <v-card-text>
        <v-table theme="dark">
          <thead>
            <tr>
              <th class="text-left">Cover</th>
              <th class="text-left">Title</th>
              <th class="text-left">Played At</th>
            </tr>
          </thead>
          <tbody>
            <tr
            v-for="h in history" :key="h.id">
            <td><v-img :src="h.art"></v-img></td>
            <td>{{ h.title }} - {{ h.artist }}</td>
            <td>{{ new Date(h.played_at).toLocaleTimeString() }} ({{ h.played_ago }})</td>
          </tr>
          </tbody>
        </v-table>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          text="Close Dialog"
          @click="isActive.value = false"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </template>
</v-dialog>
    <v-spacer></v-spacer>

    <v-tooltip :text="`${useStore.artist} - ${useStore.title}`" location="bottom">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" class="mr-4"><img class="mr-2 mini-art" :src="useStore.art" height="32" /> <span class="d-inline-block text-truncate" style="max-width: 200px;">{{useStore.artist}} - {{ useStore.title }}</span></v-btn>
      </template>
    </v-tooltip>
  </v-app-bar>
</template>

<script setup>
import { useMetaStore } from '@/store/metadata';
import axios from 'axios';
const useStore = useMetaStore();
</script>

<script>
export default {
  data() {
    return { 
      history: [],
    }
  },
  methods: {
    refreshHistory() {
      axios.get(`${import.meta.env.VITE_APP_API}/player/history?sid=3`)
  .then((res) => {
    this.history = res.data
  })
    }
  }
}
</script>

<style scoped>
.mini-art {
  border-radius: 5px;
}
</style>