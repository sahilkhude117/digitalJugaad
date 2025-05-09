'use client'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProductList from "../ProductList";
import { Product } from "../ProductCard";

interface Category {
  id: string;
  name: string;
}

interface ProductsByCategory {
  [key: string]: Product[];
}

const BestSellers: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  
  const categories: Category[] = [
    { id: "all", name: "All" },
    { id: "water-bottles", name: "Water Bottles" },
    { id: "accessories", name: "Accessories" },
    { id: "new-arrivals", name: "New Arrivals" }
  ];
  
  const products: ProductsByCategory = {
    "all": [
      { id: 1, name: "Cosmic Trip - Bottle", brand: "FLOWERS & SAINTS", price: 39.00, imageUrl: "/images/bottle-cosmic.jpeg", category: "water-bottles" },
      { id: 2, name: "Signature Bottle - Stealth Edition", brand: "FLOWERS & SAINTS", price: 39.00, imageUrl: "/images/bottle-cosmic.jpeg", category: "water-bottles" },
      { id: 3, name: "Meow Mode - Bottle", brand: "FLOWERS & SAINTS", price: 39.00, imageUrl: "/images/bottle-cosmic.jpeg", category: "water-bottles" },
      { id: 4, name: "Geometric Bottle", brand: "FLOWERS & SAINTS", price: 35.00, imageUrl: "/images/bottle-cosmic.jpeg", category: "water-bottles" },
      { id: 5, name: "Travel Mug - Forest", brand: "FLOWERS & SAINTS", price: 29.00, imageUrl: "/images/bottle-cosmic.jpeg", category: "accessories" }
    ]
  };
  
  // Populate category-specific products
  categories.forEach(category => {
    if (category.id !== "all") {
      products[category.id] = products.all.filter(product => product.category === category.id);
    }
  });

  const handleTabChange = (value: string): void => {
    setSelectedCategory(value);
  };

  return (
    <div id="best-sellers" className="w-full mx-auto px-4 py-12">
      <motion.h2 
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Best Sellers
      </motion.h2>
      
      <Tabs 
        defaultValue="all"
        className="w-full"
        onValueChange={handleTabChange}
      >
        <TabsList className="md:mb-6 w-full justify-start gap-4 rounded-none bg-transparent h-auto pb-2">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative"
            >
              <TabsTrigger 
                value={category.id}
                className="relative px-4 py-2 md:px-6 md:py-3 text-lg rounded-lg overflow-hidden 
                data-[state=active]:text-white data-[state=active]:bg-black hover:bg-black hover:text-white
                transition-colors duration-300 z-10 cursor-pointer group"
              > 
                <span className="relative z-10 w-full text-left transition-colors duration-300 
                    ease-in-out group-hover:text-white">
                    {category.name}
                </span>
              </TabsTrigger>
            </motion.div>
          ))}
        </TabsList>
        
        <AnimatePresence mode="wait">
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <ProductList products={products[category.id]} />
              </motion.div>
            </TabsContent>
          ))}
        </AnimatePresence>
      </Tabs>
    </div>
  );
};

export default BestSellers;