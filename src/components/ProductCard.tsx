'use client'

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Check if viewport is mobile sized
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Listen for resize events
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const buttonVariant = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        repeat: 1,
        repeatType: "reverse" as const
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card 
        className="w-64 md:w-100 min-w-64 rounded-lg overflow-hidden h-110 md:h-full border-0"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          <div className="aspect-square w-full relative overflow-hidden cursor-pointer">
            <motion.img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-full object-cover rounded-t-xl cursor-pointer "
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            />
            <AnimatePresence>
              {(isHovered || isMobile) && (
                <motion.div 
                  className="absolute inset-0 flex items-end justify-center p-4 bg-black/20 rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    whileHover="hover"
                    variants={buttonVariant}
                  >
                    <Button 
                      className="w-full bg-black text-white p-5 hover:bg-gray-800 cursor-pointer"
                      size="sm"
                    >
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to cart
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <CardContent className="p-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="text-xs text-gray-500 hover:underline cursor-pointer uppercase mb-2">{product.brand}</div>
            <h3 className="font-medium text-lg mb-2 hover:underline cursor-pointer">{product.name}</h3>
            <div className="font-bold">${product.price.toFixed(2)}</div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;