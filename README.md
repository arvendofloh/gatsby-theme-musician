<h1 align="center">
  Fork of Gatsby Theme Musician by [ekafyi](https://github.com/ekafyi)
</h1>

<p align="center">
	<em>A Gatsby theme for bands and music artists</em> πΈπ
</p>

<p align="center">
	<a href="https://gatsby-theme-musician.netlify.com" rel="external">
    <img src="https://raw.githubusercontent.com/ekafyi/gatsby-theme-musician/master/screenshot_with_bg.png" alt="Demo Site thumbnail">
  </a>
</p>

## Features

- β± Have a landing page up and running in minutes
- π Optimized for SEO and social sharing
- π± Mobile-friendly
- οΈβ‘οΈ Fast and performant, with and without Javascript
- π€ Write as little _or_ as much code as you want
- ππ½ Better with othersβendless combination with other Gatsby themes (blog, ecommerce, photo galleries...)
- π Write your content in plain text, Markdown, HTML elements, and React components thanks to [MDX](https://www.gatsbyjs.org/docs/mdx/)
- ππ½ Customizable, versatile design tokens-based styling with [Theme UI](https://theme-ui.com/)

Read [introductory post on DEV.to](https://dev.to/ekafyi/make-a-landing-page-for-your-band-in-30-minutes-with-gatsby-theme-musician-2227)

---

π‘ _If you have never used Gatsby before, head to their [quick start guide](https://www.gatsbyjs.org/docs/quick-start/) or [beginner-friendly tutorials](https://www.gatsbyjs.org/tutorial/)._

## π¦ Installation

### Option A: Use the starter to create a _new_ site

π§ IN PROGRESS π§

### Option B: Manually add to your existing site

```sh
npm install --save gatsby-theme-musician
# or
yarn add gatsby-theme-musician
```

Add the theme to the `plugins` array in your `gatsby-config.js`:

```javascript
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-musician",
    },
  ],
}
```

Start your site. (This step will copy the necessary theme files to your site.)

```sh
gatsby develop
```

## π  Usage

### 1) Theme options

| Key           | Default value | Description               |
| ------------- | ------------- | ------------------------- |
| `basePath`    | `/`           | Root url for landing page |
| `contentPath` | `content`     | Location of data files    |

Example:

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-musician`,
      options: {
        // Your site will run at http://localhost:8000/my-band
        basePath: `my-band`,
      },
    },
  ],
}
```

### 2) Theme configuration

Configuration files are located in `src/gatsby-theme-musician/config`. They use the [YAML format](https://yaml.org/start.html). These are where you edit theme-specific details such as artist data and site navigation.

```sh
config
βββ artist.yml # Artist data
βββ navigation.yml # Site navigation links
βββ text_labels.yml # Site text labels
```

π‘ See [Theme Config documentation](https://github.com/ekafyi/gatsby-theme-musician/blob/master/docs/usage.md#theme-configuration) for more details.

### 3) Content

By default, content files are located in `content` unless you specify a different path in the [theme options](#theme-options).

```sh
content
βββ artist-landing-page.mdx
βββ images
βΒ Β  βββ favicon.png
β   βββ placeholder.png
βββ releases.yml
βββ sample-page.mdx
βββ shows.yml
```

Optionally, you may add images in PNG or JPG format with the following file names.

- `artist-banner.png|jpg` β displayed in top full-width banner
- `artist-logotype.png|jpg` β displayed in header (in place of artist name)
- `artist-social.png|jpg` β used in SEO and social thumbnail metadata

π‘ See [Content documentation](https://github.com/ekafyi/gatsby-theme-musician/blob/master/docs/usage.md#content) for more details.

---

<p align="center">
	Have fun! π€π½
</p>
