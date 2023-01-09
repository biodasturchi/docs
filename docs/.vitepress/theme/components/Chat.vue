<template>
  <div id="gitalk-container"></div>
</template>

<script lang="ts" setup>
import "../styles/gitalk.css";
import Gitalk from "gitalk";
import md5 from "blueimp-md5";
import { onMounted } from "vue";

const gitalk = new Gitalk({
  clientID: "f32c0915f6384229a89e",
  clientSecret: "651be5d39f8d8b6932564830d43bd85831aa1b0c",
  repo: "docs",
  owner: "biodasturchi",
  admin: ["ilosrim"],
  id: md5(location.pathname), // Ensure uniqueness and length less than 50
  language: "en-US",
  distractionFreeMode: true, // Facebook-like distraction free mode
});
onMounted(() => {
  gitalk.render("gitalk-container");
});
</script>
