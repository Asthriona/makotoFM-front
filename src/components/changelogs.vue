<template>
  <v-container>
    <v-row>
      <v-list line="one">
        <v-list-item class="text-h5">
          Version 1.0
          <v-list-item-title
            >Initial - The Project starts here</v-list-item-title
          ></v-list-item
        >
        <v-list-item class="text-h5">
          Version 1.1
          <v-list-item-title>Added: ChangeLogs</v-list-item-title>
          <v-list-item-title>Added: Tooltip on Nav-bar title button hover</v-list-item-title>
          <v-list-item-title>Fix: Stream Selection Menu</v-list-item-title>
          <v-list-item-title>Fix: Options Menu</v-list-item-title>
          <v-list-item-title>Update: Navbar Title Button is Now trucated.</v-list-item-title>
          <v-list-item-title
            >Update: The player now destroy the stream when clock on "pause"
            when active
          </v-list-item-title>
        </v-list-item>
        <v-list-item class="text-h5">
          Known Bug:
          <v-list-item-title>
            Player: The player plays the cached buffer when unpausing the
            streams.
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "changeLogsComp",
};
</script>
