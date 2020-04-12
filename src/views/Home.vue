<template>
  <div class="projects">
    <NavigationBar @projectAdded="fetchProjects" />

    <v-container class="ma-5">
      <h1 class="subheading grey--text">Projetos</h1>
      <v-card class="mx-4" flat v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Projeto</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Gerente</div>
            <div>{{ project.manager }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Data Entrega</div>
            <div>{{ project.ready_date }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip dark small :class="`status-${project.status}`">{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";
import database from "@/firebase";

export default {
  name: "Home",
  components: {
    NavigationBar
  },
  data() {
    return {
      projects: []
    };
  },
  created() {
    this.fetchProjects();
  },
  methods: {
    fetchProjects() {
      this.projects = [];
      const projectsColletion = database.collection("projects");
      const response = projectsColletion.get();
      response.then(projects => {
        projects.forEach(project => {
          this.projects.push(project.data());
        });
      });
    }
  }
};
</script>

<style  scoped>
.status-Complete {
  background: #3cd1c2 !important;
}

.status-Doing {
  background: #ffaa2c !important;
}

.status-Waiting {
  background: #f83e70 !important;
}
</style>

