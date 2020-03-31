<template>
  <v-app>
    <v-toolbar dark>
      <v-btn small flat v-on:click="showNavigationDrawer">
        <v-icon>menu</v-icon>
      </v-btn>

      <v-spacer />

      <v-container fluid>
        <v-img src="@/assets/wsi-logo-light.png" width="100"></v-img>
      </v-container>

      <v-spacer />

      <v-btn small v-bind:color="$primaryColor">
        <v-icon>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer
      height="100%"
      class="fill-height"
      :color="$backgroundColor"
      :mini-variant="drawer"
      dark
    >
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      drawer: true,
      items: [
        { title: "Parceiros", icon: "people" },
        { title: "Auditorias", icon: "assignment_turned_in" },
        { title: "Manutenções", icon: "home_work" },
        { title: "Configurações", icon: "settings" },
        { title: "Ajuda", icon: "mdi-help-box" }
      ],
      right: null
    };
  },
  methods: {
    showNavigationDrawer() {
      this.drawer = !this.drawer;
    }
  }
};
</script>
