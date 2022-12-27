import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: "Aprendiendo | Blog",
    description: "Un viaje para compartir conocimiento y aprender juntos",
    site: "https://aprendiendo.run",
    items: import.meta.glob("./**/*.md"),
    customData: `<language>es-mx</language>`,
  });
