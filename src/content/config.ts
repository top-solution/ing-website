import { z, defineCollection, } from "astro:content";
export const homepageBlockCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string().optional(),
      backgroundImage: image().optional(),
      ctaText: z.string().optional(),
      ctaHref: z.string().optional(),
    }),
});
const AboutBlockSchema = z.object({
  title: z.string().optional(),
});
export type AboutBlock = z.infer<typeof AboutBlockSchema>;
export const AboutBlockCollection = defineCollection({
  schema: AboutBlockSchema,
});
const ContactsSchema = z.object({
  phone: z.string().optional(),
  mobile: z.string().optional(),
  emails: z.string().array(),
  address: z.string().optional(),
  addressHref: z.string().optional(),
  links: z
    .object({
      title: z.string(),
      href: z.string(),
    })
    .array(),
});
export type Contacts = z.infer<typeof ContactsSchema>;
export const contactsCollection = defineCollection({
  schema: ContactsSchema,
});
export const ProjectCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      image: image(),
      title: z.string().optional(),
      description: z.string().optional(),
      projectType: z.string().optional(),
      height: z.string().optional(),
      year: z.string().optional(),
    }),
});

export const collections = {
  homepage: homepageBlockCollection,
  contacts: contactsCollection,
  projects: ProjectCollection
};



