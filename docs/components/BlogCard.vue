<template>
  <a :href="path">
    <div class="box">
      <div class="photo"></div>
    </div>
  </a>
</template>
<script>
export default {
  props: {
    title: String,
    path: String,
    src: String,
  },
}
</script>
<style lang="scss">

$color_white: #fff;
$color_prime: #5ad67d;
$color_grey: #e2e2e2;
$color_grey_dark: #a2a2a2;

.box {
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  box-shadow: 0 3px 7px -1px rgba(#000, .1);
  margin-bottom: 1.6%;
  background: $color_white;
  line-height: 1.4;
  font-family: sans-serif;
  border-radius: 5px;
  overflow: hidden;
  z-index: 0;
  &:hover {
    .photo {
      transform: scale(1.4) rotate(3deg);
    }
  }
  .photo {
    width: 150px;
    height: 100%;
    background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: all 0.3s ease;
    transform: scale(1.3) rotate(3deg);
  }
}

</style>