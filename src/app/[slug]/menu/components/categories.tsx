// components/RestaurantCategories.tsx
"use client";

import { useState } from "react";
import { Prisma } from "@prisma/client";
import { ScrollArea, Scrollbar } from "@radix-ui/react-scroll-area";
import { Clock } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Products from "./products";

interface RestaurantCategoriesProps {
  restaurant: Prisma.RestaurantGetPayload<{
    include: {
      menuCategories: {
        include: {
          products: true;
        };
      };
    };
  }>;
}

type MenuCategoriesWidthProducts = Prisma.MenuCategoryGetPayload<{
    include: { products: true };
}>

const RestaurantCategories = ({ restaurant }: RestaurantCategoriesProps) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategoriesWidthProducts>(
    restaurant.menuCategories[0],
  );

  const handleCategoryClick = (category: MenuCategoriesWidthProducts) => {
    setSelectedCategory(category);
  };

  const getCategoryButtonVarient = (category: MenuCategoriesWidthProducts) => {
    return selectedCategory.id === category.id ? "default" : "secondary";
  };

  return (
    <div className="relative z-50 -mt-6 rounded-t-3xl bg-white">
      <div className="p-5">
        <div className="flex items-center gap-3">
          <Image
            src={restaurant.avatarImageUrl}
            alt={restaurant.name}
            width={45}
            height={45}
            className="rounded-t-3xl"
          />
          <div>
            <h2 className="text-lg font-semibold">{restaurant.name}</h2>
            <p className="text-xs opacity-55">{restaurant.description}</p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-1 text-xs text-green-500">
          <Clock size={12} />
          <p>Aberto</p>
        </div>
      </div>

      <ScrollArea className="w-full overflow-x-auto">
        <div className="flex min-w-full gap-2 px-4 pb-2">
          {restaurant.menuCategories.map((category) => (
            <Button
              onClick={() => handleCategoryClick(category)}
              key={category.id}
              variant={getCategoryButtonVarient(category)}
              size="sm"
              className="whitespace-nowrap rounded-full"
            >
              {category.name}
            </Button>
          ))}
        </div>
        <Scrollbar orientation="horizontal" />
      </ScrollArea>
          <h3 className="px-5 font-semibold pt-8">{selectedCategory.name}</h3>
          <Products products={selectedCategory.products}/>
    </div>
  );
};

export default RestaurantCategories;
