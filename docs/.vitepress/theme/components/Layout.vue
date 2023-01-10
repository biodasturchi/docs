<template>
  <Layout>
    <template #home-features-after>
      <Home v-if="isHome" />
    </template>
  </Layout>
</template>
<script setup>
import { useData } from "vitepress";
import { computed } from "vue";
import DefaultTheme from "vitepress/theme";
import Home from "./Home.vue";
const { Layout } = DefaultTheme;
const isHome = computed(() => {
  return useData().page.value.relativePath.indexOf("index.md") == -1;
});
</script>
