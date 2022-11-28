# Posts section

## Bioinformatics


<script setup>
  import DevCard from '../components/DevCard.vue';
</script>

<!-- <DevCard /> -->
<div class="container">
  <!-- 1 -->
  <div class="card">
    <div>
      <h6>Cav1.1 kanaliga ligand sifatida cynaroside moddasining biriktirilish natijalari</h6>
      <a href="./bio/2022-11-25-docking-on-ca-complex">Read More</a>
    </div>
    <img class="img" src="../public/images/bio/2022-11-25-complex-2.png" />
  </div>

  <!-- 2 -->
  <div class="card">
    <div>
      <h6>Ligand docking and binding site analysis with pymol and autodock/vina</h6>
      <a href="./bio/11-29-2022-ligand-docking-and-binding-site-analysis">Read More</a>
    </div>
    <img class="img" src="../public/images/bio/2022-11-25-complex-2.png" />
  </div>
</div>

## Programming

<div class="card">
  <div>
    <h6>How to build modern docs with vitepress | Full text tutorial</h6>
    <a href="./dev/how-to-build-modern-docs-with-vitepress">Read More</a>
  </div>
  <img class="img" src="../public/images/dev/viteblog.png" />
</div>

<div class="card">
  <div>
    <h6>Creating a Markdown Blog with NextJS | Full text tutorial</h6>
    <a href="./dev/creating-markdown-blog-with-nextjs">Read More</a>
  </div>
  <img class="img" src="../public/images/dev/next-markdown.png" />
</div>

<style lang="css">
  .card {
    display: flex; 
    justify-content: space-between; 
    border: 1px solid var(--vp-c-brand-lighter); 
    border-radius:5px; 
    padding: 1rem; 
    margin-top: 1rem;
  }
  .img {
    width: 200px;
  }
</style>