<template>
  <div id="gitalk-container"></div>
</template>
<script lang="ts" setup>
// import 'gitalk/dist/gitalk.css'
import '../styles/gitalk.css'
import Gitalk from 'gitalk'
import md5 from 'blueimp-md5'
import { onMounted } from 'vue'
// import { useData } from "vitepress";
// const relativePath = useData().page.value.relativePath;

const gitalk = new Gitalk({
  clientID: 'fd75271dee4f1a3bb4d2',
  clientSecret: '74a21b5aee28c6ff47ab8ecb844f5981d118a13b',
  repo: 'vitepress-blog',
  owner: 'aguoxing',
  admin: ['aguoxing'],
  id: md5(location.pathname), // Ensure uniqueness and length less than 50
  language: 'zh-CN',
  distractionFreeMode: true // Facebook-like distraction free mode
})
onMounted(() => {
  gitalk.render('gitalk-container')
})
</script>
<style scoped></style>
