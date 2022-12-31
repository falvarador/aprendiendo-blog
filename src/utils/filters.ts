export const filterArticles = (
  articles: Record<string, any>[]
): Record<string, any>[] => {
  const uniqueTags = [
    ...new Set(articles.map((article) => article.frontmatter.tags).flat()),
  ] as string[];

  return uniqueTags.map((tag) => {
    const filteredArticles = articles.filter((article) =>
      article.frontmatter.tags.includes(tag)
    );

    return {
      params: { tag },
      props: { articles: filteredArticles },
    };
  });
};
