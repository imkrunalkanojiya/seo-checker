const puppeteer = require("puppeteer");

const visitedUrls = new Set();

// Options to control the crawling behavior
const crawlOptions = {
  crawlMode: "homepage", // Options: "entireSite" or "homepage"
};

function normalizeUrl(url) {
  try {
    const parsedUrl = new URL(url);
    // Normalize by removing fragment, trailing slash, and converting to lowercase
    parsedUrl.hash = ""; // Remove the fragment part
    parsedUrl.search = ""; // Optionally remove query parameters if needed
    return parsedUrl.toString().replace(/\/$/, "").toLowerCase(); // Remove trailing slash and convert to lowercase
  } catch (error) {
    console.error(`Invalid URL: ${url}`);
    return url; // Return the original if it's invalid
  }
}

async function crawl(url, depth = 0) {
  const normalizedUrl = normalizeUrl(url);
  const maxDepth = crawlOptions.crawlMode === "entireSite" ? Infinity : 0; // Set depth based on the mode

  // Check if the URL has already been visited or if we reached the maximum depth
  if (depth > maxDepth || visitedUrls.has(normalizedUrl)) {
    return;
  }

  visitedUrls.add(normalizedUrl); // Mark this URL as visited

  let browser;
  let page;

  try {
    browser = await puppeteer.launch();
    page = await browser.newPage();

    await page.goto(url, { waitUntil: "domcontentloaded" });

    console.log(`Crawled URL: ${normalizedUrl}`);

    // If we're only crawling the homepage, exit early
    if (crawlOptions.crawlMode === "homepage") {
      return; // Exit if only crawling the homepage
    }

    // Otherwise, find all links on the page and crawl them
    const links = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll("a"));
      return links
        .map((link) => link.href)
        .filter((href) => href.startsWith(window.location.origin));
    });

    // Recursively crawl each link found
    for (const link of links) {
      await crawl(link, depth + 1);
    }
  } catch (error) {
    console.error(`Error crawling ${url}: ${error.message}`);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

module.exports = { crawl, visitedUrls };
