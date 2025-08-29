import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  gender: string;
  age: string;
  price: string;
  breed?: string;
  location?: string;
}

export function ProductCard({
  id,
  name,
  image,
  gender,
  age,
  price,
  breed = "Mixed Breed",
  location = "Shelter",
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleShare = (platform: string) => {
    const shareUrl = window.location.origin + `/pets/${id}`;
    const shareText = `Meet ${name}, a ${age} ${gender} ${breed} looking for a forever home!`;

    const shareConfig = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        shareText
      )}&url=${encodeURIComponent(shareUrl)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(
        shareText + " " + shareUrl
      )}`,
      copy: shareUrl,
    };

    if (platform === "copy") {
      navigator.clipboard.writeText(shareUrl);
      // You might want to add a toast notification here
      return;
    }

    if (shareConfig[platform as keyof typeof shareConfig]) {
      window.open(
        shareConfig[platform as keyof typeof shareConfig],
        "_blank",
        "width=600,height=400"
      );
    }
  };

  return (
    <Card className="w-[280px] h-[424px] flex flex-col p-2 shadow-lg hover:shadow-xl rounded-xl bg-background transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative w-full h-[264px] rounded-lg bg-white overflow-hidden group">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full p-2"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart
            className={`h-4 w-4 ${
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </Button>

        {/* Gender Badge */}
        <div className="absolute top-2 left-2 bg-primary/90 text-white px-2 py-1 rounded-full text-xs font-medium">
          {gender}
        </div>
      </div>

      <CardContent className="flex flex-col gap-3 px-2 py-3 flex-grow">
        {/* Name */}
        <h3 className="text-base font-bold text-[#00171F] line-clamp-1">
          {name}
        </h3>

        {/* Breed and Location */}
        <div className="flex flex-col gap-1 text-xs text-[#667479]">
          <div className="flex gap-1">
            <span className="font-medium">Breed:</span>
            <span className="font-bold">{breed}</span>
          </div>
          <div className="flex gap-1">
            <span className="font-medium">Location:</span>
            <span className="font-bold">{location}</span>
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-wrap gap-4 text-xs text-[#667479]">
          <div className="flex gap-1">
            <span className="font-medium">Gender:</span>
            <span className="font-bold">{gender}</span>
          </div>
          <div className="flex gap-1">
            <span className="font-medium">Age:</span>
            <span className="font-bold">{age}</span>
          </div>
        </div>

        {/* Price */}
        <p className="text-sm font-bold tracking-wide text-[#00171F] mt-2">
          {price}
        </p>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-auto pt-3">
          <Link
            to={`/pets/${id}`}
            className="text-sm bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            View Details
          </Link>

          {/* Share Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="h-9 w-9">
                <Share2 className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => handleShare("facebook")}>
                Share on Facebook
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleShare("twitter")}>
                Share on Twitter
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleShare("whatsapp")}>
                Share on WhatsApp
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleShare("copy")}>
                Copy Link
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );
}
