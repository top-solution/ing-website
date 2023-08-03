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

export const collections = {
  homepage: homepageBlockCollection,
  contacts: contactsCollection,
};

const ProjectSchema = z.object({
  image: z.string().optional(),
  title: z.string().optional(),
  description: z.string().optional(),
  projectType: z.string().optional(),
  height: z.string().optional(),
  year: z.string().optional(),
});

export type Project = z.infer<typeof ProjectSchema>;

export const ProjectCollection = defineCollection({
  schema: ProjectSchema,
});
