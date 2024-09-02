const cheerio = require("cheerio");
const { fetchHtml } = require("../utils/fetchData");

const extractTitleTag = require("./modules/extractTitleTag");
const extractMetaDescription = require("./modules/extractMetaDescription");
const extractMetaKeywords = require("./modules/extractMetaKeywords");
const extractImageTags = require("./modules/extractImageTags");
const analyzePageStructure = require("./modules/analyzePageStructure");
const analyzeHeadingTags = require("./modules/analyzeHeadingTags");
const extractLinks = require("./modules/extractLinks");
const analyzeSitemap = require("./modules/analyzeSitemap");
const analyzeRobotsTxt = require("./modules/analyzeRobotsTxt");
// const extractUrls = require("./modules/extractUrls");

async function getSeoData(url) {
  const seoData = {};

  // Fetch the webpage's HTML content
  const html = await fetchHtml(url);
  const $ = cheerio.load(html);

  // Extract SEO information
  seoData.titleTag = extractTitleTag($);
  seoData.metaDescription = extractMetaDescription($);
  seoData.metaKeywords = extractMetaKeywords($);
  seoData.imageTags = extractImageTags($);
  seoData.pageStructure = analyzePageStructure($);
  seoData.headingTags = analyzeHeadingTags($);
  seoData.links = extractLinks($);
  seoData.robotsTxt = await analyzeRobotsTxt(url);
  // seoData.sitemap = await analyzeSitemap(url);
  // seoData.siteUrls = await extractUrls(url);

  return seoData;
}

module.exports = { getSeoData };
