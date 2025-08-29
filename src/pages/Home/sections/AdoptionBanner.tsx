// AdoptionBanner.tsx
import { PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import adoptionImage from "@/assets/adoption-pet.png"; // Your adoption image

export default function AdoptionBanner() {
  return (
    <section className="relative w-full max-w-[1180px] mx-auto bg-[#FFB775] rounded-2xl overflow-hidden my-16 px-6  lg:px-16 ">
      {/* Background decorative shapes */}
      <div className="absolute -left-40 -top-40 w-[782px] h-[635px] bg-[#FCEED5] rounded-[99px] -rotate-[25deg] opacity-80" />

      <div className="absolute right-40 top-10 w-[788px] h-[788px] bg-gradient-to-br from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA] rounded-[99px] rotate-[28deg] opacity-30" />

      {/* Paw icon */}
      <div className="absolute left-1/3 top-16 w-10 h-9 bg-[#003459] transform -rotate-12 opacity-20" />

      {/* Content container */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ">
        {/* Text content */}
        <motion.div
          className="text-left py-12 lg:py-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#003459] capitalize mb-4">
            Adoption
          </h2>
          <h3 className="text-2xl lg:text-3xl font-bold text-[#003459] capitalize mb-6">
            We need help. so do they.
          </h3>
          <p className="text-base text-[#242B33] mb-8 max-w-md">
            Adopt a pet and give it a home, it will love you back
            unconditionally.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#003459] text-white hover:bg-[#002A48] rounded-full px-8 py-6 text-base">
              Adopt Now
            </Button>
            <Button
              variant="outline"
              className="border-[#003459] text-[#003459] hover:bg-[#003459]/10 rounded-full px-8 py-6 text-base"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="relative h-full "
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={adoptionImage}
            alt="Adoptable pet"
            className="w-full h-full  mx-auto lg:ml-auto transform"
          />
        </motion.div>
      </div>
    </section>
  );
}
