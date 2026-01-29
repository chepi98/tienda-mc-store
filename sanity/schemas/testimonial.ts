import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonios",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nombre",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      title: "Categoría",
      type: "string",
    }),
    defineField({
      name: "quote",
      title: "Testimonio",
      type: "text",
    }),
  ],
});
