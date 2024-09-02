function extractImageTags($) {
  const imageTags = [];

  $("img").each((index, element) => {
    const imgTag = {
      src: $(element).attr("src"),
      alt: $(element).attr("alt"),
      altAvailable: !!$(element).attr("alt"),
      optimizationSuggestions: [],
    };

    // Image optimization suggestions
    if (!imgTag.alt) {
      imgTag.optimizationSuggestions.push(
        "Add alt text for accessibility and SEO."
      );
    }
    if (imgTag.src.endsWith(".jpg") || imgTag.src.endsWith(".png")) {
      imgTag.optimizationSuggestions.push(
        "Consider using WebP or AVIF for better compression."
      );
    }
    if (imgTag.src.includes(" ")) {
      imgTag.optimizationSuggestions.push(
        "Use descriptive file names without spaces."
      );
    }
    if ($(element).attr("width") > 1000) {
      imgTag.optimizationSuggestions.push(
        "Consider resizing or compressing the image for better page load times."
      );
    }
    if (!$(element).attr("loading")) {
      imgTag.optimizationSuggestions.push(
        "Consider adding the 'loading' attribute for lazy loading."
      );
    }

    imageTags.push(imgTag);
  });

  return {
    tags: imageTags.length > 0 ? imageTags : null,
    suggestion:
      imageTags.length === 0 ? "Add relevant images to your page." : null,
  };
}

module.exports = extractImageTags;
