// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
  }),
});

export const collections = {
  posts,
};
