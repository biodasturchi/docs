<template>
  <Layout>
    <template>
      <Home v-if="isHome" />
    </template>
    <template #doc-after>
      <Comments v-if="(theme.commentConfig?.showComment ?? true) && (frontmatter?.showComment ?? true)" :commentConfig="theme.commentConfig" :key="md5(page.relativePath)"/>
    </template>
  </Layout>
</template>
<script lang="ts" setup>
import { useData } from "vitepress";
import { computed } from "vue";
import DefaultTheme from "vitepress/theme";
import md5 from 'blueimp-md5';
import Home from "./Home.vue";
import Comments from "./Comments.vue"
const { Layout } = DefaultTheme;
const isHome = computed(() => {
  return useData().page.value.relativePath.indexOf("index.md") == -1;
});
const { page, frontmatter, theme } = useData()
</script>
