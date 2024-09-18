function extractLinks($) {
  const links = [];

  $("a").each((index, element) => {
    const href = $(element).attr("href");
    const linkText = $(element).text().trim();

    links.push({
      href: href,
      text: linkText,
      internal: href && href.startsWith("/"), // Assuming internal links start with "/"
    });
  });

  const linkSuggestions = [];
  if (links.length === 0) {
    linkSuggestions.push("Add links to improve user experience and SEO.");
  }
  if (links.some((link) => !link.internal)) {
    linkSuggestions.push(
      "Use relative URLs for internal links to improve page speed."
    );
  }
  if (links.some((link) => link.text === "")) {
    linkSuggestions.push(
      "Add descriptive text to links for better accessibility and SEO."
    );
  }

  return {
    links,
    linkSuggestions,
  };
}

module.exports = extractLinks;
