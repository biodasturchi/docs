<template>
  <div class="main-container">

    <!-- post card -->
    <div class="item-container" v-for="(item, index) in posts" :key="index">
      <a :href="withBase(item.regularPath)">
        <div class="item-top">
          <div class="items">
            <div class="item-date" v-text="item.frontMatter.date"></div>
            <div class="item-title" v-text="item.frontMatter.title"></div>
          </div>
          <div class="item-tag" v-text="item.frontMatter.description"></div>
        </div>
        <!-- <img
          class="postImage"
          :src="item.frontMatter.image"
          :alt="item.frontMatter.description"
        /> -->
      </a>
    </div>

    <!-- pagination -->
    <div class="pagination">
      <div
        v-for="(i, index) in pagesNum"
        :key="index"
        v-text="i"
        class="link"
        :class="{ activeLink: pageCurrent === i }"
        @click="go(i)"
      ></div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, reactive } from "vue";
import { useData, withBase } from "vitepress";
import { Post } from "docs/.vitepress/utils/blog";
const { theme } = useData();

interface post {
  regularPath: string;
  frontMatter: object;
}

// get posts
let postsAll: Post[] = theme.value.posts || [];
// get postLength
let postLength = theme.value.postLength;
// get pageSize
let pageSize = theme.value.pageSize;
//  pagesNum
let pagesNum =
  postLength % pageSize === 0
    ? postLength / pageSize
    : postLength / pageSize + 1;
pagesNum = parseInt(pagesNum.toString());
//pageCurrent
let pageCurrent = ref(1);
// filter index post
postsAll = postsAll.filter((item: post) => {
  return item.regularPath.indexOf("index") < 0;
});
// pagination
let allMap: Record<number, []> = {};
for (let i = 0; i < pagesNum; i++) {
  allMap[i] = [];
}
let index = 0;
for (let i = 0; i < postsAll.length; i++) {
  if (allMap[index].length > pageSize - 1) {
    index += 1;
  }
  allMap[index].push(postsAll[i]);
}
// set posts
let posts = ref<Post[]>([]);
posts.value = allMap[pageCurrent.value - 1];

// click pagination
const go = (i: number) => {
  pageCurrent.value = i;
  posts.value = allMap[pageCurrent.value - 1];
};
// timestamp transform
const transDate = (date: string) => {
  const dateArray = date.split("-");
  let year = dateArray[0],
    month = ``,
    day = dateArray[2];
  switch (dateArray[1]) {
    case "1":
    case "01":
      month = `Jan`;
      break;
    case "2":
    case "02":
      month = `Feb`;
      break;
    case "3":
    case "03":
      month = `Mar`;
      break;
    case "4":
    case "04":
      month = `Apr`;
      break;
    case "5":
    case "05":
      month = `May`;
      break;
    case "6":
    case "06":
      month = `Jun`;
      break;
    case "7":
    case "07":
      month = `Jul`;
      break;
    case "8":
    case "08":
      month = `Aug`;
      break;
    case "9":
    case "09":
      month = `Sep`;
      break;
    case "10":
      month = `Oct`;
      break;
    case "11":
      month = `Nov`;
      break;
    case "12":
      month = `Dec`;
      break;
    default:
      month = `Month`;
  }
  return `${month} ${day}, ${year}`;
};
</script>

<style scoped>
.item-container {
  display: flex;
  flex-direction: column;
  border-bottom: 1px dashed var(--vp-c-brand);
  padding: 1rem 0 0;
}
.item-container a {
  display: flex;
  justify-content: space-between;
}
/* .item-container a:hover .item-tag, */
/* .item-container a:hover .item-date  */
.item-container a:hover .item-title {
  color: var(--vp-c-brand);
}
.item-top {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 0.5rem;
}
.pagination {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}
.link {
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  /* border: 1px solid #282936; */
  cursor: pointer;
  transition: 0.2s;
  border-radius: 2px;
}
.activeLink {
  border: 1px solid var(--vp-c-brand);
  color: var(--vp-c-brand);
  background-color: var(--vp-pagination-bgc);
}
.list-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.item-title {
  font-size: 1.0625rem;
  font-weight: 500;
  margin: 0.1rem 0;
  transition: all ease 0.3s;
}
.item-desc {
  font-size: 0.9375rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  color: #71717a;
  margin: 0.625rem 0 1rem;
  line-height: 1.5rem;
  transition: all ease 0.3s;
}
.item-date {
  transition: all ease 0.3s;
  font-size: 0.9rem;
  color: var(--li-dot-color);
}
.item-tag {
  color: var(--li-dot-color);
}
.postImage {
  width: 235px;
  height: 120px;
}

@media only screen and (max-width: 767px) {
  .item-container a {
    flex-direction: column;
  }
  .postImage {
    width: auto;
  }
  .item-desc {
    margin: 0.325 0 0.5;
  }
}
</style>
