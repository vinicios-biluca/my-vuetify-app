<template>
  <div>
    <NavigationBar />

    <v-container class="ma-5">
      <h1 class="grey--text">Equipe de Gestão de Projetos</h1>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg4 v-for="(member, index) in teamMembers" :key="index">
          <v-card class="ma-2 pa-4 blue-grey lighten-5">
            <v-layout column wrap>
              <v-reponsive>
                <v-avatar size="64">
                  <img :src="avatarPicture(member.picture)" />
                </v-avatar>
              </v-reponsive>
              <h2 class="black--text">{{member.name}}</h2>
              <h3 class="grey--text">{{member.role}}</h3>

              <v-card-actions>
                <v-btn dark small :color="$secondaryColor">
                  <v-icon small left>message</v-icon>
                  <span>Message</span>
                </v-btn>
              </v-card-actions>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar";

export default {
  name: "Team",
  components: {
    NavigationBar
  },
  methods: {
    avatarPicture(avatarPictureURL) {
      return avatarPictureURL;
    }
  },
  data() {
    return {
      teamMembers: [
        {
          name: "Rachel Green",
          role: "Vendas",
          age: 27,
          picture: "https://firebasestorage.googleapis.com/v0/b/wsi-tests.appspot.com/o/rachel.png?alt=media&token=cb3c9f1e-441e-4cfb-b6d0-e58ae514e301"
        },
        {
          name: "Monica Geller",
          role: "Operações",
          age: 27,
          picture:
            "https://firebasestorage.googleapis.com/v0/b/wsi-tests.appspot.com/o/monica.png?alt=media&token=73137e28-040c-4523-aa98-455ed9db843b"
        },
        {
          name: "Phoebe Buffay",
          role: "Recursos Humanos",
          age: 31,
          picture:
            "https://firebasestorage.googleapis.com/v0/b/wsi-tests.appspot.com/o/phoebe.png?alt=media&token=45f5a863-d798-44a3-87db-5dca5d58873d"
        },
        {
          name: "Joey Tribbiani",
          role: "Maketing",
          age: 24,
          picture:
            "https://firebasestorage.googleapis.com/v0/b/wsi-tests.appspot.com/o/joey.png?alt=media&token=c75ffc2c-d190-482f-bdc0-640899f76901"
        },
        {
          name: "Chandler Bing",
          role: "Compras",
          age: 29,
          picture:
            "https://firebasestorage.googleapis.com/v0/b/wsi-tests.appspot.com/o/chandler.png?alt=media&token=f29a9d6a-5589-49a3-9cd4-483879c5124c"
        },
        {
          name: "Ross Geller",
          role: "Controle de Qualidade",
          age: 32,
          picture:
            "https://firebasestorage.googleapis.com/v0/b/wsi-tests.appspot.com/o/ross.png?alt=media&token=ce161226-3dd9-46bd-9b65-b83556e521f0"
        }
      ]
    };
  }
};
</script>

<style scoped>
.Closed {
  border-right: 6px solid #090;
}

.Doing {
  border-left: 6px solid #009;
}

.Waiting {
  border-left: 6px solid #990;
}
</style>>
