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
  title: "Vitaminas originales con asesoría premium",
  description:
    "Compra vitaminas auténticas con asesoría personalizada y envíos seguros en Cali y Jamundí.",
};

export default async function VitaminasPage() {
  const content = categoryContent.vitaminas;
  const category = await sanityFetch<CategoryRecord>(
    "*[_type == 'category' && slug.current == $slug][0]{title, description}",
    { slug: "vitaminas" },
  );
  const products = await sanityFetch<ProductRecord[]>(
    "*[_type == 'product' && category->slug.current == $slug]{name, description}[0..5]",
    { slug: "vitaminas" },
  );

  return (
    <CategoryPage
      title={category?.title ?? content.title}
      description={category?.description ?? content.description}
      slug="vitaminas"
      products={products}
    />
  );
}
