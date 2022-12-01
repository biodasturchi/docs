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
          imgUrl: "https://images2.imgbox.com/dd/e6/WGYYKkdP_o.png",
          topic: "bio",
        },
        {
          id: 0,
          title: "Ligand docking and binding site analysis with pymol and autodock/vina",
          path: "./bio/2022-11-29-ligand-docking-and-binding-site-analysis",
          imgUrl: "https://images2.imgbox.com/af/90/boRPGGIV_o.png",
          topic: "bio",
        },
        {
          id: 0,
          title: "How to build modern docs with vitepress | Full text tutorial",
          path: "./dev/2022-11-22-how-to-build-modern-docs-with-vitepress",
          imgUrl: "https://thumbs2.imgbox.com/87/52/GMO61RHK_t.png",
          topic: "dev",
        },
        {
          id: 0,
          title: "Creating a Markdown Blog with NextJS | Full text tutorial",
          path: "./dev/2022-11-25-creating-markdown-blog-with-nextjs",
          imgUrl: "https://thumbs2.imgbox.com/9e/18/dx5sxn3W_t.png",
          topic: "dev",
        },
      ]
    }
  },
  getImageUrl(arg) {
      var images = require.context('../public/images/', false, /\.png$/)
      return images('./' + arg + ".png")
    }
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