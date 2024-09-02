function parseRobotsTxt(robotsTxtContent) {
  const robotsFlags = {
    exists: true,
    disallows: false,
    allows: false,
  };
  const robotsSuggestions = [];

  const lines = robotsTxtContent.split("\n");
  lines.forEach((line) => {
    if (line.includes("Disallow:")) {
      robotsFlags.disallows = true;
    }
    if (line.includes("Allow:")) {
      robotsFlags.allows = true;
    }
  });

  if (!robotsFlags.disallows) {
    robotsSuggestions.push("Use Disallow directives to restrict access.");
  }
  if (robotsFlags.disallows && !robotsFlags.allows) {
    robotsSuggestions.push("Use Allow directives to specify allowed pages.");
  }

  return {
    flags: robotsFlags,
    suggestions: robotsSuggestions,
    content: robotsTxtContent,
  };
}

module.exports = { parseRobotsTxt };
