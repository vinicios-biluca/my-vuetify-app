<template>
  <v-overlay :value="overlay" opacity="0.8">
    <v-img src="@/assets/wsi-logo-light.png" width="100px"></v-img>
    <v-progress-linear indeterminate color="red darken-2"></v-progress-linear>
  </v-overlay>
</template>

<script>
export default {
    name: "Overlay",
    props:{
        overlay : Boolean
    }
};
</script>
