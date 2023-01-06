<template>
  <div class="site-footer">
    MIT Licensed | Copyright © 2022-{{ currentDate.getFullYear() }}
    <a class="vitepress" :href="website">{{ webTitle }}</a
    ><br />
    Powered by
    <a
      class="vitepress"
      target="_blank"
      href="https://github.com/vuejs/vitepress/compare/v1.0.0-alpha.28...v1.0.0-alpha.29"
      >VitePress - 1.0.0-alpha.29</a
    >
  </div>
</template>
<script setup>
import { useData } from "vitepress";

const { site, theme } = useData();
const website = theme.value.website;
const webTitle = site.value.title;

let currentDate = new Date();
console.log(currentDate.getFullYear());
</script>

<style>
.site-footer {
  color: #888;
  text-align: center;
  font-size: 0.75rem;
  width: 100%;
  padding: 15px 0;
  overflow: auto;
}
.vitepress {
  color: var(--vp-c-text-1);
  font-weight: 700;
}
</style>
