function analyzeHeadingTags($) {
  const headingTags = [];

  $("h1, h2, h3, h4, h5, h6").each((index, element) => {
    headingTags.push({
      tag: $(element).prop("tagName"),
      text: $(element).text().trim(),
    });
  });

  const hasMultipleH1 =
    headingTags.filter((tag) => tag.tag === "H1").length > 1;
  const hasNoH1 = headingTags.filter((tag) => tag.tag === "H1").length === 0;
  const hasDuplicateHeadings = headingTags.some(
    (tag, index, self) => self.findIndex((t) => t.text === tag.text) !== index
  );

  return {
    suggestions: [
      ...(hasMultipleH1 ? ["Use only one H1 tag per page."] : []),
      ...(hasNoH1
        ? ["Add a main heading (H1) to define the page's purpose."]
        : []),
      ...(hasDuplicateHeadings ? ["Avoid using duplicate headings."] : []),
    ],
    flags: {
      multipleH1: hasMultipleH1,
      noH1: hasNoH1,
      duplicateHeadings: hasDuplicateHeadings,
    },
  };
}

module.exports = analyzeHeadingTags;
