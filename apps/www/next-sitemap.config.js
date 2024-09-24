/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://ruru-ui.vercel.app",
  generateRobotsTxt: true,
  exclude: ["/api/*"],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
