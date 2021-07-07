<template>
  <v-app id="inspire">
    <Navigation
        :items="items"
        :drawer="drawer"
    />

    <v-app-bar
        app
        color="primary"
        dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-sheet class="pa-6">
        <router-view/>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Navigation from "@/components/Navigation.vue";
import {menu} from "@/config/menu";

@Component({
  name: "App",
  components: {
    Navigation
  }
})
export default class App extends Vue {
  // 네비게이션 토글
  drawer = true;
  // 네비게이션 메뉴 리스트
  items = menu;
}

</script>
