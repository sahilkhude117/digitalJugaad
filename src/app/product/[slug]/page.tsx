'use client'
import { useState, useEffect } from "react"
import Image from "next/image"
import { Star, Heart, ArrowRight, Truck, RefreshCw, ChevronDown, ChevronUp } from "lucide-react"
import { motion, useScroll, useAnimation, AnimatePresence } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ProductList from "@/components/ProductList"

interface Category {
  id: string;
  name: string;
}

interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  imageUrl: string;
  category: string;
}

interface ProductsByCategory {
  [key: string]: Product[];
}

export default function ProductPage() {
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const controls = useAnimation();
  

  // Products data
  const products: Product[] = 
    [
      { id: 1, name: "Cosmic Trip - Bottle", brand: "FLOWERS & SAINTS", price: 39.00, imageUrl: "/api/placeholder/400/500", category: "water-bottles" },
      { id: 2, name: "Signature Bottle - Stealth Edition", brand: "FLOWERS & SAINTS", price: 39.00, imageUrl: "/api/placeholder/400/500", category: "water-bottles" },
      { id: 3, name: "Meow Mode - Bottle", brand: "FLOWERS & SAINTS", price: 39.00, imageUrl: "/api/placeholder/400/500", category: "water-bottles" },
      { id: 4, name: "Geometric Bottle", brand: "FLOWERS & SAINTS", price: 35.00, imageUrl: "/api/placeholder/400/500", category: "water-bottles" }
    ]


  // Handle scroll events to show/hide floating button
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowFloatingButton(scrollY > 1000);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleRatingClick = (rating: number) => {
    setUserRating(rating);
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="aspect-square relative overflow-hidden rounded-xl bg-gray-100">
              <Image
                src="/images/bottle-cats.jpeg"
                alt="Essential Cotton T-Shirt"
                layout="fill"
                objectFit="cover"
                className="w-full h-full object-center object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Product Details */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <motion.h1 
                className="text-5xl font-bold mb-2 tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Essential Cotton T-Shirt
              </motion.h1>
              <motion.p 
                className="text-2xl font-light text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Comfort meets style
              </motion.p>
            </div>

            <motion.div 
              className="flex items-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-yellow-400 stroke-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-medium text-gray-500">(125 reviews)</span>
            </motion.div>

            <motion.p 
              className="text-4xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              $49.99
            </motion.p>

            <motion.p 
              className="text-xl text-gray-600 leading-relaxed mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Our Essential Cotton T-Shirt is the perfect blend of comfort and style. Made from 100% organic cotton,
              it's soft, breathable, and designed to last. An everyday staple that elevates your casual wardrobe.
            </motion.p>

            {/* Buy now and Wishlist */}
            <motion.div 
              className="flex space-x-4 md:absolute md:bottom-10 md:right-10 w-full md:max-w-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Button className="flex-1 bg-black hover:bg-gray-800 text-white py-8 text-xl font-semibold group transition-all duration-300">
                Buy Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="text-gray-500 hover:text-black border-gray-200 w-16 h-16 transition-colors duration-300"
              >
                <Heart className="w-8 h-8" />
                <span className="sr-only">Add to Wishlist</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Tabs Section */}
        <motion.div 
          className="mt-10 md:mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="w-full justify-start border-b mb-4 md:mb-8 h-12">
              <TabsTrigger 
                value="details" 
                className="text-lg relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform after:duration-300"
              >
                Product Details
              </TabsTrigger>
              <TabsTrigger 
                value="reviews" 
                className="text-lg relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform after:duration-300"
              >
                Reviews
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="mt-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our Premium Drink Bottle is designed with both style and functionality in mind. The double-wall vacuum
                  insulation keeps your drinks cold for up to 24 hours or hot for up to 12 hours. The sleek, modern
                  design fits comfortably in your hand and looks great on your desk or in your gym bag.
                </p>
                <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700">
                  <li>Made from high-quality, BPA-free stainless steel</li>
                  <li>Leak-proof lid with convenient carry loop</li>
                  <li>Wide mouth for easy filling and cleaning</li>
                  <li>Fits most car cup holders</li>
                  <li>Condensation-free exterior</li>
                </ul>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Add a review section */}
                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <h3 className="text-xl font-semibold mb-4">Write a Review</h3>
                  <div className="space-y-4">
                    <div>
                      <Label>Rating</Label>
                      <div className="flex mt-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            className={`w-6 h-6 cursor-pointer transition-colors duration-200 ${
                              star <= (hoveredRating || userRating) ? "fill-yellow-400 stroke-yellow-400" : "stroke-gray-300"
                            }`}
                            onMouseEnter={() => setHoveredRating(star)}
                            onMouseLeave={() => setHoveredRating(0)}
                            onClick={() => handleRatingClick(star)}
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="review">Your Review</Label>
                      <Textarea id="review" placeholder="Share your thoughts about this product" className="mt-1" rows={4} />
                    </div>
                    <Button className="bg-black hover:bg-gray-800">Submit Review</Button>
                  </div>
                </div>
                
                {/* Existing reviews */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 pb-6 border-b border-gray-100">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-xl font-semibold text-gray-600">JD</span>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold">John Doe</h3>
                        <div className="flex items-center my-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                          ))}
                          <span className="ml-2 text-sm text-gray-500">2 weeks ago</span>
                        </div>
                        <p className="text-gray-600 mt-2">Great bottle! Keeps my drinks cold all day. The design is sleek and modern, and I love how it doesn't sweat on the outside. Worth every penny.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                          <span className="text-xl font-semibold text-gray-600">JS</span>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-semibold">Jane Smith</h3>
                        <div className="flex items-center my-1">
                          {[1, 2, 3, 4].map((star) => (
                            <Star key={star} className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                          ))}
                          {[5].map((star) => (
                            <Star key={star} className="w-4 h-4 stroke-gray-300" />
                          ))}
                          <span className="ml-2 text-sm text-gray-500">1 month ago</span>
                        </div>
                        <p className="text-gray-600 mt-2">Stylish design, but a bit heavy when full. The insulation works amazingly well though - my coffee stays hot for hours!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
        
        {/* You May Also Like Section */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            You May Also Like
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <ProductList products={products} />
          </motion.div>
        </motion.div>
      </main>
      
      {/* Floating Buy Now Button */}
      <AnimatePresence>
        {showFloatingButton && (
          <motion.div 
            className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t rounded-t-lg border-gray-800 px-4 py-3 shadow-lg"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto flex items-center justify-between">
              <div className="flex flex-col">
                <h3 className="font-semibold text-lg">Cats Doodle - Bottle</h3>
                <p className="text-gray-500 text-sm">Sacred Sand / 500ml</p>
                <p className="font-bold text-lg">$39.00</p>
              </div>
              <Button className="bg-black hover:bg-gray-800 text-white py-4 px-8 text-base font-medium rounded-full shadow-md group transition-all duration-300">
                <span className="flex items-center">
                  Buy Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}