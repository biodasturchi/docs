import DefaultTheme from "vitepress/theme";

import Layout from "./components/Layout.vue";
import Blog from "./components/Home.vue";
import Archive from "./components/Archive.vue";
import Tags from "./components/Tags.vue";
import Category from "./components/Category.vue";
import Links from "./components/Links.vue";
import ContactPage from "./components/ContactPage.vue";

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
    app.component("Archive", Archive);
    app.component("Links", Links);
    app.component("ContactPage", ContactPage);
  },
};
