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
          Version 1.2
          <v-list-item-title>Add "Requested" badge next to title when the song has been requested.</v-list-item-title>
          <v-list-item-title>Add "Now Playing" metadata to player store</v-list-item-title>
          <v-list-item-title>Add "Playing Next" under the player</v-list-item-title>
          <v-list-item-title>Add History</v-list-item-title>
          <v-list-item-title>Update player store</v-list-item-title>
          <v-list-item-title>Update Text Styling</v-list-item-title>
          <v-list-item-title>Update API Link (Now take the station SID)</v-list-item-title>
          <v-list-item-title>Update Stream change handling</v-list-item-title>
          <v-list-item-title>Update Fallback stream is now set to Cloudsdale Radio fallback.</v-list-item-title>
          <v-list-item-title>Update Stream pause function</v-list-item-title>
          <v-list-item-title>Move metadata to it's own component.</v-list-item-title>
        </v-list-item>
        <v-list-item class="text-h5">
          Known Bug:
          <v-list-item-title>
            Player: The player plays the cached buffer when unpausing the
            streams. <br />
            <b><i>Should be fixed by Version 1.2</i></b>
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
