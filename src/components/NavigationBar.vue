<template>
  <nav>
    <v-snackbar :color="$secondaryColor" v-model="snackbar">
      <span>Projeto Salvo com Sucesso!</span>
      <v-btn dark small @click="ctrlSnackbar">Close</v-btn>
    </v-snackbar>

    <v-toolbar dark>
      <v-btn small v-on:click="showNavigationDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
      <v-spacer />
      <v-container fluid>
        <v-img src="@/assets/wsi-logo-light.png" width="100"></v-img>
      </v-container>
      <v-spacer />

      <Dialog @projectAdded="ctrlSnackbar" />
    </v-toolbar>

    <v-navigation-drawer app temporary v-model="drawer" dark>
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
import Dialog from "@/components/Dialog";

export default {
  name: "NavigationBar",
  components: {
    Dialog
  },
  data() {
    return {
      snackbar: false,
      drawer: false,
      items: [
        { title: "Projetos", icon: "folder", route: "/home" },
        { title: "Equipe", icon: "people", route: "/team" }
      ],
      right: null
    };
  },
  methods: {
    showNavigationDrawer() {
      this.drawer = !this.drawer;
    },
    ctrlSnackbar() {
      this.snackbar = !this.snackbar;
      this.$emit("projectAdded");
    }
  }
};
</script>
