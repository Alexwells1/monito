// PetKnowledgeSection.tsx
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { blogPosts } from "@/assets/blog";



export default function PetKnowledgeSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div className="mb-6 lg:mb-0">
            <p className="text-base text-black mb-2">You already know?</p>
            <h2 className="text-2xl font-bold text-[#003459] capitalize">
              Useful pet knowledge
            </h2>
          </div>

          <Button
            variant="outline"
            className="border-[#003459] text-[#003459] hover:bg-[#003459] hover:text-white rounded-full hidden lg:flex"
          >
            View More
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* Mobile View More Button */}
        <div className="flex justify-center mt-8 lg:hidden">
          <Button
            variant="outline"
            className="border-[#003459] text-[#003459] hover:bg-[#003459] hover:text-white rounded-full"
          >
            View More
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

// Blog Card Component
function BlogCard({
  post,
  index,
}: {
  post: (typeof blogPosts)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="bg-white shadow-lg hover:shadow-xl rounded-xl overflow-hidden border-0 transition-all duration-300 hover:-translate-y-2">
        {/* Blog Image */}
        <div className="w-full h-60 bg-gray-200 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        <CardContent className="p-4">
          {/* Category Badge */}
          <div className="inline-flex items-center px-3 py-1 bg-[#00A7E7] rounded-full mb-4">
            <span className="text-xs font-bold text-white uppercase tracking-wide">
              {post.category}
            </span>
          </div>

          {/* Blog Title */}
          <h3 className="text-lg font-bold text-[#00171F] mb-3 line-clamp-2 leading-tight">
            {post.title}
          </h3>

          {/* Blog Excerpt */}
          <p className="text-sm text-[#242B33] leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
