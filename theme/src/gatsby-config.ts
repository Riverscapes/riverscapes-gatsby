import { GatsbyConfig } from 'gatsby'

module.exports = ({ contentPath = `${__dirname}/content/page` }) =>
  ({
    plugins: [
      `gatsby-plugin-image`,
      `gatsby-plugin-mdx-source-name`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          ignore: [`**/\.*`],
          path: `./src/images`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `page`,
          ignore: [`**/\.*`],
          path: contentPath,
        },
      },
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 992,
              },
            },
            {
              resolve: `gatsby-remark-responsive-iframe`,
              options: {
                wrapperStyle: `margin-bottom: 1.0725rem`,
              },
            },
            {
              resolve: `gatsby-remark-autolink-headers`,
              options: {
                className: `header-link-icon`,
              },
            },
            `gatsby-remark-prismjs`,
          ],
        },
      },
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-plugin-sharp`,
        options: {
          defaults: {
            formats: [`auto`, `webp`],
            placeholder: `dominantColor`,
            quality: 50,
            breakpoints: [750, 1080, 1366, 1920],
            backgroundColor: `transparent`,
            tracedSVGOptions: {},
            blurredOptions: {},
            jpgOptions: {},
            pngOptions: {},
            webpOptions: {},
            avifOptions: {},
          },
        },
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: `Riverscapes Consortium`,
          short_name: `Riverscapes`,
          start_url: `/`,
          background_color: `#ffffff`,
          // This will impact how browsers show your PWA/website
          // https://css-tricks.com/meta-theme-color-and-trickery/
          // theme_color: `#663399`,
          display: `minimal-ui`,
          icon: `./src/images/favicon/data-exchange-icon-64x64.png`, // This path is relative to the root of the site.
        },
      },
    ],
  } as GatsbyConfig)