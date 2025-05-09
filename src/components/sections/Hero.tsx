"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FileText, Sparkles } from "lucide-react"
import { FloatingPaper } from "@/components/floating-paper"
import { useRouter } from "next/navigation"

export default function Hero() {
    const router = useRouter();
  return (
    <div className="relative min-h-[calc(100vh-76px)] flex items-center">
      {/* Floating papers background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaper count={6} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6">
              Digital Products At
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {" "}
                @99
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-base md:text-xl mb-8 max-w-2xl mx-auto"
          >
            Discover curated bundles of eBooks, templates, tools, software, and creative assets at unbeatable prices. Everything you need to start or scale your digital hustle
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button onClick={() => router.push('/products')} size="lg" className="text-white px-8 cursor-pointer">
              <FileText className="mr-2 h-5 w-5" />
              View Products
            </Button>
            <Button onClick={() => router.push('#best-sellers')} size="lg" variant="outline" className="text-black cursor-pointer">
              <Sparkles className="mr-2 h-5 w-5" />
              See Popular
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
