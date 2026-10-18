(() => {
  const entries = Array.from(document.querySelectorAll("[data-post-engagement]"));

  if (entries.length === 0) {
    return;
  }

  const normalizeUrl = (value) => {
    return value.replace(/#.*$/, "").replace(/\/$/, "");
  };

  const fetchDiscussions = async () => {
    let nextUrl = `https://api.github.com/repos/${document.body.dataset.discussionsRepo}/discussions?per_page=100`;
    const discussions = [];

    while (nextUrl) {
      const response = await fetch(nextUrl, {
        headers: { Accept: "application/vnd.github+json" }
      });

      if (!response.ok) {
        throw new Error(`GitHub Discussions request failed: ${response.status}`);
      }

      discussions.push(...await response.json());
      const nextLink = response.headers.get("Link")?.match(/<([^>]+)>;\s*rel="next"/);
      nextUrl = nextLink ? nextLink[1] : null;
    }

    return discussions;
  };

  fetchDiscussions()
    .then((discussions) => {
      const discussionsByUrl = new Map(
        discussions.map((discussion) => [normalizeUrl(discussion.title), discussion])
      );

      entries.forEach((entry) => {
        const discussion = discussionsByUrl.get(normalizeUrl(entry.dataset.postUrl));
        const reactions = discussion?.reactions;
        const likes = (reactions?.["+1"] ?? 0) + (reactions?.heart ?? 0);
        const comments = discussion?.comments ?? 0;

        entry.querySelector("[data-like-count]").textContent = likes;
        entry.querySelector("[data-comment-count]").textContent = comments;
        entry.hidden = false;
      });
    })
    .catch((error) => {
      console.error("Unable to load post engagement counts.", error);
      entries.forEach((entry) => {
        entry.textContent = "Engagement counts unavailable";
        entry.hidden = false;
      });
    });
})();
