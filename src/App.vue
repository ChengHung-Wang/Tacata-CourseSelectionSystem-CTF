<template>
  <navbar/>
  <router-view/>
</template>

<style>
@import "assets/css/styles.css";
.label-warning {
  background-color: v-bind(primaryColor);
}
</style>

<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import { useConfigStore } from "@/store/config";
import { storeToRefs } from "pinia";

const { primaryColor } = storeToRefs(useConfigStore())
</script>
