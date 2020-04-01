<template>
  <nav>
    <v-toolbar dark>
      <v-btn small v-on:click="showNavigationDrawer">
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

    <v-navigation-drawer :mini-variant="drawer" dark>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" router :to="item.route" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      drawer: true,
      items: [
        { title: "Início", icon: "home" , route: '/home'},
        { title: "Sobre", icon: "help" , route: '/about'},
        { title: "Equipe", icon: "people" , route: '/team'}
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
