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
  title: "Skincare premium y rutinas personalizadas",
  description:
    "Rutinas de skincare con productos originales y asesoría premium en Cali y Jamundí.",
};

export default async function SkincarePage() {
  const content = categoryContent.skincare;
  const category = await sanityFetch<CategoryRecord>(
    "*[_type == 'category' && slug.current == $slug][0]{title, description}",
    { slug: "skincare" },
  );
  const products = await sanityFetch<ProductRecord[]>(
    "*[_type == 'product' && category->slug.current == $slug]{name, description}[0..5]",
    { slug: "skincare" },
  );

  return (
    <CategoryPage
      title={category?.title ?? content.title}
      description={category?.description ?? content.description}
      slug="skincare"
      products={products}
    />
  );
}
