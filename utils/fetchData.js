const axios = require("axios");

async function fetchHtml(url) {
  const { data } = await axios.get(url);
  return data;
}

async function fetchXml(url) {
  const { data } = await axios.get(url);
  return data;
}

async function fetchRobotsTxt(url) {
  const { data } = await axios.get(url);
  return data;
}

module.exports = { fetchHtml, fetchXml, fetchRobotsTxt };
