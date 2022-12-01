<template>
  <div id="app" class="card">
    <div>
      <h6>{{title}}</h6>
      <a :href="path">Read More</a>
    </div>
    <div>
      <img class="img" :src="src" />
    </div>
  </div>
</template>

<script>
export default {
  // name: "DevCard",
  // data() {
  //   return {
  //     items: [
  //       { id: "1", src: "next-markdown.png", tags: ["all", "tag1"] },
  //       { id: "2", src: "viteblog.png", tags: ["all", "tag2"] },
  //     ],
  //   };
  // },
  // methods: {
  //   getImgUrl: function (imagePath) {
  //     return require('@public/images/bio' + imagePath);
  //   }
  // }
  props: {
    title: String,
    path: String,
    src: String,
  },
}
</script>

<style lang="css" scoped>
.card {
  display: flex; 
  justify-content: space-between; 
  border: 1px solid var(--vp-c-brand-lighter); 
  border-radius:5px; 
  padding: 1rem; 
  margin-top: 1rem;
  transition: all 0.3s ease;
}
.card:hover {
  border-color: var(--vp-c-brand-light);
}
.img {
    width: 200px;
}
</style>