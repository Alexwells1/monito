// HeroBannerResponsive.tsx
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.png";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[500px] lg:h-[695px] overflow-hidden bg-gradient-to-br from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA] md:rounded-b-[40px]">
      {/* Background shapes - hidden on mobile, visible on larger screens */}
      <div className="hidden lg:block absolute w-[635px] h-[635px] left-1/2 top-1/2 -translate-x-1/4 -translate-y-1/4 bg-[#003459] rounded-[99px] rotate-[9.35deg]" />
      <div className="hidden lg:block absolute w-[635px] h-[635px] left-1/2 top-1/2 -translate-x-1/4 -translate-y-1/3 bg-[#F7DBA7] rounded-[99px] rotate-[25.23deg]" />
      <div className="hidden lg:block absolute w-[635px] h-[635px] -left-24 top-3/4 bg-[#F7DBA7] opacity-40 rounded-[99px] rotate-[56.47deg]" />
      <div className="hidden lg:block absolute w-[635px] h-[635px] -left-80 -top-80 bg-[#F7DBA7] rounded-[99px] rotate-[25.23deg]" />

      {/* Small decorative shapes */}
      <div className="absolute w-12 h-12 lg:w-[67px] lg:h-[67px] left-6 lg:left-28 top-20 lg:top-40 bg-[#F7DBA7] rounded-lg lg:rounded-xl rotate-[25.23deg]" />
      <div className="absolute w-3 h-3 lg:w-[15px] lg:h-[15px] left-3/4 lg:left-[757px] top-16 lg:top-36 bg-[#F7DBA7] rounded-sm lg:rounded rotate-[20.79deg]" />

      {/* Content container */}
      <div className="relative container mx-auto h-full flex items-center px-4 py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text content */}
          <div className="max-w-lg space-y-4 lg:space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#002A48] leading-tight lg:leading-[68px] capitalize">
              One more friend
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#002A48] leading-tight lg:leading-[60px] capitalize">
              Thousands more fun!
            </h2>
            <p className="text-sm md:text-base text-[#242B33] leading-6 max-w-md mx-auto lg:mx-0">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start pt-4">
              <Button
                className="bg-[#003459] hover:bg-[#002A48] rounded-full h-12 px-6 lg:px-7 text-white"
                size="lg"
              >
                Explore Now
              </Button>

              <Button
                variant="outline"
                className="border-[#003459] text-[#003459] hover:bg-[#003459] hover:text-white rounded-full h-12 px-6 lg:px-7"
                size="lg"
              >
                <Play className="mr-2 h-4 w-4 lg:h-5 lg:w-5 fill-[#003459] stroke-[#003459]" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Image - hidden on mobile, visible on larger screens */}
          <div className="hidden lg:block relative lg:absolute right-0 bottom-0 w-full lg:w-[944px] h-[693px]">
            <img
              src={heroImage}
              alt="Happy woman with corgi dog"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Mobile image at bottom */}
      <div className="lg:hidden relative w-full h-64 mt-8">
        <img
          src={heroImage}
          alt="Happy woman with corgi dog"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
}
