<template>
  <v-content>
    <v-snackbar :color="$primaryColor" v-model="showLoginError">
      <span>Usuário ou Senha Inválidos!</span>
      <v-btn dark small @click="ctrlLoginError">Close</v-btn>
    </v-snackbar>

    <v-toolbar dark>
      <v-spacer />
      <v-container fluid>
        <v-img src="@/assets/wsi-logo-light.png" width="100"></v-img>
      </v-container>
      <v-spacer />
    </v-toolbar>

    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card elevation="12">
            <v-toolbar v-bind:color="$primaryColor" dark flat>
              <v-toolbar-title>Bem vindo</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Usuário"
                  v-model="usuario"
                  prepend-icon="person"
                  type="text"
                  :rules="inputRules"
                />

                <v-text-field
                  label="Senha"
                  v-model="senha"
                  prepend-icon="lock"
                  type="password"
                  :rules="inputRules"
                />
              </v-form>
            </v-card-text>

            <v-card-actions>
              <v-spacer />
              <v-btn small dark :color="$secondaryColor" @click="validateCredentials">
                <v-icon left>check</v-icon>
                <span>Entrar</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <Overlay :overlay="showOverlay" />
  </v-content>
</template>

<script>
import Overlay from "@/components/Overlay";

export default {
  name: "Login",
  components: {
    Overlay
  },
  data() {
    return {
      showLoginError: false,
      showOverlay: false,
      usuario: "",
      senha: "",
      inputRules: [v => v.length >= 6 || "Essa informação parece incorreta!"]
    };
  },
  methods: {
    validateCredentials() {
      this.showOverlay = true;

      var usuarioOk = this.usuario === "vinicios-biluca";
      var senhaOk = this.senha === "123456";

      if (usuarioOk && senhaOk) {
        setTimeout(() => {
          this.$router.push("Home");
          this.showOverlay = false;
        }, 3000);
      } else {
        this.ctrlLoginError();
        this.showOverlay = false;
      }
    },

    ctrlLoginError() {
      this.showLoginError = !this.showLoginError;
    }
  }
};
</script>

<style>
</style>