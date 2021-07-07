<template>
  <v-navigation-drawer
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      app
      v-model="drawer"
  >
    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            코딩하는꽃개
          </v-list-item-title>
          <v-list-item-subtitle>codingflowerdog@gmail.com</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-icon>mdi-menu-down</v-icon>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list>
      <v-list-item
          v-for="({icon, text, link}, i) in items"
          :key="i"
          link
          :to="link"
      >
        <v-list-item-icon>
          <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import {INavigationMenu} from "@/type/INavigationMenu";

@Component({
  name: 'Navigation'
})
export default class Navigation extends Vue{
  // 토글
  @Prop() drawer!: boolean
  // 메뉴 아이템
  @Prop() items!: Array<INavigationMenu>
}
</script>

<style scoped>

</style>