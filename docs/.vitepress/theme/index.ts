import DefaultTheme from "vitepress/theme";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faReddit, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import Layout from "./components/Layout.vue";
import Blog from "./components/Home.vue";
import Archive from "./components/Archive.vue";
import Tags from "./components/Tags.vue";
import Category from "./components/Category.vue";
import Links from "./components/Links.vue";
import ContactPage from "./components/ContactPage.vue";

import "./styles/blog.css";
import "./styles/layout.css";
import "./styles/gitalk.css"

library.add(faEnvelope, faLinkedin, faTwitter, faGlobe, faReddit)

export default {
  ...DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }) {
    // register global component
    app.component("font-awesome-icon", FontAwesomeIcon);
    app.component("Blog", Blog);
    app.component("Tags", Tags);
    app.component("Category", Category);
    app.component("Archive", Archive);
    app.component("Links", Links);
    app.component("ContactPage", ContactPage);
  },
};
