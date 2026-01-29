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
  title: "Pedidos especiales con compra segura",
  description:
    "Gestionamos pedidos especiales con verificación de origen y asesoría personalizada en Cali y Jamundí.",
};

export default async function PedidosEspecialesPage() {
  const content = categoryContent["pedidos-especiales"];
  const category = await sanityFetch<CategoryRecord>(
    "*[_type == 'category' && slug.current == $slug][0]{title, description}",
    { slug: "pedidos-especiales" },
  );
  const products = await sanityFetch<ProductRecord[]>(
    "*[_type == 'product' && category->slug.current == $slug]{name, description}[0..5]",
    { slug: "pedidos-especiales" },
  );

  return (
    <CategoryPage
      title={category?.title ?? content.title}
      description={category?.description ?? content.description}
      slug="pedidos-especiales"
      products={products}
    />
  );
}
