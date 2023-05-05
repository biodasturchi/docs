<template>
  <div id="gitalk-container"></div>
</template>
<script lang="ts" setup>
import "../styles/gitalk.css";
import Gitalk from "gitalk";
import { onContentUpdated, useRouter } from "vitepress";

// const { route, go } = useRouter();
function deleteChild() {
  const element = document.querySelector("#gitalk-container");
  let child = element?.lastElementChild;
  while (child) {
    element?.removeChild(child);
    child = element?.lastElementChild;
  }
}
onContentUpdated(() => {
  // reset gittalk element for update
  deleteChild();
  const gitalk = new Gitalk({
    clientID: "6d4af1944a0779e8055e",
    clientSecret: "73de915f75906ad6e9d7ff655c075eb70503c457",
    repo: "blog-comments",
    owner: "mirjr",
    admin: ["mirjr"],
    id: location.pathname.substring(0, 50), // Ensure uniqueness and length less than 50
    language: "en-US",
    distractionFreeMode: true, // Facebook-like distraction free mode
  });
  gitalk.render("gitalk-container");
});
</script>
<style scoped></style>