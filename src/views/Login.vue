<template>
  <v-app>
    <v-content>
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
                  <v-text-field label="Usuário" name="login" prepend-icon="person" type="text" />

                  <v-text-field
                    id="password"
                    label="Senha"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <Button title="Entrar" icon="check" v-bind:color="$secondaryColor" />
                <Button title="Sair" icon="close" v-bind:color="$primaryColor" />
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: "Login",
  components: {
    Button
  }
};
</script>

<style>
</style>