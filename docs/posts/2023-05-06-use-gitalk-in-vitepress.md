---
title: Use Gitalk in Vitepress
author: Mirsoli Mirsultonov
date: 2023-05-06
subDate: 2023/05/06
image: https://user-images.githubusercontent.com/62628408/201538130-a1008969-06ae-4aad-9ea0-b77384d6bac1.png
description: "Adding and using the Gitalk package in our own application"
category: Dev
tags:
  - vitepress
  - gitalk
  - comment
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }}

## 1. [Register a new OAuth application](https://github.com/settings/applications/new)
- Aplication name: xxx
- Home Page URL: your website address, like `https://biodasturchi.uz`
- Authorization callback URL: your website address, like `https://biodasturchi.uz`
- Remember Your `Client ID` and `Client secrets`

## 2. Copy and paste:
```javascript
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
  clientID: 'xxx', //  Client ID
  clientSecret: 'xxx', // Client secrets
  repo: 'xxx', // repo name
  owner: 'xx',
  admin: ['xx'],
  id: md5(location.pathname), // Ensure uniqueness and length less than 50
  language: 'zh-CN',
  distractionFreeMode: true // Facebook-like distraction free mode
})
onMounted(() => {
  gitalk.render('gitalk-container')
})
</script>
<style scoped></style>
```

