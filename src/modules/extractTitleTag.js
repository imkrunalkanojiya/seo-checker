function extractTitleTag($) {
  const titleText = $("title").text().trim();
  return {
    available: !!titleText,
    suggestion: !titleText
      ? "Add a unique and descriptive title tag."
      : {
          text: titleText,
        },
  };
}

module.exports = extractTitleTag;
