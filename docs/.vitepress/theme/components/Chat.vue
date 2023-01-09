<template>
  <div id="gitalk-container"></div>
</template>

<script lang="ts" setup>
import "../styles/gitalk.css";
import Gitalk from "gitalk";
import md5 from "blueimp-md5";
import { onMounted } from "vue";

const gitalk = new Gitalk({
  clientID: "dce39bfa03d078617599",
  clientSecret: "d2ce4b2cfc0b3384038f88e34cd0b3aad08ba04d",
  repo: "docs",
  owner: "biodasturchi",
  admin: ["biodasturchi"],
  id: md5(location.pathname), // Ensure uniqueness and length less than 50
  language: "en-US",
  distractionFreeMode: true, // Facebook-like distraction free mode
});
onMounted(() => {
  gitalk.render("gitalk-container");
});
</script>
