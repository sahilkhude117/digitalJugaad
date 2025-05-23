"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

type NavItem = {
  title: string;
  href: string;
};


export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}
    >
        <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2 font-bold">
            <div className="size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground">
                DJ
            </div>
            <span>Digital Jugaad</span>
            </div>
            <nav className="hidden md:flex gap-8">
            <Link
                href="/products"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
                Products
            </Link>
            <Link
                href="#best-sellers"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
                Best Sellers
            </Link>
            <Link
                href="#how-it-works"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
                How it works
            </Link>
            <Link
                href="#faq"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
                FAQ
            </Link>
            </nav>
            <div className="hidden md:flex gap-4 items-center">
            <Button className="rounded-full">
                Get Started
                <ChevronRight className="ml-1 size-4" />
            </Button>
            </div>
            <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                <span className="sr-only">Toggle menu</span>
            </Button>
            </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b m-2"
            >
            <div className="container py-4 flex flex-col gap-4 ">
                <Link href="/products" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Products
                </Link>
                <Link href="#best-sellers" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Best Sellers
                </Link>
                <Link href="#how-it-works" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                How it works
                </Link>
                <Link href="#faq" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                FAQ
                </Link>
                <div className="flex flex-col gap-2 pt-2 border-t">
                <Button className="rounded-full">
                    Get Started
                    <ChevronRight className="ml-1 size-4" />
                </Button>
                </div>
            </div>
            </motion.div>
        )}
    </header>
  );
};
