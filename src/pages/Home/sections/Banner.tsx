import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import girlDogImage from "@/assets/horizontal-shot-adult-girl-jeans-overalls-kissing-cute-puppy-while-raising-it-air-young-girl-being-love-with-her-dog-clothed-trendy-jumper-display-affection.png";

export default function Banner() {
  return (
    <section className="relative w-full max-w-[1180px] mx-auto bg-gradient-to-r from-[#003459] to-[#002A48] rounded-2xl overflow-hidden mt-16 px-6 py-10 lg:px-12 lg:py-12 flex flex-col lg:flex-row items-center justify-between">
      {/* Decorative shapes */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[500px] bg-[#FCEED5] rounded-[99px] rotate-[25deg] opacity-20" />
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-[#F7DBA7] rounded-[99px] rotate-[-15deg] opacity-20" />

      {/* Additional small decorative elements */}
      <div className="absolute top-20 right-20 w-12 h-12 bg-[#FCEED5] rounded-full opacity-30" />
      <div className="absolute bottom-20 left-20 w-8 h-8 bg-[#F7DBA7] rounded-full opacity-40" />

      {/* Left content */}
      <motion.div
        className="relative z-10 flex flex-col gap-4 text-white max-w-md order-2 lg:order-1 mt-8 lg:mt-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl lg:text-5xl font-extrabold capitalize">
          One more friend
        </h2>
        <h3 className="text-2xl lg:text-3xl font-bold capitalize text-[#FCEED5]">
          Thousands more fun!
        </h3>
        <p className="text-sm lg:text-base text-white/90 leading-relaxed">
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button
            variant="outline"
            className=" rounded-full px-6 py-6 text-primary font-medium"
          >
            <PlayCircle className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
          <Button className="  rounded-full px-6 py-6 text-base font-medium">
            Explore Now
          </Button>
        </div>
      </motion.div>

      {/* Right image */}
      <motion.div
        className="relative z-10 flex-shrink-0 order-1 lg:order-2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img
          src={girlDogImage}
          alt="Happy girl with puppy"
          className="w-[400px] lg:w-[500px] max-w-full rounded-2xl "
        />
      </motion.div>
    </section>
  );
}
