'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Product } from '@/components/ProductCard'
import ProductCard from '@/components/ProductCard2'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Search, Filter, X, SlidersHorizontal, Grid3x3, List, ChevronUp } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"

// Sample product data
const products: Product[] = [
  {
    id: 1,
    name: "Business Plan Templates Bundle",
    brand: "BizTemplates",
    price: 39.99,
    imageUrl: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=2670&auto=format&fit=crop",
    category: "Templates",
  },
  {
    id: 2,
    name: "Financial Freedom eBook Collection",
    brand: "FinEdu",
    price: 24.99,
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=2574&auto=format&fit=crop",
    category: "eBooks",
  },
  {
    id: 3,
    name: "Premium Website Theme Pack",
    brand: "WebCraft",
    price: 59.99,
    imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2669&auto=format&fit=crop",
    category: "Templates",
  },
  {
    id: 4,
    name: "Social Media Marketing Guide",
    brand: "DigiGrowth",
    price: 29.99,
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop",
    category: "eBooks",
  },
  {
    id: 5,
    name: "Productivity Software Suite",
    brand: "TechBoost",
    price: 79.99,
    imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2670&auto=format&fit=crop",
    category: "Software",
  },
  {
    id: 6,
    name: "UI/UX Design Kit",
    brand: "DesignPro",
    price: 49.99,
    imageUrl: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=2670&auto=format&fit=crop",
    category: "Templates",
  },
  {
    id: 7,
    name: "Complete Python Development Course",
    brand: "CodeMasters",
    price: 89.99,
    imageUrl: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=2574&auto=format&fit=crop",
    category: "Courses",
  },
  {
    id: 8,
    name: "Photography Presets Collection",
    brand: "VisualArts",
    price: 34.99,
    imageUrl: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2670&auto=format&fit=crop",
    category: "Templates",
  }
];

// Get unique categories and brands
const categories = Array.from(new Set(products.map(product => product.category)));
const brands = Array.from(new Set(products.map(product => product.brand)));

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [sortOption, setSortOption] = useState<string>('');
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState<number[]>([0, 100]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  // Filter and sort products based on criteria
  useEffect(() => {
    let result = [...products];

    // Apply search query filter
    if (searchQuery) {
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory) {
      result = result.filter(product => product.category === selectedCategory);
    }

    // Apply brand filter
    if (selectedBrand) {
      result = result.filter(product => product.brand === selectedBrand);
    }

    // Apply price range filter
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Apply sorting
    if (sortOption) {
      switch (sortOption) {
        case 'price-low-high':
          result.sort((a, b) => a.price - b.price);
          break;
        case 'price-high-low':
          result.sort((a, b) => b.price - a.price);
          break;
        case 'name-a-z':
          result.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'name-z-a':
          result.sort((a, b) => b.name.localeCompare(a.name));
          break;
      }
    }

    setFilteredProducts(result);
    
    // Update active filters
    const filters = [];
    if (selectedCategory) filters.push(selectedCategory);
    if (selectedBrand) filters.push(selectedBrand);
    if (priceRange[0] > 0 || priceRange[1] < 100) filters.push(`$${priceRange[0]}-$${priceRange[1]}`);
    setActiveFilters(filters);
    
  }, [searchQuery, selectedCategory, selectedBrand, sortOption, priceRange]);

  // Handle scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const clearFilter = (filter: string) => {
    if (filter === selectedCategory) {
      setSelectedCategory('');
    } else if (filter === selectedBrand) {
      setSelectedBrand('');
    } else if (filter.startsWith('$')) {
      setPriceRange([0, 100]);
    }
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedBrand('');
    setPriceRange([0, 100]);
    setSortOption('');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 md:mb-8"
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Products</h1>
        <p className="text-sm md:text-base text-gray-600">
          Browse our collection of premium digital products for your business and personal needs
        </p>
      </motion.div>

      {/* Search and Filter Bar for Desktop */}
      <div className="hidden md:flex items-center justify-between mb-6 gap-4">
        <div className="relative flex-grow max-w-md">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search products..."
            className="pl-10 pr-4"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex gap-3">
          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            
            <SelectContent>
              <SelectItem value="price-low-high">Price: Low to High</SelectItem>
              <SelectItem value="price-high-low">Price: High to Low</SelectItem>
              <SelectItem value="name-a-z">Name: A to Z</SelectItem>
              <SelectItem value="name-z-a">Name: Z to A</SelectItem>
            </SelectContent>
          </Select>
          
          <div className="flex gap-2">
            <Button 
              variant={viewType === 'grid' ? 'default' : 'outline'} 
              size="icon" 
              onClick={() => setViewType('grid')}
            >
              <Grid3x3 className="h-4 w-4" />
            </Button>
            <Button 
              variant={viewType === 'list' ? 'default' : 'outline'} 
              size="icon" 
              onClick={() => setViewType('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Search and Filter */}
      <div className="flex md:hidden items-center justify-between mb-4 gap-2">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 h-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <Sheet open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="h-10 w-10">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85%] sm:w-[350px] overflow-y-auto rounded-lg">
            <SheetHeader>
              <SheetTitle>Filters & Sort</SheetTitle>
              <SheetDescription>
                Refine your product search
              </SheetDescription>
            </SheetHeader>
            <Separator />
            <div className="py-2 flex flex-col gap-5 ml-5">
              <div>
                <h3 className="text-sm font-medium mb-3">Sort By</h3>
                <RadioGroup value={sortOption} onValueChange={setSortOption}>
                  <div className="flex items-center space-x-2 py-1">
                    <RadioGroupItem value="price-low-high" id="sort1" />
                    <Label htmlFor="sort1">Price: Low to High</Label>
                  </div>
                  <div className="flex items-center space-x-2 py-1">
                    <RadioGroupItem value="price-high-low" id="sort2" />
                    <Label htmlFor="sort2">Price: High to Low</Label>
                  </div>
                  <div className="flex items-center space-x-2 py-1">
                    <RadioGroupItem value="name-a-z" id="sort3" />
                    <Label htmlFor="sort3">Name: A to Z</Label>
                  </div>
                  <div className="flex items-center space-x-2 py-1">
                    <RadioGroupItem value="name-z-a" id="sort4" />
                    <Label htmlFor="sort4">Name: Z to A</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-sm font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2 py-1">
                      <Checkbox 
                        id={`category-${category}`} 
                        checked={selectedCategory === category}
                        onCheckedChange={(checked) => {
                          setSelectedCategory(checked ? category : '');
                        }}
                      />
                      <Label htmlFor={`category-${category}`}>{category}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-sm font-medium mb-3">Brands</h3>
                <div className="space-y-2">
                  {brands.map((brand) => (
                    <div key={brand} className="flex items-center space-x-2 py-1">
                      <Checkbox 
                        id={`brand-${brand}`} 
                        checked={selectedBrand === brand}
                        onVolumeChange={(checked) => {
                          setSelectedBrand(checked ? brand : '');
                        }}
                      />
                      <Label htmlFor={`brand-${brand}`}>{brand}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h3 className="text-sm font-medium mb-3">Price Range</h3>
                <div className="mb-4">
                  <span className="text-sm text-gray-500">${priceRange[0]} - ${priceRange[1]}</span>
                </div>
                <Slider 
                  defaultValue={[0, 100]} 
                  max={100} 
                  step={1} 
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="mb-4"
                />
              </div>
            </div>
            
            <SheetFooter className="sticky bottom-0 bg-white flex-row gap-2 pt-4 border-t">
              <Button variant="outline" className="flex-1 cursor-pointer" onClick={clearAllFilters}>
                Clear All
              </Button>
              <Button className="flex-1 cursor-pointer" onClick={() => setIsMobileFilterOpen(false)}>
                Apply Filters
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      
      {/* Mobile Sort Button */}
      <div className="md:hidden mb-4">
      
        <Select value={sortOption} onValueChange={setSortOption}>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price-low-high">Price: Low to High</SelectItem>
            <SelectItem value="price-high-low">Price: High to Low</SelectItem>
            <SelectItem value="name-a-z">Name: A to Z</SelectItem>
            <SelectItem value="name-z-a">Name: Z to A</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-2 mb-4"
        >
          {activeFilters.map((filter, index) => (
            <Badge key={index} variant="outline" className="flex items-center gap-1 py-1 px-2">
              {filter}
              <button onClick={() => clearFilter(filter)} className="ml-1">
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
          {activeFilters.length > 0 && (
            <button 
              onClick={clearAllFilters} 
              className="text-sm text-blue-500 hover:text-blue-700"
            >
              Clear all
            </button>
          )}
        </motion.div>
      )}

      <div className="flex flex-col md:flex-row gap-6 md:gap-8 relative">
        {/* Sidebar for Desktop */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block w-64 shrink-0"
        >
          <div className="sticky top-24 space-y-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-3">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`desktop-category-${category}`} 
                      checked={selectedCategory === category}
                      onCheckedChange={(checked) => {
                        setSelectedCategory(checked ? category : '');
                      }}
                    />
                    <Label htmlFor={`desktop-category-${category}`}>{category}</Label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-3">Brands</h3>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <div key={brand} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`desktop-brand-${brand}`} 
                      checked={selectedBrand === brand}
                      onCheckedChange={(checked) => {
                        setSelectedBrand(checked ? brand : '');
                      }}
                    />
                    <Label htmlFor={`desktop-brand-${brand}`}>{brand}</Label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-3">Price Range</h3>
              <div className="mb-2">
                <span className="text-sm text-gray-500">${priceRange[0]} - ${priceRange[1]}</span>
              </div>
              <Slider 
                defaultValue={[0, 100]} 
                max={100} 
                step={1} 
                value={priceRange}
                onValueChange={setPriceRange}
              />
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <p className="text-xl font-medium mb-2">No products found</p>
              <p className="text-gray-500 mb-4">Try adjusting your search or filter criteria</p>
              <Button onClick={clearAllFilters}>Clear all filters</Button>
            </motion.div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-between mb-4"
              >
                <p className="text-sm text-gray-500">
                  Showing {filteredProducts.length} products
                </p>
                
                {/* Mobile View Switcher */}
                <div className="flex gap-2 md:hidden">
                  <Button 
                    variant={viewType === 'grid' ? 'default' : 'outline'} 
                    size="icon" 
                    className="h-8 w-8" 
                    onClick={() => setViewType('grid')}
                  >
                    <Grid3x3 className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant={viewType === 'list' ? 'default' : 'outline'} 
                    size="icon" 
                    className="h-8 w-8" 
                    onClick={() => setViewType('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className={viewType === 'grid' 
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6" 
                  : "flex flex-col gap-4"
                }
              >
                {filteredProducts.map((product) => (
                  <motion.div 
                    key={product.id}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
                    }}
                    className={viewType === 'list' ? "w-full" : ""}
                  >
                    <ProductCard product={product} viewType={viewType} />
                  </motion.div>
                ))}
              </motion.div>
            </>
          )}
        </div>
      </div>
      
      {/* Back to top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg z-50"
            aria-label="Back to top"
          >
            <ChevronUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
