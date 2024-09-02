function analyzePageStructure($) {
  const pageStructureSuggestions = [];

  // Flags to determine if certain elements are present
  const hasMainHeading = $("h1").length > 0;
  const hasSubheadings = $("h2, h3, h4, h5, h6").length > 0;
  const hasDescriptiveContent = $("p").length > 0;
  const hasLists = $("ul, ol").length > 0;
  const hasImages = $("img").length > 0;

  // Suggestions based on the presence or absence of elements
  if (!hasMainHeading) {
    pageStructureSuggestions.push(
      "Add a main heading (h1) to define the page's purpose."
    );
  }
  if (!hasSubheadings) {
    pageStructureSuggestions.push(
      "Use subheadings (h2-h6) to organize content and improve readability."
    );
  }
  if (!hasDescriptiveContent) {
    pageStructureSuggestions.push(
      "Add descriptive content to engage users and search engines."
    );
  }
  if (!hasLists) {
    pageStructureSuggestions.push(
      "Use lists (ul, ol) to present information in a clear and concise manner."
    );
  }
  if (!hasImages) {
    pageStructureSuggestions.push(
      "Add relevant images to break up content and enhance user experience."
    );
  }

  return {
    suggestions: pageStructureSuggestions,
    flags: {
      mainHeading: hasMainHeading,
      subheadings: hasSubheadings,
      descriptiveContent: hasDescriptiveContent,
      lists: hasLists,
      images: hasImages,
    },
  };
}

module.exports = analyzePageStructure;
