<template>
  <div class="socialBox">
    <a
      class="socialLinks"
      v-for="item in items"
      :key="item.id"
      :href="item.path"
      target="_blank"
    >
      <img class="socialImg" :alt="item.alt" :src="item.imgUrl" />
    </a>
  </div>
</template>

<script lang="ts">
export default {
  name: "AboutLinks",
  data() {
    return {
      items: [
        {
          id: 0,
          path: "mailto:ilosrim@yahoo.com",
          imgUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/gmail.svg",
          alt: "ilosrim e-mail",
        },
        {
          id: 1,
          path: "https://ilosrim.uz",
          imgUrl:
            "https://raw.githubusercontent.com/iconic/open-iconic/master/svg/globe.svg",
          alt: "ilosrim.com",
        },
        {
          id: 2,
          path: "https://linkedin.com/in/ilosrim",
          imgUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/linkedin.svg",
          alt: "ilosrim's linkedin profile",
        },
        {
          id: 3,
          path: "https://twitter.com/ilosrim",
          imgUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/twitter.svg",
          alt: "ilosrim.com",
        },
        {
          id: 4,
          path: "https://t.me/ilosrim",
          imgUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/telegram.svg",
          alt: "ilosrim's telegram profile",
        },
        {
          id: 5,
          path: "https://instagram.com/ilosrim",
          imgUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/instagram.svg",
          alt: "ilosrim's instagram profile",
        },
        {
          id: 6,
          path: "https://dev.to/ilosrim",
          imgUrl:
            "https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/dev-dot-to.svg",
          alt: "ilosrim's DevDotTo profile",
        },
      ],
    };
  },
};
</script>

<style lang="css" scoped>
.socialBox {
  display: flex;
}
.socialLinks {
  margin-right: 15px;
}
.socialImg {
  width: 22px;
  text-align: left;
  color: #fff;
}
</style>
