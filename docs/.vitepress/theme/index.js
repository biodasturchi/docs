import DefaultTheme from "vitepress/theme";

import NewLayout from "./components/NewLayout.vue";
import AboutLinks from "./components/AboutLinks.vue";
import BlogCard from "./components/BlogCard.vue";
import ContactCard from "./components/ContactCard.vue";

import "./custom.css";

export default {
  ...DefaultTheme,
  Layout: NewLayout,
  enhanceApp({ app }) {
    // register global component
    app.component("AboutLinks", AboutLinks);
    app.component("BlogCard", BlogCard);
    app.component("ContactCard", ContactCard);
  },
};
