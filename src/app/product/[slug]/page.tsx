import Image from "next/image"
import { Star, Heart, ArrowRight, Truck, RefreshCw, Minus, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
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

const products:Product[] = [
    { id: 1, name: "Cosmic Trip - Bottle", brand: "FLOWERS & SAINTS", price: 39.00, imageUrl: "/images/bottle-cosmic.jpeg", category: "water-bottles" },
]

  return (
    <div className="min-h-screen bg-white font-sans">
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <Carousel className="w-full">
              <CarouselContent>
                {[1, 2, 3, 4].map((i) => (
                  <CarouselItem key={i}>
                    <div className="aspect-square relative overflow-hidden rounded-xl bg-gray-100">
                      <Image
                        src={`/placeholder.svg?height=800&width=800&text=Product${i}`}
                        alt={`Product image ${i}`}
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square relative overflow-hidden rounded-lg bg-gray-100 cursor-pointer transition-all duration-300 hover:ring-2 hover:ring-black"
                >
                  <Image
                    src={`/placeholder.svg?height=200&width=200&text=View${i}`}
                    alt={`Thumbnail ${i}`}
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full object-center object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold mb-2 tracking-tight">Essential Cotton T-Shirt</h1>
              <p className="text-2xl font-light text-gray-500">Comfort meets style</p>
            </div>

            <div className="flex items-center space-x-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-yellow-400 stroke-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-medium text-gray-500">(125 reviews)</span>
            </div>

            <p className="text-4xl font-bold">$49.99</p>

            <p className="text-xl text-gray-600 leading-relaxed mb-20">
              Our Essential Cotton T-Shirt is the perfect blend of comfort and style. Made from 100% organic cotton,
              it's soft, breathable, and designed to last. An everyday staple that elevates your casual wardrobe.
            </p>

            {/* Add to Cart and Wishlist */}
            <div className="flex space-x-4">
              <Button className="flex-1 bg-black hover:bg-gray-800 text-white py-8 text-xl font-semibold">
                Add to Bag
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="text-gray-500 hover:text-black border-gray-200 w-16 h-16"
              >
                <Heart className="w-8 h-8" />
                <span className="sr-only">Add to Wishlist</span>
              </Button>
            </div>
          </div>
        </div>


        <div className="mt-16">
            <Tabs defaultValue="details">
              <TabsList className="w-full justify-start border-b">
                <TabsTrigger value="details" className="text-lg">
                  Product Details
                </TabsTrigger>
                <TabsTrigger value="specs" className="text-lg">
                  Specifications
                </TabsTrigger>
                <TabsTrigger value="reviews" className="text-lg">
                  Reviews
                </TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="mt-4">
                <p className="text-gray-700">
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
              </TabsContent>
              <TabsContent value="specs" className="mt-4">
                <table className="w-full text-left">
                  <tbody>
                    <tr className="border-b">
                      <th className="py-2 pr-4 font-semibold">Capacity</th>
                      <td className="py-2">500ml, 750ml, 1L</td>
                    </tr>
                    <tr className="border-b">
                      <th className="py-2 pr-4 font-semibold">Material</th>
                      <td className="py-2">18/8 Stainless Steel</td>
                    </tr>
                    <tr className="border-b">
                      <th className="py-2 pr-4 font-semibold">Insulation</th>
                      <td className="py-2">Double-wall vacuum</td>
                    </tr>
                    <tr className="border-b">
                      <th className="py-2 pr-4 font-semibold">Lid Type</th>
                      <td className="py-2">Screw-top with carry loop</td>
                    </tr>
                    <tr className="border-b">
                      <th className="py-2 pr-4 font-semibold">Cold Retention</th>
                      <td className="py-2">Up to 24 hours</td>
                    </tr>
                    <tr>
                      <th className="py-2 pr-4 font-semibold">Hot Retention</th>
                      <td className="py-2">Up to 12 hours</td>
                    </tr>
                  </tbody>
                </table>
              </TabsContent>
              <TabsContent value="reviews" className="mt-4">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-xl font-semibold text-gray-600">JD</span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold">John Doe</h3>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="w-4 h-4 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-gray-600 mt-1">Great bottle! Keeps my drinks cold all day.</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-xl font-semibold text-gray-600">JS</span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold">Jane Smith</h3>
                      <div className="flex items-center">
                        {[1, 2, 3, 4].map((star) => (
                          <Star key={star} className="w-4 h-4 text-yellow-400" />
                        ))}
                        {[5].map((star) => (
                          <Star key={star} className="w-4 h-4 text-gray-300" />
                        ))}
                      </div>
                      <p className="text-gray-600 mt-1">Stylish design, but a bit heavy when full.</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
        </div>

        {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <ProductList products={products}/>
            </div>
          </div>

      </main>
    </div>
  )
}
