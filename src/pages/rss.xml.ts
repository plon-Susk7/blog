import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE_TITLE, SITE_DESCRIPTION, withBase } from '../consts';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: new URL(withBase('/'), context.site).toString(),
    items: posts
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.date,
        link: withBase(`posts/${post.id}/`),
        categories: post.data.tags,
      })),
  });
}
