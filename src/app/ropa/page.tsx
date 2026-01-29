import type { Metadata } from "next";
import CategoryPage from "@/components/CategoryPage";
import { categoryContent } from "@/lib/constants";
import { sanityFetch } from "@/lib/sanity";

type CategoryRecord = {
  title?: string;
  description?: string;
};

type ProductRecord = {
  name: string;
  description?: string;
};

export const metadata: Metadata = {
  title: "Ropa boutique curada para tu estilo",
  description:
    "Ropa original y sofisticada con asesoría personalizada en Cali y Jamundí.",
};

export default async function RopaPage() {
  const content = categoryContent.ropa;
  const category = await sanityFetch<CategoryRecord>(
    "*[_type == 'category' && slug.current == $slug][0]{title, description}",
    { slug: "ropa" },
  );
  const products = await sanityFetch<ProductRecord[]>(
    "*[_type == 'product' && category->slug.current == $slug]{name, description}[0..5]",
    { slug: "ropa" },
  );

  return (
    <CategoryPage
      title={category?.title ?? content.title}
      description={category?.description ?? content.description}
      slug="ropa"
      products={products}
    />
  );
}
