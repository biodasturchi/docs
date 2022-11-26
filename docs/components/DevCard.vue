<template>
  <div id="app" class="card">
    <div>
      <h6>Title</h6>
      <a href="#">Read More</a>
    </div>
    <div v-for="item in items" :key="item.id">
      <img class="list-complete-img" :src="getImgUrl(item.src)" />
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: "App",
  data: function () {
    return {
      items: [
        { id: "1", src: "next-markdown.png", tags: ["all", "tag1"] },
        { id: "2", src: "viteblog.png", tags: ["all", "tag2"] },
      ],
    };
  },
  methods: {
    getImgUrl: function (imagePath) {
      return require('@/images/dev/' + imagePath);
    }
  }
}
</script>

<style lang="css">
.card {
  display: flex; 
  justify-content: space-between; 
  border: 1px solid var(--vp-c-brand-lighter); 
  border-radius:5px; 
  padding: 1rem; 
  margin-top: 1rem;
}
</style>