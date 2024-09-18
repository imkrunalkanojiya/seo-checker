const { parseSitemap } = require("../../utils/parseSitemap");
const { fetchXml } = require("../../utils/fetchData");

async function analyzeSitemap(url) {
  const sitemapUrl = `${url}sitemap.xml`;
  const xmlData = await fetchXml(sitemapUrl);
  return parseSitemap(xmlData);
}

module.exports = analyzeSitemap;
