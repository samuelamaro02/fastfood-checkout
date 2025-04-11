import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import ProductDetails from "./components/product-details";
import ProductHeader from "./components/product-header";

interface ProductPageProps {
  params: Promise<{ slug: string; productId: string }>;
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug, productId } = await params;
  const product = await db.product.findFirst({
    where: { id: productId },
    include: { restaurant: { select: { name: true, avatarImageUrl: true } } },
  });
  if (!product) {
    return notFound();
  }

  return (
    <>
      <ProductHeader product={product} />
      <ProductDetails product={product} restaurant={product.restaurant} />
    </>
  );
};

export default ProductPage;
