<template>
  <div class="card" v-for="(item, idx) in items" :key="idx">
    <div class="cardHead">
      <small>{{item.topic}}</small>
      <h6>{{item.title}}</h6>
      <a :href="item.path">Read More</a>
    </div>
    <img class="img" :src="item.imgUrl" />
  </div>
</template>

<script>
export default {
  name: "DevCard",
  data() {
    return {
      items: [
        {
          id: 0,
          title: "Cav1.1 kanaliga ligand sifatida cynaroside moddasining biriktirilish natijalari",
          path: "./bio/2022-11-25-docking-on-ca-complex",
          imgUrl: "https://raw.githubusercontent.com/ilosrim/imgs/master/bio/2022-11-25/complex-2.png",
          topic: "bio",
        },
        {
          id: 1,
          title: "Ligand docking and binding site analysis with pymol and autodock/vina",
          path: "./bio/2022-11-29-ligand-docking-and-binding-site-analysis",
          imgUrl: "https://raw.githubusercontent.com/ilosrim/imgs/master/bio/2022-11-29/banner.png",
          topic: "bio",
        },
        {
          id: 2,
          title: "How to build modern docs with vitepress | Full text tutorial",
          path: "./dev/2022-11-22-how-to-build-modern-docs-with-vitepress",
          imgUrl: "https://raw.githubusercontent.com/ilosrim/imgs/master/dev/viteblog.png",
          topic: "dev",
        },
        {
          id: 3,
          title: "Creating a Markdown Blog with NextJS | Full text tutorial",
          path: "./dev/2022-11-25-creating-markdown-blog-with-nextjs",
          imgUrl: "https://raw.githubusercontent.com/ilosrim/imgs/master/dev/nextjs-markdown2.png",
          topic: "dev",
        },
      ]
    }
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
.cardHead {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card:hover {
  border-color: var(--vp-c-brand-light);
}
.img {
    width: 200px;
}
small {
  color: #999999;
}

@media only screen and (max-width: 767px) {
  .card {
    flex-direction: column;
  }
}
</style>