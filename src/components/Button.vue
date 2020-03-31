<template>
  <v-btn small dark v-bind:color="color">
    <v-icon>{{this.icon}}</v-icon>
    {{this.title}}
  </v-btn>
</template>

<script>
export default {
  name: "Button",
  props: {
    title: String,
    icon: String,
    color: String,
    type: String
  }
};
</script>
