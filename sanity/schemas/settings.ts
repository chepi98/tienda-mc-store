import { defineField, defineType } from "sanity";

export const settings = defineType({
  name: "settings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({
      name: "brandName",
      title: "Brand name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroTitle",
      title: "Hero title",
      type: "string",
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero subtitle",
      type: "text",
    }),
    defineField({
      name: "heroBadges",
      title: "Hero badges",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "trustPoints",
      title: "Trust points",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", type: "string" }),
            defineField({ name: "description", type: "text" }),
          ],
        },
      ],
    }),
    defineField({
      name: "howItWorks",
      title: "How it works",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", type: "string" }),
            defineField({ name: "description", type: "text" }),
          ],
        },
      ],
    }),
    defineField({
      name: "ctaTitle",
      title: "CTA title",
      type: "string",
    }),
    defineField({
      name: "ctaSubtitle",
      title: "CTA subtitle",
      type: "text",
    }),
    defineField({
      name: "whatsappNumber",
      title: "WhatsApp number",
      type: "string",
      description: "Use international format without symbols. Example: 573001112233",
    }),
    defineField({
      name: "locations",
      title: "Locations",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "socials",
      title: "Social links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", type: "string" }),
            defineField({ name: "url", type: "url" }),
          ],
        },
      ],
    }),
  ],
});
