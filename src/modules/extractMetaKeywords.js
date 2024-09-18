function extractMetaKeywords($) {
  const metaKeywords = $('meta[name="keywords"]').attr("content");
  const isAvailable = !!metaKeywords;

  return {
    available: isAvailable,
    suggestion: !isAvailable
      ? "Add relevant keywords to your meta tags to improve search engine optimization."
      : {
          text: metaKeywords,
        },
  };
}

module.exports = extractMetaKeywords;
