function extractMetaDescription($) {
  const metaDescription = $('meta[name="description"]').attr("content");
  const isAvailable = !!metaDescription;

  return {
    available: isAvailable,
    suggestion: !isAvailable
      ? "Write a concise summary of your page's content (150-160 characters)."
      : {
          text: metaDescription,
        },
  };
}

module.exports = extractMetaDescription;
