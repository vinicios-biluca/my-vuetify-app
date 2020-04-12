<template>
  <v-dialog max-width="600px" v-model="showDialog">
    <template v-slot:activator="{ on }">
      <v-btn v-model="disableNewProject" class="mx-2" small :color="$secondaryColor" dark v-on="on">Novo Projeto</v-btn>
    </template>

    <v-card class="align--center">
      <v-card-title>Novo Projeto</v-card-title>
      <v-card-text>
        <v-form ref="projectForm">
          <v-text-field :rules="inputRules" v-model="title" label="Projeto" prepend-icon="folder"></v-text-field>
          <v-text-field :rules="inputRules" v-model="manager" label="Gerente" prepend-icon="person"></v-text-field>
          <v-textarea
            :rules="inputRules"
            label="Descrição do Projeto"
            v-model="content"
            prepend-icon="description"
          ></v-textarea>

          <v-dialog ref="dialog" v-model="modal" persistent width="290px">
            <template v-slot:activator="{ on }">
              <v-text-field
                :rules="inputRules"
                v-model="deliveryDate"
                label="Data de Entrega"
                prepend-icon="event"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="deliveryDate" scrollable :rules="inputRules">
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
              <v-btn text color="primary" @click="modal = false">OK</v-btn>
            </v-date-picker>
          </v-dialog>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="submitProject" small dark :color="$secondaryColor">
          <v-icon>check</v-icon>
          <span>Submeter</span>
        </v-btn>
      </v-card-actions>
    </v-card>

    <Overlay :overlay="overlay" />
  </v-dialog>
</template>

<script>
import database from "@/firebase.js";
import Overlay from "@/components/Overlay";

export default {
  name: "Dialog",
  computed: {
    enableNewProject() {
      if (this.$route.name === "Home") {
        return false;
      }
      return true;
    }
  },
  components: {
    Overlay
  },
  data() {
    return {
      showDialog: false,
      overlay: false,
      modal: true,
      title: "",
      manager: "",
      content: "",
      deliveryDate: "",

      inputRules: [v => v.length >= 3 || "Mínimo 3 letras!"]
    };
  },
  methods: {
    getRouterName() {
      console.log("Route", this.$route.name);
    },
    submitProject() {
      if (this.$refs.projectForm.validate()) {
        this.overlay = true;

        const project = {
          title: this.title,
          manager: this.manager,
          content: this.content,
          ready_date: this.deliveryDate,
          status: "Doing"
        };

        const response = database.collection("projects").add(project);
        response.then(
          setTimeout(() => {
            this.overlay = false;
            this.showDialog = false;
            this.$emit("projectAdded");
          }, 3000)
        );

        return;
      }
    }
  }
};
</script>
