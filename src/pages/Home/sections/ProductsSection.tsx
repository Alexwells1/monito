// ProductsSectionResponsive.tsx
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import products from "@/assets/products";
import gift from "@/assets/gift.png";

export default function ProductsSection() {
  return (
    <section className="w-full py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 lg:mb-12">
          <div className="mb-6 lg:mb-0 max-w-md">
            <p className="text-sm sm:text-base text-black mb-2 text-center lg:text-left">
              Hard to choose right products for your pets?
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-[#003459] capitalize text-center lg:text-left">
              Our Products
            </h2>
          </div>

          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <Button
              variant="outline"
              className="border-[#003459] text-[#003459] hover:bg-[#003459] hover:text-white rounded-full px-6"
            >
              View More
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile View More Button */}
        <div className="lg:hidden flex justify-center mt-8">
          <Button
            variant="outline"
            className="border-[#003459] text-[#003459] hover:bg-[#003459] hover:text-white rounded-full px-8"
          >
            View More
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

// Enhanced Product Card Component
function ProductCard({ product }: { product: (typeof products)[0] }) {
  return (
    <Card className="bg-white shadow-md hover:shadow-lg rounded-xl overflow-hidden border-0 transition-shadow duration-300">
      <CardContent className="p-2 sm:p-3">
        {/* Product Image */}
        <div className="w-full aspect-square bg-gray-100 rounded-lg mb-2 sm:mb-3 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="p-1 sm:p-2">
          {/* Product Name */}
          <h3 className="text-sm sm:text-base font-bold text-[#00171F] mb-2 line-clamp-2 min-h-[2.5rem]">
            {product.name}
          </h3>

          {/* Product Details */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 mb-2 sm:mb-3">
            <div className="flex items-center gap-1">
              <span className="text-xs text-[#667479] font-medium">
                Product:
              </span>
              <span className="text-xs text-[#667479] font-bold">
                {product.category}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xs text-[#667479] font-medium">Size:</span>
              <span className="text-xs text-[#667479] font-bold">
                {product.size}
              </span>
            </div>
          </div>

          {/* Price */}
          <p className="text-sm font-bold text-[#00171F] mb-3">
            {product.price}
          </p>

          {/* Promotion */}
          <div className="bg-[#FCEED5] rounded-lg p-2 sm:p-3 flex items-center gap-2">
            {/* Gift icon */}
            <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 relative">
              <img src={gift} alt="🎁" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-[#002A48] line-clamp-1">
              {product.promotion}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
