---
title: Creating markdown blog with next js
author: Mirsoli Mirsultonov
date: 2022-03-07
subDate: 2022/03/07
image: https://raw.githubusercontent.com/biodasturchi/imgs/master/dev//nextjs-markdown2.png
description: Markdown makes it much easier to express formatting and focus on writing...
category: Dev
tags:
  - nextjs
  - markdown
  - blog
---

# {{ $frontmatter.title }}

{{ $frontmatter.description }}

_[{{ $frontmatter.author }}](mailto:mirjr17@outlook.com)_ | {{ $frontmatter.subDate}}

![banner](https://raw.githubusercontent.com/biodasturchi/imgs/master/dev//nextjs-markdown2.png)

## Why Do you want a markdown blog?

- Markdown makes it much easier to express formatting and focus on writing
- Updating your blog means committing to github, yay for your heat map
- More practice with markdown which is good writing documentation.
- Since markdown blogs are typically statically rendered they are fast and great for SEO

In this tutorial I will be making a markdown blog with NextJS. I do have a tool called [create-markdown-blog](https://www.npmjs.com/package/create-markdown-blog) which can help spin you up blog template using slightly older versions of Next, Nuxt, Gatsby, Sapper and so forth if you don't want to assemble it from scratch. Also, AstroJS has a markdown blog template you can easily generate with the command `npm init astro`.

## Making the Blog

- Generate a new nextJS app npm init next-app@latest
- cd into the new folder
- create a folder called **components**
- create a Header and Footer component

`/components/Header.js`

```javascript
function Header(props) {
  return <h1>Header Component</h1>;
}

export default Header;
```

`/components/Footer.js`

```javascript
function Footer(props) {
  return <h1>Footer Component</h1>;
}

export default Footer;
```

- create a Layout component

`/components/Layout.js`

```javascript
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
```

- Add the layout component so it shows up on every page.

`/pages/_app.js`

```javascript
import "../styles/globals.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
```

- create a folder called `posts`

## Markdown Files

In this posts folder is where you'll add markdown files, make a file called `example-post.md` with the following.

```markdown
---
title: "This is an example post"
author: "Mir JR."
category: "example"
date: "2022-03-13"
bannerImage: "url-to-image.png"
tags:
  - example
---

## This is an example blog post

This is sample content. The section above is called Frontmatter where we can add post metadata like title and author. You can add as little or as many properties in the frontmatter using YAML syntax.
```

## Creating the Blog List

We will create a page `/blog` that will act as where all our blog posts will be listed so created `/pages/blog.js` with the following. Also make sure to install grey-matter so can get the Frontmatter (the YAML above each blog post).

`npm install gray-matter`

`/pages/blog.js`

```javascript
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

// The Blog Page Content
export default function Blog({ posts }) {
  return (
    <main>
      {posts.map((post) => {
        //extract slug and frontmatter
        const { slug, frontmatter } = post;
        //extract frontmatter properties
        const { title, author, category, date, bannerImage, tags } =
          frontmatter;

        //JSX for individual blog listing
        return (
          <article key={title}>
            <Link href={`/posts/${slug}`}>
              <h1>{title}</h1>
            </Link>
            <h3>{author}</h3>
            <h3>{date}</h3>
          </article>
        );
      })}
    </main>
  );
}

//Generating the Static Props for the Blog Page
export async function getStaticProps() {
  // get list of files from the posts folder
  const files = fs.readdirSync("posts");

  // get frontmatter & slug from each post
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  // Return the pages static props
  return {
    props: {
      posts,
    },
  };
}
```

## Making the Individual Post pages

We'll need to make a dynamic route that will create a page for every post we have. We start by creating `/pages/posts/[slug].js` the [] denotes the dynamic route to nextjs. The conents of this page should be the following:

Also make sure to install markdown-it

`npm install markdown-it`

`/pages/posts/[slug].js`

```javascript
import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

// The page for each post
export default function Post({ frontmatter, content }) {
  const { title, author, category, date, bannerImage, tags } = frontmatter;

  return (
    <main>
      <img src={bannerImage} />
      <h1>{title}</h1>
      <h2>
        {author} || {date}
      </h2>
      <h3>
        {category} || {tags.join()}
      </h3>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </main>
  );
}

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("posts");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}

// Generate the static props for the page
export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
```

That's it, the blog functionality should be working. Now you just need to style it, tweak it to your liking and write more posts! Since this is a NextJS project deployment will be as simple as connecting a github repo to Vercel, how awesome is that!
