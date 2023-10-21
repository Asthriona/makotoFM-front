<template>
  <v-container class="fill-height">
    <v-responsive class="text-center">
      <v-img height="200" src="https://cdn.asthriona.com/i/2023/10/asthriona%20jp%20Light.png" />
      <h1>MakotoFM</h1>
      <h3>The stupid radio from the slow driver.</h3>
      <small>This is a super duper beta early dev website, Also a test for other webradio I own, please let me know if you find bugs. :)</small><P></P>

      <div class="py-10" />

      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <Player :metadata="useStore" />
        </v-col>

        <!-- <v-col cols="auto">
         <h1>Other Buttons</h1>
        </v-col> -->
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script>
export default {
  name: 'Hello-World',
}
</script>

<script setup>
  import Player from './player.vue';
  import { useMetaStore } from '@/store/metadata';
  const useStore = useMetaStore();
</script>
