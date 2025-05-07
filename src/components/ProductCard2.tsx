'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Heart, ShoppingCart } from 'lucide-react'

export interface Product {
  id: number
  name: string
  brand: string
  price: number
  imageUrl: string
  category: string
}

interface ProductCardProps {
  product: Product
  viewType?: 'grid' | 'list'
}

export default function ProductCard({ product, viewType = 'grid' }: ProductCardProps) {
  const isGridView = viewType === 'grid'

  return isGridView ? (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full border border-gray-100 mr-10 ml-10 sm:mr-0 sm:ml-0 "
    >
      <div className="relative sm:h-56 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <Badge className="absolute top-3 right-3 bg-white text-black">{product.category}</Badge>
        <button 
          className="absolute top-3 left-3 p-1.5 bg-white/80 rounded-full hover:bg-white transition-colors"
          aria-label="Add to favorites"
        >
          <Heart className="h-4 w-4 text-gray-600" />
        </button>
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <div className="mb-2">
          <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
          <h3 className="font-medium text-sm sm:text-base line-clamp-2">{product.name}</h3>
        </div>
        
        <div className="mt-auto pt-3">
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
            <Button size="sm" className="text-xs px-3 py-1 h-8">
              <ShoppingCart className="h-3.5 w-3.5 mr-1" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  ) : (
    <motion.div
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-row border border-gray-100"
    >
      <div className="relative h-32 sm:h-40 aspect-square overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <Badge className="absolute top-2 left-2 bg-white text-black">{product.category}</Badge>
      </div>
      
      <div className="p-3 sm:p-4 flex-grow flex flex-col justify-between">
        <div>
          <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
          <h3 className="font-medium text-sm sm:text-base mb-1 sm:mb-2">{product.name}</h3>
          <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
        </div>
        
        <div className="flex items-center justify-between mt-2 sm:mt-0">
          <Button size="sm" className="text-xs px-3 py-1 h-8 sm:h-9">
            <ShoppingCart className="h-3.5 w-3.5 mr-1" />
            Add to Cart
          </Button>
          <button 
            className="p-1.5 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            aria-label="Add to favorites"
          >
            <Heart className="h-4 w-4 text-gray-600" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}