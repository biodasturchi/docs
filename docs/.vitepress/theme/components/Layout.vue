<template>
  <Layout>
    <template #home-features-after>
      <Home v-if="isHome" />
    </template>
    <template #doc-after>
      <Chat v-if="isDetail" />
    </template>
  </Layout>
</template>
<script setup>
import { useData } from "vitepress";
import { computed } from "vue";
import DefaultTheme from "vitepress/theme";
import Home from "./Home.vue";
import Chat from "./Chat.vue";
const { Layout } = DefaultTheme;
const isHome = computed(() => {
  return useData().page.value.relativePath.indexOf("index.md") == -1;
});
const isDetail = computed(() => {
  return useData().page.value.relativePath.indexOf("posts") > -1;
});
</script>
