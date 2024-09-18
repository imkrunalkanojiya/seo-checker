const { parseRobotsTxt } = require("../../utils/parseRobotsTxt");
const { fetchRobotsTxt } = require("../../utils/fetchData");

async function analyzeRobotsTxt(url) {
  const robotsTxtUrl = `${url}/robots.txt`;
  const robotsTxtContent = await fetchRobotsTxt(robotsTxtUrl);
  return parseRobotsTxt(robotsTxtContent);
}

module.exports = analyzeRobotsTxt;
