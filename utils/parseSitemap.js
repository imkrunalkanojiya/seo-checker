const xml2js = require("xml2js");

async function parseSitemap(xmlData) {
  const parser = new xml2js.Parser({ explicitArray: false }); // Use explicitArray: false for simpler structure
  const sitemapXml = await parser.parseStringPromise(xmlData);

  // Check for sitemapindex and urlset
  const sitemapindex = sitemapXml.sitemapindex;
  const urlset = sitemapXml.urlset;

  return {
    exists: !!sitemapindex || !!urlset,
    validXml: !!sitemapindex || !!urlset,
    containsUrls: sitemapindex
      ? sitemapindex.sitemap && sitemapindex.sitemap.length > 0
      : urlset &&
        urlset.url &&
        Array.isArray(urlset.url) &&
        urlset.url.length > 0,
    sitemaps: sitemapindex
      ? sitemapindex.sitemap.map((entry) => entry.loc)
      : [],
  };
}

module.exports = { parseSitemap };
