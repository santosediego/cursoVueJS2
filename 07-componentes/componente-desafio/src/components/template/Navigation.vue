<template>
  <v-navigation-drawer app>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title"> Menu </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

    <ItensMenu />
  </v-navigation-drawer>
</template>

<script>

import ItensMenu from "./ItensMenu.vue";

export default {
  components: {
    ItensMenu: ItensMenu,
  },
};
</script>
