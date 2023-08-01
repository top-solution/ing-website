import { z, defineCollection } from "astro:content";

const HomepageBlockSchema = z.object({
  title: z.string().optional(),
  backgroundImage: z.string().optional(),
  ctaText: z.string().optional(),
  ctaHref: z.string().optional(),
});

export type HomepageBlock = z.infer<typeof HomepageBlockSchema>;

export const homepageBlockCollection = defineCollection({
  schema: HomepageBlockSchema,
});

export const collections = {
  homepage: homepageBlockCollection,
};
