import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      updated: z.coerce.date().optional(),
      tags: z.array(z.enum(['Research', 'Project', 'Learning', 'Hobby'])).min(1),
      draft: z.boolean().default(false),
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

export const collections = { blog };
