module.exports = {
  siteMetadata: {
    description: "Personal page of Johnathan Yih",
    locale: "en",
    title: "J. Yih",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "classic",
      },
    },
  ],
}
