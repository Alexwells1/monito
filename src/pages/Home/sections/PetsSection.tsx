import pets from "@/assets/pets";
import { ProductCard } from "../../../components/ProductCard";


export default function PetsSection() {
  return (
    <section className="w-full max-w-[1440px] mx-auto py-16 px-6">
      {/* Heading */}
      <div className="flex flex-col gap-1 mb-10">
        <span className="text-sm font-medium text-black">Whats new?</span>
        <h2 className="text-2xl font-bold capitalize text-primary">
          Take a look at some of our pets
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
        {pets.map((pet) => (
          <ProductCard key={pet.id} {...pet} />
        ))}
      </div>
    </section>
  );
}
