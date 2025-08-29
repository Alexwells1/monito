// Footer.tsx
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed with:", email);
    setEmail("");
  };

  return (
    <footer className="w-full bg-gradient-to-br from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA] rounded-t-[40px] mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <motion.div
          className="bg-[#003459] rounded-2xl p-6 md:p-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <h3 className="text-2xl font-bold text-white capitalize flex-shrink-0 max-w-md">
              Register now so you don't miss our programs
            </h3>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto"
            >
              <Input
                type="email"
                placeholder="Type something here!"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white border-[#99A2A5] rounded-lg px-4 py-3 flex-grow"
                required
              />
              <Button
                type="submit"
                className="bg-[#003459] border border-white text-white hover:bg-[#002A48] rounded-lg px-6 py-3 whitespace-nowrap"
              >
                Subscribe Now
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Navigation Links */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-12 border-b border-[#CCD1D2] pb-12">
          <nav className="flex flex-wrap justify-center gap-6 md:gap-12">
            <a
              href="#"
              className="text-[#00171F] font-medium hover:text-[#003459] transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-[#00171F] font-medium hover:text-[#003459] transition-colors"
            >
              Category
            </a>
            <a
              href="#"
              className="text-[#00171F] font-medium hover:text-[#003459] transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-[#00171F] font-medium hover:text-[#003459] transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Social Media Links */}
          <div className="flex gap-6">
            <a
              href="#"
              className="text-[#00171F] hover:text-[#003459] transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-[#00171F] hover:text-[#003459] transition-colors"
            >
              <Twitter className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-[#00171F] hover:text-[#003459] transition-colors"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-[#00171F] hover:text-[#003459] transition-colors"
            >
              <Youtube className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#667479] text-sm md:text-base">
            © 2024 Monito. All rights reserved.
          </p>

          <div className="flex gap-6 text-[#667479] text-sm md:text-base">
            <a href="#" className="hover:text-[#003459] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#003459] transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
