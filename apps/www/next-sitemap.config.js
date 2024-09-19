const { execSync } = require("child_process");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://ruru-ui.vercel.app",
  generateRobotsTxt: true,
  exclude: ["/api/*"],
  transform: async (config, path) => {
    const lastmod = await getLastModifiedDate(path);
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};

async function getLastModifiedDate(path) {
  try {
    const timestamp = execSync(`git log -1 --format=%ct ${path}`)
      .toString()
      .trim();
    return new Date(parseInt(timestamp, 10) * 1000).toISOString();
  } catch (error) {
    console.error(`Error getting last modified date for ${path}:`, error);
    return new Date().toISOString(); // Fallback to current date
  }
}
