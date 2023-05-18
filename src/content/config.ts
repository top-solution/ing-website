import { z, defineCollection } from 'astro:content';

const landingCollection = defineCollection({
  schema: z.object({
    sortOrder: z.number(),
    title: z.string(),
    claim: z.string(),
  }),
});

export const collections = {
  'landing': landingCollection,
};