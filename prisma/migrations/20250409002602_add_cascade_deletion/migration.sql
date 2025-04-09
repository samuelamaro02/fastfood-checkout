-- DropForeignKey
ALTER TABLE "MenuCategory" DROP CONSTRAINT "MenuCategory_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "OrderProdutc" DROP CONSTRAINT "OrderProdutc_orderId_fkey";

-- DropForeignKey
ALTER TABLE "OrderProdutc" DROP CONSTRAINT "OrderProdutc_productId_fkey";

-- DropForeignKey
ALTER TABLE "Produtc" DROP CONSTRAINT "Produtc_menuCategoryID_fkey";

-- DropForeignKey
ALTER TABLE "Produtc" DROP CONSTRAINT "Produtc_restaurantId_fkey";

-- AddForeignKey
ALTER TABLE "MenuCategory" ADD CONSTRAINT "MenuCategory_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produtc" ADD CONSTRAINT "Produtc_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produtc" ADD CONSTRAINT "Produtc_menuCategoryID_fkey" FOREIGN KEY ("menuCategoryID") REFERENCES "MenuCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderProdutc" ADD CONSTRAINT "OrderProdutc_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Produtc"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderProdutc" ADD CONSTRAINT "OrderProdutc_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
