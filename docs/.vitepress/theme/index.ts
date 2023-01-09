import DefaultTheme from "vitepress/theme";

import Layout from "./components/Layout.vue";
import Blog from "./components/Home.vue";
import Archives from "./components/Archives.vue";
import Tags from "./components/Tags.vue";
import Category from "./components/Category.vue";

import "./styles/blog.css";
import "./styles/layout.css";

export default {
  ...DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }) {
    // register global component
    app.component("Blog", Blog);
    app.component("Tags", Tags);
    app.component("Category", Category);
    app.component("Archives", Archives);
  },
};
