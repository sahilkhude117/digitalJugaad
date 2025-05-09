"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FileText, ShoppingCart } from "lucide-react"

interface FloatingPaperProps {
  count?: number
}

interface MotionData {
  initialX: number
  initialY: number
  animateX: number[]
  animateY: number[]
  duration: number
}

export function FloatingPaper({ count = 5 }: FloatingPaperProps) {
  const [motionData, setMotionData] = useState<MotionData[]>([])

  useEffect(() => {
    const width = window.innerWidth
    const height = window.innerHeight

    const getRandomMotionData = (): MotionData => ({
      initialX: Math.random() * width,
      initialY: Math.random() * height,
      animateX: [
        Math.random() * width,
        Math.random() * width,
        Math.random() * width,
      ],
      animateY: [
        Math.random() * height,
        Math.random() * height,
        Math.random() * height,
      ],
      duration: 20 + Math.random() * 10,
    })

    setMotionData(Array.from({ length: count }, () => getRandomMotionData()))
  }, [count])

  if (motionData.length === 0) return null // Prevent rendering before client data is ready

  return (
    <div className="relative w-full h-full">
      {motionData.map((data, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ x: data.initialX, y: data.initialY }}
          animate={{
            x: data.animateX,
            y: data.animateY,
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: data.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="relative w-16 h-20 rounded-lg flex items-center justify-center transform hover:scale-110 transition-transform">
            <ShoppingCart className="w-8 h-8 text-black-400/50" />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
