const { crawl, visitedUrls } = require("../../utils/utils");
let crawlResults = [];

async function extractUrls(url) {
  await crawl(url); // Start crawling from depth 0
  crawlResults.push(...Array.from(visitedUrls)); // Store the results
  return crawlResults;
}

module.exports = extractUrls;
